import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: MainLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/main-layout/main-layout.module').then(x =>x.MainLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
