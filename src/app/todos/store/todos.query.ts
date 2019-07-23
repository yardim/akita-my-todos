import { QueryEntity } from '@datorama/akita';
import { TodosState, Todo } from './todos.model';
import { TodosStore } from './todos.store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState> {
  constructor(protected store: TodosStore) {
    super(store);
  }

  selectTodo(id: string): Observable<Todo> {
    return this.selectEntity(id);
  }
}
