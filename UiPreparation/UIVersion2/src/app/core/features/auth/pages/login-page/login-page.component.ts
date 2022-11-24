import {Router} from '@angular/router';
import {AuthService} from '@core/features/auth/services/auth/authService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component} from '@angular/core';
import {ToastService} from '@core/shared/services/toast/toastService';
import {TranslationService} from '@core/features/translation/services/translation/translationService';

@Component({
  template: '<d-login-page-primeng></d-login-page-primeng>',
})
export class LoginPageComponent {
  protected loginForm!: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
    protected authService: AuthService<unknown>,
    protected router: Router,
    protected toastService: ToastService,
    protected translationService: TranslationService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  protected login(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.translationService.get(err.error).subscribe(message => {
          this.toastService.showToast('error', 'Error', message);
        });
      },
    });
  }
}
