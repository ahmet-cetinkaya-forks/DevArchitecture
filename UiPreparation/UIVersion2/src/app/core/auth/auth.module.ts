import {AuthRoutingModule} from './auth-routing.module';
import {AuthService} from './services/auth/authService';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {CommonModule} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {JwtAuthService} from './services/auth/jwtAuth/jwt-auth.service';
import {JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {LoginPagePrimengComponent} from './pages/login-page/login-page-primeng/login-page-primeng.component';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StorageModule} from '@core/storage/storage.module';
import {StoreModule} from '@ngrx/store';
import {authReducers} from './store';
import {StorageService} from '@core/storage/services/storage/storageService';
import {environment} from 'src/environments/environment';
import {ErrorInterceptor} from './interceptors/error/error.interceptor';

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
    ...primeNgModules,
  ],
  providers: [
    {provide: AuthService, useClass: JwtAuthService},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
})
export class AuthModule {}
