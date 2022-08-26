import {Observable} from 'rxjs';

export abstract class ToastService {
  abstract showToast(
    severity: 'success' | 'error' | 'warn' | 'info',
    title: string,
    message: string,
    life?: number,
    isSticky?: boolean
  ): void;

  abstract showConfirmDialog(
    severity: 'success' | 'error' | 'warn' | 'info',
    title: string,
    message: string
  ): Observable<boolean>;

  abstract confirmDialog(): void;

  abstract rejectDialog(): void;
}
