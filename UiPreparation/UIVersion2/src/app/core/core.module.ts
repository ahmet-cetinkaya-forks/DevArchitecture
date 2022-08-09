import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {NgModule} from '@angular/core';
import {StorageModule} from './storage/storage.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    StorageModule,
  ],
  exports: [],
})
export class CoreModule {}
