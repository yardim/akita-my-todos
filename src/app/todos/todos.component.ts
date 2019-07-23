import { Component, OnInit } from '@angular/core';
import { TodosQuery } from './store/todos.query';
import { Observable, of } from 'rxjs';
import { Todo, Filter } from './store/todos.model';
import { mergeMap, switchMap, map, concatMap } from 'rxjs/operators';
import { TodosService } from './store/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(
    private todosQuery: TodosQuery,
    private todosService: TodosService,
  ) { }

  ngOnInit() {
    // TODO: fix expression has changed error
    this.todos = this.todosQuery.select('filter')
      .pipe(
        map((filter: Filter) => {
          if (filter === Filter.COMPLETED) {
            return (todo: Todo) => todo.completed;
          }

          if (filter === Filter.UNCOMPLETED) {
            return (todo: Todo) => !todo.completed;
          }
        }),
        switchMap((filterBy) => {
          return this.todosQuery.selectAll({ filterBy });
        }),
        map((todos: Todo[]) => todos.reverse())
      );
  }

  onSelectTodo(id: string): void {
    this.todosService.selectTodo(id);
  }
}
