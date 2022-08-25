import {AuthRoutingModule} from './auth-routing.module';
import {AuthService} from './services/auth/authService';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {JwtAuthService} from './services/auth/jwtAuth/jwt-auth.service';
import {JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StorageModule} from '@core/features/storage/storage.module';
import {StoreModule} from '@ngrx/store';
import {authReducers} from './store';
import {environment} from 'src/environments/environment';
import {SharedModule} from '@core/shared/shared.module';
import {TranslationModule} from '@core/features/translation/translation.module';
import {StorageService} from '../storage/services/storage/storageService';
import {LoginPagePrimengComponent} from './pages/login-page/login-page-primeng/login-page-primeng.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {LoginGuard} from './guards/login/login.guard';
import {ClaimGuard} from './guards/claim/claim.guard';

export const jwtOptionsFactory = (storageService: StorageService) => ({
  tokenGetter: () => storageService.get('token'),
  allowedDomains: [environment.apiDomain],
});
const primeNgModules = [CheckboxModule, ButtonModule, InputTextModule];

@NgModule({
  declarations: [LoginPageComponent, LoginPagePrimengComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [StorageService],
      },
    }),
    StoreModule.forRoot(authReducers),
    StorageModule,
    SharedModule,
    TranslationModule,
    ...primeNgModules,
  ],
  providers: [
    {provide: AuthService, useClass: JwtAuthService},
    LoginGuard,
    ClaimGuard,
  ],
})
export class AuthModule {}
