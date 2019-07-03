import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from '../todos/todos.component';
import { SigninComponent } from '../signin/signin.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/todos/all', pathMatch: 'full' },
  { path: 'todos/:filter', component: TodosComponent, canActivate: [AuthGuardService] },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
