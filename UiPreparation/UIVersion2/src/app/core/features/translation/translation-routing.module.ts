import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {LoginGuard} from '../auth/guards/login/login.guard';
import {DashboardLayoutComponent} from '../dashboard/layouts/dashboard-layout/dashboard-layout.component';
import {LanguagesDashboardPageComponent} from './pages/languages-dashboard-page/languages-dashboard-page.component';

const routes: Routes = [
  {
    path: 'dashboard/translation',
    component: DashboardLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'languages',
        component: LanguagesDashboardPageComponent,
      },
    ],
  },
];

export const translationDashboardMenuItems: MenuItem[] = [
  {
    label: 'Translation',
    icon: 'pi pi-fw pi-flag',
    items: [
      {
        label: 'Languages',
        icon: 'pi pi-fw pi-globe',
        routerLink: ['/dashboard', 'translation', 'languages'],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslationRoutingModule {}
