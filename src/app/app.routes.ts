import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
