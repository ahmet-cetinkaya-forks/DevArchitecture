import {AuthModule} from './auth/auth.module';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {StorageModule} from './storage/storage.module';
import {TranslationModule} from './features/translation/translation.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    AuthModule,
    StorageModule,
    TranslationModule,
  ],
  exports: [SharedModule, TranslationModule],
})
export class CoreModule {}
