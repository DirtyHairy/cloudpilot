import { AfterViewInit, Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/service/alert.service';
import { EmulationService } from './service/emulation.service';
import { KvsService } from './service/kvs.service';
import { PwaService } from './service/pwa.service';
import { REVISION } from './../revision';
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    constructor(
        private kvsService: KvsService,
        private alertService: AlertService,
        private emulationService: EmulationService,
        private pwaService: PwaService,
        private updates: SwUpdate
    ) {}

    ngAfterViewInit(): void {
        this.pwaService.invite();

        this.registerForUpdates();

        this.alertService.message(
            'Cloudpilot has moved',
            `
                Cloudpilot has moved to a
                <a href="https://cloudpilot-emu.github.io">new location</a>.
                <br/><br/>
                This page will not be removed, but it will not receive any
                further updates.
            `
        );
    }

    private registerForUpdates(): void {
        this.updates.available.subscribe(async () => {
            await this.emulationService.bootstrapComplete();

            this.alertService.updateAvailable();
        });
    }
}
