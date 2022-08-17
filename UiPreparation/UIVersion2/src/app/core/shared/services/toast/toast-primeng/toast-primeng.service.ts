import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Observable, Subject} from 'rxjs';
import {ToastService} from '../toastService';

@Injectable()
export class ToastPrimengService implements ToastService {
  dialogResult!: Subject<boolean>;

  constructor(private messageService: MessageService) {}

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

  showConfirmDialog(title: string, message: string): Observable<boolean> {
    this.dialogResult = new Subject<boolean>();
    this.messageService.add({
      key: 'confirmDialog',
      sticky: true,
      severity: 'warn',
      summary: title,
      detail: message,
    });
    return this.dialogResult.asObservable();
  }

  confirmDialog(): void {
    this.dialogResult.next(true);
    this.messageService.clear('confirmDialog');
  }

  rejectDialog(): void {
    this.dialogResult.next(false);
    this.messageService.clear('confirmDialog');
  }
}
