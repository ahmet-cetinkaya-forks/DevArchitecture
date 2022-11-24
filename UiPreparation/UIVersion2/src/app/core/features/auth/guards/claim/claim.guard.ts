import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, UrlTree} from '@angular/router';
import {ToastService} from '@core/shared/services/toast/toastService';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth/authService';

@Injectable()
export class ClaimGuard implements CanActivate {
  constructor(
    private authService: AuthService<unknown>,
    private translateService: TranslateService,
    private toastService: ToastService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const requiredClaims: string[] = route.data['requiredClaims'] || [];

    const isUserAuthorized = this.authService.isAuthorized(requiredClaims);
    if (!isUserAuthorized) {
      this.translateService.get('AuthorizationsDenied').subscribe(message => {
        this.toastService.showToast('error', message, '');
      });
      return false;
    }

    return true;
  }
}
