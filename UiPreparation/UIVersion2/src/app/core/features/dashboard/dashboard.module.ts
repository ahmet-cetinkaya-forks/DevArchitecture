import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardLayoutComponent} from './layouts/dashboard-layout/dashboard-layout.component';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {SidebarModule} from 'primeng/sidebar';
import {BadgeModule} from 'primeng/badge';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DashboardLayoutTopbarComponent} from './layouts/dashboard-layout/dashboard-layout-topbar/dashboard-layout-topbar.component';
import {DashboardLayoutFooterComponent} from './layouts/dashboard-layout/dashboard-layout-footer/dashboard-layout-footer.component';
import {DashboardLayoutMenuComponent} from './layouts/dashboard-layout/dashboard-layout-menu/dashboard-layout-menu.component';
import {DashboardLayoutSidebarComponent} from './layouts/dashboard-layout/dashboard-layout-sidebar/dashboard-layout-sidebar.component';
import {LayoutService} from './services/layout/layout.service';
import {DashboardLayoutMenuItemComponent} from './layouts/dashboard-layout/dashboard-layout-menu/dashboard-layout.menu-item.component';
import {TranslationModule} from '../translation/translation.module';
import {AuthModule} from '../auth/auth.module';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

const primeNgModules = [
  InputTextModule,
  SidebarModule,
  BadgeModule,
  RadioButtonModule,
  InputSwitchModule,
  RippleModule,
];

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardLayoutTopbarComponent,
    DashboardLayoutFooterComponent,
    DashboardLayoutMenuComponent,
    DashboardLayoutSidebarComponent,
    DashboardLayoutMenuItemComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AuthModule,
    TranslationModule,
    ...primeNgModules,
  ],
  exports: [DashboardLayoutComponent],
  providers: [LayoutService],
})
export class DashboardModule {}
