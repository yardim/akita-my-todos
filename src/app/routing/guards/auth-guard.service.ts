import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GuardResolution } from '../types/guard-resolution.type';
import { SessionQuery } from 'src/app/signin/store/session.query';
import { tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private sessionQuery: SessionQuery,
    private router: Router
  ) { }

  canActivate(): GuardResolution {
    return this.sessionQuery.isLoggedIn$
      .pipe(
        switchMap((loggedIn: boolean) => {
          if (!loggedIn) {
            this.router.navigate(['/signin']);
          }

          return of(loggedIn);
        })
      );
  }
}
