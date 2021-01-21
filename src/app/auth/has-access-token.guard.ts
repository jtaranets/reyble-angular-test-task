import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CredentialsService } from '@app/auth/credentials.service';
import { AuthenticationService } from '@app/auth/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class HasAccessTokenGuard implements CanLoad {
  constructor(
    private credService: CredentialsService,
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    const isAuth = this.credService.isAuthenticated();
    if (!isAuth) {
      this.router.navigate(['login'], { queryParams: { redirect: route.path }, replaceUrl: true });
    }
    return of(isAuth);
  }
}
