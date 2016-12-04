import { Routes } from '@angular/router';

import { DashboardRoutes } from './dashboard/dashboard.routes';
import { ListViewRoutes } from './listview/listview.routes';
import { BrowserRoutes } from './browser/browser.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...ListViewRoutes,
  ...BrowserRoutes,
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];