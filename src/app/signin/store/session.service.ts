import { SessionStore } from './session.store';
import { Injectable } from '@angular/core';
import { SessionState } from './session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private sessionStore: SessionStore) { }

  login(user: SessionState) {
    this.sessionStore.update(user);
  }
}
