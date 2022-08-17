import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ToastService} from '@core/shared/services/toast/toastService';

@Component({
  selector: 'd-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  onConfirm(): void {
    this.toastService.confirmDialog();
  }

  onReject(): void {
    this.toastService.rejectDialog();
  }
}
