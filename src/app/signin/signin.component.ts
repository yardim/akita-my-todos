import { Component, OnInit } from '@angular/core';
import { SessionService } from './store/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(
    private sessionService: SessionService,
    private router: Router,
  ) { }

  ngOnInit() { }

  onSignin(username: string, password: string) {
    this.sessionService.login({
      username,
      password
    });
    this.router.navigate(['/todos', 'all']);
  }
}
