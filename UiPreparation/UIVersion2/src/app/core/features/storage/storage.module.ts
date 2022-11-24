import {CommonModule} from '@angular/common';
import {LocalStorageService} from './services/storage/local-storage/local-storage.service';
import {NgModule} from '@angular/core';
import {StorageService} from './services/storage/storageService';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{provide: StorageService, useClass: LocalStorageService}],
})
export class StorageModule {}
