import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthToken} from '@core/features/auth/models/authToken';
import {AuthService} from '@core/features/auth/services/auth/authService';
import {ToastService} from '@core/shared/services/toast/toastService';

import {LoginPageComponent} from '../login-page.component';

@Component({
  selector: 'd-login-page-primeng',
  templateUrl: './login-page-primeng.component.html',
  styleUrls: ['./login-page-primeng.component.scss'],
})
export class LoginPagePrimengComponent
  extends LoginPageComponent
  implements OnInit
{
  constructor(
    protected override formBuilder: FormBuilder,
    protected override authService: AuthService<AuthToken>,
    protected override router: Router,
    protected override toastService: ToastService
  ) {
    super(formBuilder, authService, router, toastService);
  }

  ngOnInit(): void {}
}
