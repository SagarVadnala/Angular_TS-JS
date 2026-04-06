import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/public/public-routes').then(r => r.PUBLIC_ROUTES) },
    { path: 'admin', loadChildren: () => import('./modules/admin/admin-routes').then(r => r.ADMIN_ROUTES) },
    { path: 'user', loadChildren: () => import('./modules/user/user-routes').then(r => r.USER_ROUTES) }
];
