import { EntityStore, StoreConfig } from '@datorama/akita';
import { TodosState, createInitialTodosState } from './todos.model';
import { Injectable } from '@angular/core';

@StoreConfig({ name: 'todos' })
@Injectable({ providedIn: 'root' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super(createInitialTodosState());
  }
}
