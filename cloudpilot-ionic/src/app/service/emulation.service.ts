import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Cloudpilot, PalmButton } from '../helper/Cloudpilot';
import { Injectable, NgZone } from '@angular/core';
import { clearStoredSession, getStoredSession, setStoredSession } from '../helper/storedSession';

import { AlertService } from 'src/app/service/alert.service';
import { Average } from './../helper/Average';
import { DeviceId } from '../model/DeviceId';
import { EmulationStateService } from './emulation-state.service';
import { ErrorService } from './error.service';
import { Event } from 'microevent.ts';
import { Fifo } from './../helper/Fifo';
import { FileService } from 'src/app/service/file.service';
import { ModalWatcherService } from './modal-watcher.service';
import { Mutex } from 'async-mutex';
import { PwmUpdate } from './../helper/Cloudpilot';
import { Session } from 'src/app/model/Session';
import { SnapshotService } from './snapshot.service';
import { StorageService } from './storage.service';

export const GRAYSCALE_PALETTE_RGBA = [
    0xffd2d2d2,
    0xffc4c4c4,
    0xffb6b6b6,
    0xffa8a8a8,
    0xff9a9a9a,
    0xff8c8c8c,
    0xff7e7e7e,
    0xff707070,
    0xff626262,
    0xff545454,
    0xff464646,
    0xff383838,
    0xff2a2a2a,
    0xff1c1c1c,
    0xff0e0e0e,
    0xff000000,
];

export const GRAYSCALE_PALETTE_HEX = GRAYSCALE_PALETTE_RGBA.map(
    (x) => '#' + (x & 0xffffff).toString(16).padStart(6, '0')
);

const PEN_MOVE_THROTTLE = 25;
const SNAPSHOT_INTERVAL = 1000;
const ENGAGE_POWER_BUTTON_DURATION = 250;
const PWM_FIFO_SIZE = 10;
const SPEED_AVERAGE_N = 20;
const MIN_FPS = 30;

@Injectable({
    providedIn: 'root',
})
export class EmulationService {
    constructor(
        private storageService: StorageService,
        private ngZone: NgZone,
        private loadingController: LoadingController,
        private emulationState: EmulationStateService,
        private snapshotService: SnapshotService,
        private errorService: ErrorService,
        private fileService: FileService,
        private alertService: AlertService,
        private modalWatcher: ModalWatcherService
    ) {
        this.canvas.width = 160;
        this.canvas.height = 160;

        this.imageData.data.fill(255);

        const context = this.canvas.getContext('2d');
        if (!context) {
            throw new Error('get a new browser');
        }

        this.context = context;

        storageService.sessionChangeEvent.addHandler(this.onSessionChange);
        errorService.fatalErrorEvent.addHandler(this.pause);
        this.alertService.emergencySaveEvent.addHandler(this.onEmergencySave);

        this.cloudpilot.then((instance) => {
            instance.fatalErrorEvent.addHandler(this.errorService.fatalInNativeCode);
            instance.pwmUpdateEvent.addHandler(this.onPwmUpdate);
        });

        const storedSession = getStoredSession();
        if (storedSession !== undefined) {
            this.bootstrapCompletePromise = this.switchSession(storedSession);
        } else {
            this.bootstrapCompletePromise = Promise.resolve();
        }
    }

    bootstrapComplete(): Promise<void> {
        return this.bootstrapCompletePromise;
    }

    switchSession = (id: number): Promise<void> =>
        this.mutex.runExclusive(async () => {
            if (id === this.emulationState.getCurrentSession()?.id) {
                return;
            }

            const loader = await this.loadingController.create({ message: 'Loading...' });
            await loader.present();

            try {
                const session = await this.storageService.getSession(id);
                this.emulationState.setCurrentSession(session);

                if (!session) {
                    throw new Error(`invalid session ${id}`);
                }

                const [rom, memory, state] = await this.storageService.loadSession(session);
                if (!rom) {
                    throw new Error(`invalid ROM ${session.rom}`);
                }

                const cloudpilot = await this.cloudpilot;
                let memoryLoaded = false;

                cloudpilot.initializeSession(rom, session.device);

                if (memory) {
                    const emulatedMemory = cloudpilot.getMemory();

                    if (emulatedMemory.length === memory.length) {
                        emulatedMemory.set(memory);
                        memoryLoaded = true;
                    } else {
                        console.error(
                            `memory size mismatch; ${emulatedMemory.length} vs. ${memory.length} - ignoring image`
                        );
                    }
                }

                if (memoryLoaded && state) {
                    cloudpilot.loadState(state);
                }

                this.powerButtonEngaged = false;
                (await this.cloudpilot).queueButtonUp(PalmButton.power);

                this.pendingPwmUpdates.flush();

                this.clearCanvas();
                setStoredSession(id);

                await this.snapshotService.initialize(session, await this.cloudpilot);

                this.deviceHotsyncName = undefined;
                this.emulationSpeed = 1;
                this.speedAverage.reset(1);
            } finally {
                await loader.dismiss();
            }
        });

    resume = (): Promise<void> =>
        this.mutex.runExclusive(async () => {
            if (!this.emulationState.getCurrentSession() || this.running || this.errorService.hasFatalError()) {
                return;
            }

            this.cloudpilotInstance = await this.cloudpilot;

            this.clockEmulator = performance.now();

            this.ngZone.runOutsideAngular(
                () => (this.animationFrameHandle = requestAnimationFrame(this.onAnimationFrame))
            );

            this.lastSnapshotAt = performance.now();
            this.setRunning(true);
        });

    pause = (): Promise<void> =>
        this.mutex.runExclusive(async () => {
            this.stopLoop();

            if (!this.errorService.hasFatalError() && this.emulationState.getCurrentSession()) {
                await this.snapshotService.waitForPendingSnapshot();
                await this.snapshotService.triggerSnapshot();
            }
        });

    stop = (): Promise<void> =>
        this.mutex.runExclusive(async () => {
            this.stopLoop();

            this.emulationState.setCurrentSession(undefined);
        });

    engagePower(): void {
        if (!this.cloudpilotInstance) return;

        this.powerButtonEngaged = true;
        this.powerButtonDuration = 0;

        this.cloudpilotInstance.queueButtonDown(PalmButton.power);
    }

    handlePointerMove(x: number, y: number): void {
        const ts = performance.now();
        this.penDown = true;

        if (ts - this.lastPenUpdate < PEN_MOVE_THROTTLE || !this.cloudpilotInstance) return;

        this.cloudpilotInstance.queuePenMove(x, y);
        this.lastPenUpdate = ts;
    }

    handlePointerUp(): void {
        if (this.cloudpilotInstance && this.penDown) this.cloudpilotInstance.queuePenUp();

        this.lastPenUpdate = 0;
        this.penDown = false;
    }

    handleButtonDown(button: PalmButton): void {
        if (this.cloudpilotInstance) this.cloudpilotInstance.queueButtonDown(button);
    }

    handleButtonUp(button: PalmButton): void {
        if (this.cloudpilotInstance) this.cloudpilotInstance.queueButtonUp(button);
    }

    handleKeyDown(key: number, ctrl = false) {
        if (this.cloudpilotInstance) this.cloudpilotInstance.queueKeyboardEvent(key, ctrl);
    }

    reset(): void {
        if (this.cloudpilotInstance) this.cloudpilotInstance.reset();
    }

    resetNoExtensions(): void {
        if (this.cloudpilotInstance) this.cloudpilotInstance.resetNoExtensions();
    }

    resetHard(): void {
        if (this.cloudpilotInstance) this.cloudpilotInstance.resetHard();
    }

    isRunning(): boolean {
        return this.running;
    }

    isPowerOff(): boolean {
        return this.powerOff;
    }

    isUiInitialized(): boolean {
        return this.uiInitialized;
    }

    installFile(data: Uint8Array): Promise<number> {
        return this.cloudpilot.then((c) => c.installFile(data));
    }

    getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    private onSessionChange = (sessionId: number): Promise<void> =>
        this.mutex.runExclusive(async () => {
            if (sessionId !== this.emulationState.getCurrentSession()?.id) return;

            this.emulationState.setCurrentSession(await this.storageService.getSession(sessionId));

            if (!this.emulationState.getCurrentSession()) {
                clearStoredSession();

                this.stopLoop();
            }
        });

    private onPwmUpdate = (pwmUpdate: PwmUpdate) => {
        if (this.pendingPwmUpdates.count() > 0 && this.pendingPwmUpdates.peekLast()!.frequency < 0) {
            this.pendingPwmUpdates.replaceLast(pwmUpdate);
        } else {
            this.pendingPwmUpdates.push(pwmUpdate);
        }
    };

    private setRunning(running: boolean): void {
        if (running === this.running) return;

        this.running = running;
        this.emulationStateChangeEvent.dispatch(running);
    }

    private onEmergencySave = (): Promise<void> =>
        this.mutex.runExclusive(async () => {
            const session = this.emulationState.getCurrentSession();

            if (session) {
                this.fileService.emergencySaveSession(session, await this.cloudpilot);
            }
        });

    private stopLoop(): void {
        if (!this.running) return;

        if (this.animationFrameHandle > 0) {
            cancelAnimationFrame(this.animationFrameHandle);
            this.animationFrameHandle = -1;
        }

        if (this.advanceEmulationHandle !== undefined) {
            window.clearTimeout(this.advanceEmulationHandle);

            this.advanceEmulationHandle = undefined;
        }

        this.setRunning(false);
    }

    private clearCanvas(): void {
        this.context.beginPath();
        this.context.rect(0, 0, 160, 160);
        this.context.fillStyle =
            this.emulationState.getCurrentSession()?.device === DeviceId.m515 ? 'white' : GRAYSCALE_PALETTE_HEX[0];
        this.context.fill();
    }

    private updateEmulationSpeed(currentSpeed: number) {
        if (currentSpeed >= 1 && this.emulationSpeed >= 1) return;

        // Speed < 1 ? -> bin it in 0.1 .. 0.9
        const normalizedSpeed = Math.min(Math.max(Math.floor(currentSpeed * 10) / 10, 0.1), 1);

        if (normalizedSpeed <= this.emulationSpeed) {
            // speed decline is accepted directly
            this.emulationSpeed = normalizedSpeed;
        } else {
            // speed increase is subject to 5% hysteresis
            this.emulationSpeed = currentSpeed - normalizedSpeed >= 0.05 ? normalizedSpeed : this.emulationSpeed;
        }
    }

    private onAnimationFrame = (): void => {
        this.animationFrameHandle = -1;

        if (this.errorService.hasFatalError()) return;

        if (!this.modalWatcher.isModalActive()) {
            this.performScreenUpdate();

            if (this.pendingPwmUpdates.count() > 0) {
                this.pwmUpdateEvent.dispatch(this.pendingPwmUpdates.pop()!);
            }

            if (this.advanceEmulationHandle === undefined) {
                this.advanceEmulationHandle = window.setTimeout(this.advanceEmulation, 0);
            }
        }

        this.animationFrameHandle = requestAnimationFrame(this.onAnimationFrame);
    };

    private performScreenUpdate(): void {
        if (this.cloudpilotInstance.isScreenDirty()) {
            this.updateScreen();
            this.cloudpilotInstance.markScreenClean();
        }
    }

    private advanceEmulation = (): void => {
        this.advanceEmulationHandle = undefined;

        if (this.errorService.hasFatalError()) return;

        const timestamp = performance.now();

        // Scale the clock by the calculated emulation speed
        this.cloudpilotInstance.setClockFactor(this.emulationSpeed);

        // Limit the time that we try to catch up. This will avoid that we lock onto a low
        // FPS if the emulation cannot run at full speed
        if (timestamp - this.clockEmulator > 1000 / MIN_FPS) this.clockEmulator = timestamp - 1000 / MIN_FPS;

        const cyclesToRun = ((timestamp - this.clockEmulator) / 1000) * this.cloudpilotInstance.cyclesPerSecond();

        let cycles = 0;
        while (cycles < cyclesToRun) {
            cycles += this.cloudpilotInstance.runEmulation(Math.ceil(cyclesToRun - cycles));
        }

        const virtualTimePassed = (cycles / this.cloudpilotInstance.cyclesPerSecond()) * 1000;
        const realTimePassed = performance.now() - timestamp;

        // If the emulation runs too slowly the amount of real time that passed will exceed the
        // emulated time difference. In this case we compensate by advancing the emulated clock
        // by the actual time difference; otherwise, the differences will pile up,
        // resulting in jerky emulation. Our dynamic speed correction will make sure that
        // this does not happen too often.
        this.clockEmulator += Math.max(virtualTimePassed, realTimePassed);

        // Update the speed average. Note that we need to compensate this for the factor
        // by which we scaled the clock --- the factor represents the ratio for a device
        // running at ful speed
        this.speedAverage.push((virtualTimePassed / realTimePassed) * this.emulationSpeed);

        // Normalize the speed an apply hysteresis
        this.updateEmulationSpeed(this.speedAverage.calculateAverage());

        const powerOff = this.cloudpilotInstance.isPowerOff();
        const uiInitialized = this.cloudpilotInstance.isUiInitialized();
        const currentSession = this.emulationState.getCurrentSession();

        if (powerOff !== this.powerOff || uiInitialized !== this.uiInitialized) {
            this.ngZone.run(() => {
                const oldPowerOff = this.powerOff;

                this.powerOff = powerOff;
                this.uiInitialized = uiInitialized;

                if (oldPowerOff !== this.powerOff) this.powerOffChangeEvent.dispatch(this.powerOff);
            });
        }

        if (uiInitialized && currentSession && currentSession.osVersion === undefined) {
            const session: Session = { ...currentSession, osVersion: this.cloudpilotInstance.getOSVersion() };

            this.storageService.updateSession(session);
        }

        if (uiInitialized && !powerOff && currentSession) {
            if (this.deviceHotsyncName === undefined) {
                this.deviceHotsyncName = this.cloudpilotInstance.getHotsyncName();
            }

            if (currentSession.hotsyncName === undefined) {
                const session: Session = { ...currentSession, hotsyncName: this.deviceHotsyncName };

                this.storageService.updateSession(session);
            } else if (
                currentSession.hotsyncName !== this.deviceHotsyncName &&
                currentSession.hotsyncName.length <= 40 &&
                this.cloudpilotInstance.isSetupComplete()
            ) {
                this.cloudpilotInstance.setHotsyncName(currentSession.hotsyncName);
                this.deviceHotsyncName = currentSession.hotsyncName;
            }
        }

        if (this.powerButtonEngaged) {
            this.powerButtonDuration += cycles / this.cloudpilotInstance.cyclesPerSecond();

            if (this.powerButtonDuration * 1000 >= ENGAGE_POWER_BUTTON_DURATION) {
                this.powerButtonEngaged = false;

                this.cloudpilotInstance.queueButtonUp(PalmButton.power);
            }
        }

        if (timestamp - this.lastSnapshotAt > SNAPSHOT_INTERVAL) {
            this.snapshotService.triggerSnapshot();

            this.lastSnapshotAt = timestamp;
        }
    };

    private updateScreen(): void {
        const frame = this.cloudpilotInstance.getFrame();

        if (this.cloudpilotInstance.isPowerOff()) {
            this.clearCanvas();

            this.newFrameEvent.dispatch(this.canvas);

            return;
        }

        if (frame.lines === this.imageData.height && frame.lineWidth === this.imageData.width) {
            switch (frame.bpp) {
                case 1: {
                    const fg = GRAYSCALE_PALETTE_RGBA[15];
                    const bg = GRAYSCALE_PALETTE_RGBA[0];

                    for (let y = 0; y < 160; y++) {
                        for (let x = 0; x < 160; x++) {
                            this.imageData32[y * 160 + x + frame.margin] =
                                frame.buffer[y * frame.bytesPerLine + ((x + frame.margin) >>> 3)] &
                                (0x80 >>> ((x + frame.margin) & 0x07))
                                    ? fg
                                    : bg;
                        }
                    }

                    break;
                }

                case 2: {
                    const mapping = this.cloudpilotInstance.getPalette2bitMapping();

                    const palette = [
                        GRAYSCALE_PALETTE_RGBA[mapping & 0x000f],
                        GRAYSCALE_PALETTE_RGBA[(mapping >>> 4) & 0x000f],
                        GRAYSCALE_PALETTE_RGBA[(mapping >>> 8) & 0x000f],
                        GRAYSCALE_PALETTE_RGBA[(mapping >>> 12) & 0x000f],
                    ];

                    for (let y = 0; y < 160; y++) {
                        for (let x = 0; x < 160; x++) {
                            this.imageData32[y * 160 + x + frame.margin] =
                                palette[
                                    (frame.buffer[y * frame.bytesPerLine + ((x + frame.margin) >>> 2)] >>
                                        (6 - 2 * ((x + frame.margin) & 0x03))) &
                                        0x03
                                ];
                        }
                    }

                    break;
                }

                case 4: {
                    for (let y = 0; y < 160; y++) {
                        for (let x = 0; x < 160; x++) {
                            this.imageData32[y * 160 + x + frame.margin] =
                                GRAYSCALE_PALETTE_RGBA[
                                    (frame.buffer[y * frame.bytesPerLine + ((x + frame.margin) >>> 1)] >>>
                                        (4 - 4 * ((x + frame.margin) & 0x01))) &
                                        0x0f
                                ];
                        }
                    }

                    break;
                }

                case 24:
                    {
                        const imageData32 = new Uint32Array(
                            this.imageData.data.buffer,
                            this.imageData.data.byteOffset,
                            this.imageData.data.byteLength >> 2
                        );
                        const buffer32 = new Uint32Array(
                            frame.buffer.buffer,
                            frame.buffer.byteOffset,
                            frame.buffer.byteLength >> 2
                        );

                        if (frame.margin === 0) {
                            imageData32.subarray(0, 160 * 160).set(buffer32.subarray(0, 160 * 160));
                        } else {
                            for (let y = 0; y < 160; y++) {
                                for (let x = 0; x < 160; x++) {
                                    imageData32[y * 160 + x] = buffer32[y * 160 + x + frame.margin];
                                }
                            }
                        }
                    }

                    break;
            }
        }

        this.context.putImageData(this.imageData, 0, 0);

        this.newFrameEvent.dispatch(this.canvas);
    }

    readonly cloudpilot = Cloudpilot.create();

    newFrameEvent = new Event<HTMLCanvasElement>();
    pwmUpdateEvent = new Event<PwmUpdate>();
    emulationStateChangeEvent = new Event<boolean>();
    powerOffChangeEvent = new Event<boolean>();

    private cloudpilotInstance!: Cloudpilot;
    private bootstrapCompletePromise: Promise<void>;

    private clockEmulator = 0;
    private animationFrameHandle = -1;

    private mutex = new Mutex();

    private canvas: HTMLCanvasElement = document.createElement('canvas');
    private context!: CanvasRenderingContext2D;
    private imageData = new ImageData(160, 160);
    private imageData32 = new Uint32Array(this.imageData.data.buffer);

    private lastPenUpdate = 0;
    private penDown = false;

    private running = false;
    private powerOff = false;
    private uiInitialized = false;

    private lastSnapshotAt = 0;
    private deviceHotsyncName: string | undefined;

    private powerButtonEngaged = false;
    private powerButtonDuration = 0;

    private pendingPwmUpdates = new Fifo<PwmUpdate>(PWM_FIFO_SIZE);

    private advanceEmulationHandle: number | undefined;

    private emulationSpeed = 1;
    private speedAverage = new Average(SPEED_AVERAGE_N);
}
