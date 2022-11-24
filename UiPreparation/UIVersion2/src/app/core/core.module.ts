import {AuthModule} from './features/auth/auth.module';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {StorageModule} from './features/storage/storage.module';
import {TranslationModule} from './features/translation/translation.module';
import {DashboardModule} from './features/dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    AuthModule,
    StorageModule,
    TranslationModule,
    DashboardModule,
  ],
  exports: [SharedModule, TranslationModule],
})
export class CoreModule {}
