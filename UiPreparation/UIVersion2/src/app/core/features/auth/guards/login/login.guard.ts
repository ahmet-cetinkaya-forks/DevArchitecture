import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {AuthService} from '../../services/auth/authService';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService<unknown>,
    private router: Router
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isAuthenticated)
      return this.authService.refreshAuth().pipe(
        map(response => {
          this.authService.saveAuth(response.data);
          return true;
        }),
        catchError(() => {
          this.router.navigateByUrl('/login');
          return of(false);
        })
      );

    return true;
  }
}
