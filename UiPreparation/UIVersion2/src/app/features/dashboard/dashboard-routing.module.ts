import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuItem} from 'primeng/api';

const routes: Routes = [];

export const featuresDashboardMenuItems: MenuItem[] = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
