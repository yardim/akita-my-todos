import { Query } from '@datorama/akita';
import { SessionState } from './session.model';
import { SessionStore } from './session.store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
  isLoggedIn$: Observable<boolean> = this.select((session: SessionState) => {
    return session.username !== '' && session.password !== '';
  });

  constructor(protected store: SessionStore) {
    super(store);
  }
}
