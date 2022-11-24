import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ErrorInterceptor} from './interceptors/error/error.interceptor';
import {ToastComponent} from './components/toast/toast.component';
import {ToastModule} from 'primeng/toast';
import {ToastService} from './services/toast/toastService';
import {ToastPrimengService} from './services/toast/toast-primeng/toast-primeng.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

const primeNgModules = [ToastModule, ButtonModule, ConfirmDialogModule];

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, BrowserAnimationsModule, ...primeNgModules],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    MessageService,
    ConfirmationService,
    {provide: ToastService, useClass: ToastPrimengService},
  ],
  exports: [ToastComponent],
})
export class SharedModule {}
