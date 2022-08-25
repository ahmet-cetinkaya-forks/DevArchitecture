import {HttpRequest} from '@angular/common/http';
import {AuthUser} from '@core/features/auth/models/authUser';
import {UserForLogin} from '@core/features/auth/models/userForLogin';
import {Response} from '@core/shared/models/response';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

export abstract class AuthService<TAuthInformation> {
  protected apiControllerUrl = `${environment.apiUrl}/auth`;

  abstract authUser$: Observable<AuthUser | undefined>;
  abstract login(
    userForLogin: UserForLogin
  ): Observable<Response<TAuthInformation>>;
  abstract initializeAuth(): void;
  abstract saveAuth(authInformation: TAuthInformation): void;
  abstract refreshAuth(): Observable<Response<TAuthInformation>>;
  abstract addAuthToRequest(
    request: HttpRequest<unknown>
  ): HttpRequest<unknown>;
  abstract get isAuthenticated(): boolean;
  abstract isAuthorized(requiredClaims: string[]): boolean;
  abstract logOut(): void;
}
