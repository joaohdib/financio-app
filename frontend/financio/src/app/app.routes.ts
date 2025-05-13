import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/index/index/index.component').then(m => m.IndexComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login/login.component').then(m => m.LoginComponent)
    }
];
