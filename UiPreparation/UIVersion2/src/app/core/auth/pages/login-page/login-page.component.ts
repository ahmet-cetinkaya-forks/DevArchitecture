import {Router} from '@angular/router';
import {AuthService} from '@core/auth/services/auth/authService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component} from '@angular/core';

@Component({
  template: '<app-login-page-primeng></app-login-page-primeng>',
})
export class LoginPageComponent {
  protected loginForm!: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
    protected authService: AuthService<unknown>,
    protected router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  protected login(): void {
    this.authService.login(this.loginForm.value).subscribe(response => {
      if (!response.success) return;

      this.router.navigate(['/dashboard']);
    });
  }
}
