import {Observable, Subject} from 'rxjs';
import {AuthService} from '../authService';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Response} from '@core/shared/models/response';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {UserForLogin} from '@core/features/auth/models/userForLogin';
import {StorageService} from '@core/features/storage/services/storage/storageService';
import {AuthToken} from '@core/features/auth/models/authToken';
import {AuthUser} from '@core/features/auth/models/authUser';
import {JwtTokenPayload} from '@core/features/auth/models/jwtTokenPayload';
import {AuthStore} from '@core/features/auth/store';
import {
  setAuthUser,
  deleteAuthUser,
} from '@core/features/auth/store/auth/auth.actions';

@Injectable()
export class JwtAuthService extends AuthService<AuthToken> {
  authUser$: Observable<AuthUser | undefined>;

  private authUser?: AuthUser;

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
    private jwtHelperService: JwtHelperService,
    private authStore: Store<AuthStore>,
    private router: Router
  ) {
    super();
    this.authUser$ = this.authStore.select(
      state => state.authStoreState.authUser
    );
  }

  login(userForLogin: UserForLogin): Observable<Response<AuthToken>> {
    const subject = new Subject<Response<AuthToken>>();

    this.httpClient
      .post<Response<AuthToken>>(`${this.apiControllerUrl}/login`, userForLogin)
      .subscribe({
        next: response => {
          this.saveAuth(response.data);
          subject.next(response);
        },
        error: error => subject.error(error),
        complete: () => subject.complete(),
      });

    return subject.asObservable();
  }

  refreshAuth(): Observable<Response<AuthToken>> {
    const subject = new Subject<Response<AuthToken>>();

    const refreshToken: string | null = this.storageService.get('refreshToken');

    this.httpClient
      .post<Response<AuthToken>>(`${this.apiControllerUrl}/refresh-token`, {
        refreshToken,
      })
      .subscribe({
        next: response => {
          this.saveAuth(response.data);
          subject.next(response);
        },
        error: error => {
          this.logOut();
          this.router.navigate(['/login']);
          subject.error(error);
        },
        complete: () => subject.complete(),
      });

    return subject.asObservable();
  }

  initializeAuth(): void {
    if (!this.isAuthenticated) return;
    if (!this.decodedToken) return;

    const claims: string[] | null = JSON.parse(
      this.storageService.get('claims') as string
    );

    if (!claims) return;

    const authUser: AuthUser = {
      id: Number(
        this.decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ]
      ),
      name: this.decodedToken[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ],
      role: this.decodedToken[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ],
      claims,
    };
    this.setAuthUser(authUser);
  }

  saveAuth(authInformation: AuthToken): void {
    this.storageService.set('token', authInformation.token);
    this.storageService.set('refreshToken', authInformation.refreshToken);
    this.storageService.set('claims', JSON.stringify(authInformation.claims));

    if (!this.isAuthenticated) return this.logOut();
    if (!this.decodedToken) return this.logOut();

    const authUser: AuthUser = {
      id: Number(
        this.decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ]
      ),
      name: this.decodedToken[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ],
      role: this.decodedToken[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ],
      claims: authInformation.claims,
    };
    this.setAuthUser(authUser);
  }

  addAuthToRequest(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const accessToken: string | null = this.storageService.get('token');
    const newRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return newRequest;
  }

  get isAuthenticated(): boolean {
    if (this.jwtHelperService.isTokenExpired(this.token || '', -120))
      return false;
    return true;
  }

  isAuthorized(requiredClaims: string[]): boolean {
    if (!this.isAuthenticated) return false;

    const isUserHaveARequiredClaim: boolean = requiredClaims.some(claim =>
      this.authUser!.claims.includes(claim)
    );
    return isUserHaveARequiredClaim;
  }

  logOut(): void {
    this.storageService.remove('token');
    this.storageService.remove('refreshToken');
    this.storageService.remove('lang');
    this.removeAuthUser();
  }

  private get token(): string | null | undefined {
    return this.storageService.get('token');
  }

  private get decodedToken(): JwtTokenPayload | undefined {
    return this.jwtHelperService.decodeToken<JwtTokenPayload>(this.token || '');
  }

  private setAuthUser(authUser: AuthUser): void {
    this.authUser = authUser;
    this.authStore.dispatch(setAuthUser({authUser}));
  }

  private removeAuthUser(): void {
    delete this.authUser;
    this.authStore.dispatch(deleteAuthUser());
  }
}
