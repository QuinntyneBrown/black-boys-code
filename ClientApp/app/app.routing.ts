import { Routes, RouterModule } from '@angular/router';
import { DonationPageComponent } from "./pages/donation-page.component";
import { LandingPageComponent } from "./pages/landing-page.component";

export const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent
    },
    {
        path: 'donation',
        component: DonationPageComponent
    }
]

export const RoutingModule = RouterModule.forRoot([
    ...ROUTES
]);