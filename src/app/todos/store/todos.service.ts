import { Injectable } from '@angular/core';
import { TodosStore } from './todos.store';
import { Filter, Todo } from './todos.model';
import { v4 as uuid } from 'uuid';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public todoId$: Observable<string>;
  private todoIdSelected = new Subject<string>();

  constructor(private todosStore: TodosStore) {
    this.todoId$ = this.todoIdSelected.asObservable();
  }

  updateFilter(filter: Filter) {
    this.todosStore.update({
      filter
    });
  }

  addTodo(todo: string) {
    this.todosStore.add({
      id: uuid(),
      title: todo,
      completed: false
    });
  }

  selectTodo(id: string) {
    this.todoIdSelected.next(id);
  }

  editTodo(id: string, newTodo: Partial<Todo>) {
    this.todosStore.update(id, newTodo);
  }
}
