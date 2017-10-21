import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";

import { HeaderComponent } from "./components/header.component";
import { HamburgerButtonComponent } from "./components/hamburger-button.component";

import { Logger, LogLevel } from "./services/logger.service";
import { Storage } from "./services/storage.service";
import { constants } from "./constants";

import { DonationsService } from "./services/donations.service";

const providers = [
    DonationsService,
    { provide: constants.MINIMUM_LOG_LEVEL, useValue: LogLevel.Trace }, ,
    { provide: Logger, useValue: Logger },
    Storage
];

const declarations = [
    HamburgerButtonComponent,
    HeaderComponent
];

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule],
    entryComponents: [],
    declarations,
    exports:declarations,
    providers
})
export class SharedModule {}