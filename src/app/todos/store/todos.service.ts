import { Injectable } from '@angular/core';
import { TodosStore } from './todos.store';
import { Filter } from './todos.model';

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
}
