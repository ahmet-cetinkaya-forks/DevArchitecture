import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Observable, Subject} from 'rxjs';
import {ToastService} from '../toastService';
import {ConfirmationService} from 'primeng/api';

@Injectable()
export class ToastPrimengService implements ToastService {
  dialogResult!: Subject<boolean>;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  showToast(
    severity: 'success' | 'error' | 'warn' | 'info',
    title: string,
    message: string,
    life?: number | undefined,
    isSticky?: boolean | undefined
  ): void {
    this.messageService.add({
      severity,
      summary: title,
      detail: message,
      life,
      sticky: isSticky,
    });
  }

  showConfirmDialog(
    severity: 'success' | 'error' | 'warn' | 'info',
    title: string,
    message: string
  ): Observable<boolean> {
    this.dialogResult = new Subject<boolean>();

    const severityIcons = {
      success: 'pi pi-check',
      error: 'pi pi-times',
      warn: 'pi pi-exclamation-triangle',
      info: 'pi pi-info-circle',
    };
    this.confirmationService.confirm({
      header: title,
      icon: severityIcons[severity],
      message,
      accept: this.confirmDialog.bind(this),
      reject: this.rejectDialog.bind(this),
    });

    return this.dialogResult.asObservable();
  }

  confirmDialog(): void {
    this.dialogResult.next(true);
  }

  rejectDialog(): void {
    this.dialogResult.next(false);
  }
}
