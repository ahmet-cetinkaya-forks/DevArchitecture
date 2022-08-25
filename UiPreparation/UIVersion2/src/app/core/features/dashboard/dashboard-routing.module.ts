import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClaimGuard} from '../auth/guards/claim/claim.guard';
import {LoginGuard} from '../auth/guards/login/login.guard';
import {DashboardLayoutComponent} from './layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
