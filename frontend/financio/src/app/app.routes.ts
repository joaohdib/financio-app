import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/index/index/index.component').then(m => m.IndexComponent)
    }
];
