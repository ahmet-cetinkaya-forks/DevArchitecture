import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthToken} from '@core/auth/models/authToken';
import {AuthService} from '@core/auth/services/auth/authService';

import {LoginPageComponent} from '../login-page.component';

@Component({
  selector: 'app-login-page-primeng',
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
    protected override router: Router
  ) {
    super(formBuilder, authService, router);
  }

  ngOnInit(): void {}
}
