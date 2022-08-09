import {AuthModule} from './auth/auth.module';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {StorageModule} from './storage/storage.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    SharedModule,
    StorageModule,
  ],
  exports: [],
})
export class CoreModule {}
