import { Injectable } from '@angular/core';
import { TodosStore } from './todos.store';
import { Filter } from './todos.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private todosStore: TodosStore) { }

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
}
