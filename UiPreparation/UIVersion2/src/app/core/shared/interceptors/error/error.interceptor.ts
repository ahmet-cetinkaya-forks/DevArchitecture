import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpStatusCode,
} from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  Observable,
  Subject,
  Subscription,
  switchMap,
  throwError,
} from 'rxjs';
import {AuthService} from '@core/auth/services/auth/authService';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private static authError$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService<unknown>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        switch (error.status) {
          case HttpStatusCode.Unauthorized:
            return this.handle401Error(request, next);
          default:
            return throwError(() => new Error(error));
        }
      })
    );
  }

  private handle401Error(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!ErrorInterceptor.authError$.getValue()) {
      ErrorInterceptor.authError$.next(true);

      return this.authService.refreshAuth().pipe(
        switchMap(() => {
          ErrorInterceptor.authError$.next(false);
          const newRequest = this.authService.addAuthToRequest(request);
          return next.handle(newRequest);
        })
      );
    } else {
      return this.waitRefreshAuth().pipe(
        switchMap(() => {
          const newRequest = this.authService.addAuthToRequest(request);
          return next.handle(newRequest);
        })
      );
    }
  }

  private waitRefreshAuth(): Observable<unknown> {
    const subject = new Subject<void>();
    const waitToken$: Subscription = ErrorInterceptor.authError$.subscribe(
      (error: boolean) => {
        if (error) return;

        subject.next();
        waitToken$.unsubscribe();
      }
    );
    return subject.asObservable();
  }
}
