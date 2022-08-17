import {TestBed} from '@angular/core/testing';

import {ToastPrimengService} from './toast-primeng.service';

describe('ToastPrimengService', () => {
  let service: ToastPrimengService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastPrimengService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
