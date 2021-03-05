import { BORDER, CanvasHelper, HEIGHT, SCALE, WIDTH } from './CanvasHelper';

import { EmulationService } from './../../../service/emulation.service';
import { PalmButton } from '../../../../../../src';

const enum Area {
    silkscreen,
    buttons,
}

interface InteractionSilkscreen {
    area: Area.silkscreen;
}

interface InteractionButton {
    area: Area.buttons;
    button: PalmButton;
}

type Interaction = InteractionSilkscreen | InteractionButton;

function keyToCode(key: string): number | undefined {
    if (key.length === 1 && key.charCodeAt(0) <= 255) return key.charCodeAt(0);

    switch (key) {
        case 'ArrowLeft':
            return 0x1c;

        case 'ArrowRight':
            return 0x1d;

        case 'ArrowUp':
            return 0x1e;

        case 'ArrowDown':
            return 0x1f;

        case 'Backspace':
            return 0x08;

        case 'Tab':
            return 0x09;

        case 'Enter':
            return 0x0a;

        default:
            return undefined;
    }
}

export class EventHandler {
    constructor(
        private canvas: HTMLCanvasElement,
        private emulationService: EmulationService,
        private canvasHelper: CanvasHelper
    ) {}

    bind(): void {
        if (this.bound) return;

        this.canvas.addEventListener('mousedown', this.handleMouseDown);
        window.addEventListener('mouseup', this.handeMouseUp);
        window.addEventListener('mousemove', this.handleMouseMove);

        this.canvas.addEventListener('touchstart', this.handleTouchStart);
        this.canvas.addEventListener('touchmove', this.handleTouchMove);
        this.canvas.addEventListener('touchend', this.handleTouchEnd);
        this.canvas.addEventListener('touchcancel', this.handleTouchEnd);

        window.addEventListener('keydown', this.handleKeyDown);

        this.bound = true;
    }

    release(): void {
        if (!this.bound) return;

        this.canvas.removeEventListener('mousedown', this.handleMouseDown);
        window.removeEventListener('mouseup', this.handeMouseUp);
        window.removeEventListener('mousemove', this.handleMouseMove);

        this.canvas.removeEventListener('touchstart', this.handleTouchStart);
        this.canvas.removeEventListener('touchmove', this.handleTouchMove);
        this.canvas.removeEventListener('touchend', this.handleTouchEnd);
        this.canvas.removeEventListener('touchcancel', this.handleTouchEnd);

        window.removeEventListener('keydown', this.handleKeyDown);

        this.bound = false;
    }

    private handleMouseDown = (e: MouseEvent): void => {
        if (e.button !== 0) return;

        const coords = this.eventToPalmCoordinates(e);
        if (!coords) return;

        const area = this.determineArea(coords);

        if (area === Area.silkscreen) {
            this.interactionMouse = { area };
            this.emulationService.handlePointerMove(...coords);
        } else {
            const button = this.determineButton(coords);
            this.interactionMouse = { area, button };

            this.emulationService.handleButtonDown(button);

            this.canvasHelper.drawButtons(this.activeButtons());
        }
    };

    private handleMouseMove = (e: MouseEvent): void => {
        // tslint:disable-next-line: no-bitwise
        if (!(e.buttons & 0x01) || this.interactionMouse?.area !== Area.silkscreen) return;

        const coords = this.eventToPalmCoordinates(e, true);
        if (!coords) return;

        this.emulationService.handlePointerMove(...coords);
    };

    private handeMouseUp = (e: MouseEvent): void => {
        if (e.button !== 0) return;

        const interaction = this.interactionMouse;
        this.interactionMouse = undefined;

        switch (interaction?.area) {
            case Area.buttons:
                this.emulationService.handleButtonUp(interaction.button);

                this.canvasHelper.drawButtons(this.activeButtons());

                break;

            case Area.silkscreen:
                this.emulationService.handlePointerUp();

                break;
        }
    };

    private handleTouchStart = (e: TouchEvent): void => {
        for (let i = 0; i < e.changedTouches.length; i++) {
            const touch = e.changedTouches.item(i);
            if (!touch) continue;

            const coords = this.eventToPalmCoordinates(touch);
            if (!coords) continue;

            const area = this.determineArea(coords);
            if (area === Area.silkscreen) {
                this.interactionsTouch.set(touch.identifier, { area });
                this.emulationService.handlePointerMove(...coords);
            } else {
                const button = this.determineButton(coords);
                this.interactionsTouch.set(touch.identifier, { area, button });

                this.emulationService.handleButtonDown(button);

                this.canvasHelper.drawButtons(this.activeButtons());
            }
        }

        if (e.cancelable !== false) e.preventDefault();
    };

    private handleTouchMove = (e: TouchEvent): void => {
        for (let i = 0; i < e.changedTouches.length; i++) {
            const touch = e.changedTouches.item(i);
            if (!touch) continue;

            if (this.interactionsTouch.get(touch.identifier)?.area === Area.silkscreen) {
                const coords = this.eventToPalmCoordinates(touch, true);
                if (!coords) continue;

                this.emulationService.handlePointerMove(...coords);
            }
        }

        if (e.cancelable !== false) e.preventDefault();
    };

    private handleTouchEnd = (e: TouchEvent): void => {
        for (let i = 0; i < e.changedTouches.length; i++) {
            const touch = e.changedTouches.item(i);
            if (!touch) continue;

            const interaction = this.interactionsTouch.get(touch.identifier);
            this.interactionsTouch.delete(touch.identifier);

            switch (interaction?.area) {
                case Area.buttons:
                    this.emulationService.handleButtonUp(interaction.button);

                    this.canvasHelper.drawButtons(this.activeButtons());

                    break;

                case Area.silkscreen:
                    this.emulationService.handlePointerUp();

                    break;
            }
        }

        if (e.cancelable !== false) e.preventDefault();
    };

    private handleKeyDown = (e: KeyboardEvent): void => {
        const keyCode = keyToCode(e.key);

        if (keyCode !== undefined) {
            this.emulationService.handleKeyDown(keyCode, e.ctrlKey);
            e.preventDefault();
        }
    };

    private eventToPalmCoordinates(e: MouseEvent | Touch, clip = false): [number, number] | undefined {
        const bb = this.canvas.getBoundingClientRect();

        let contentX: number;
        let contentY: number;
        let contentWidth: number;
        let contentHeight: number;

        // CSS object-fit keeps the aspect ratio of the canvas content, but the canvas itself
        // looses aspect and fills the container -> manually calculate the metrics for the content
        if (bb.width / bb.height > WIDTH / HEIGHT) {
            contentHeight = bb.height;
            contentWidth = (WIDTH / HEIGHT) * bb.height;
            contentY = bb.top;
            contentX = bb.left + (bb.width - contentWidth) / 2;
        } else {
            contentWidth = bb.width;
            contentHeight = (HEIGHT / WIDTH) * bb.width;
            contentX = bb.left;
            contentY = bb.top + (bb.height - contentHeight) / 2;
        }

        // Compensate for the border
        let x = Math.floor((((e.clientX - contentX) / contentWidth) * WIDTH) / SCALE) - BORDER / SCALE;
        let y = Math.floor((((e.clientY - contentY) / contentHeight) * HEIGHT) / SCALE) - BORDER / SCALE;

        // The canvas layout inside the border is as follows:
        //
        // * 0 .. 159   : LCD
        // * 160        : separator
        // * 161 .. 220 : silkscreen
        // * 221 .. 250 : buttons
        //
        // we map this to 160x250 lines by mapping the separator to the silkscreen

        if (y >= 161) y -= 1;

        if (clip) {
            if (x < 0) x = 0;
            if (x > 159) x = 159;
            if (y < 0) y = 0;
            if (y > 249) y = 249;
        } else {
            if (x < 0 || x >= 160 || y < 0 || y >= 250) return undefined;
        }

        return [x, y];
    }

    private determineArea([, y]: [number, number]): Area {
        return y >= 220 ? Area.buttons : Area.silkscreen;
    }

    private determineButton([x, y]: [number, number]): PalmButton {
        if (x >= 130) return PalmButton.notes;
        if (x >= 100) return PalmButton.todo;
        if (x >= 60) return y >= 236 ? PalmButton.down : PalmButton.up;
        if (x >= 30) return PalmButton.phone;

        return PalmButton.cal;
    }

    private activeButtons(): Array<PalmButton> {
        const buttons = Array.from(this.interactionsTouch.values())
            .filter((i) => i.area === Area.buttons)
            .map((i) => (i as InteractionButton).button);

        if (this.interactionMouse?.area === Area.buttons) buttons.push(this.interactionMouse.button);

        return buttons;
    }

    private interactionMouse: Interaction | undefined;
    private interactionsTouch = new Map<number, Interaction>();
    private bound = false;
}
