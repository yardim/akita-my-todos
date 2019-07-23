import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosService } from '../todos/store/todos.service';
import { TodosQuery } from '../todos/store/todos.query';
import { switchMap, startWith } from 'rxjs/operators';
import { Todo } from '../todos/store/todos.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  todoForm: FormGroup;
  isEditMode = false;
  todoId: string;

  constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery
  ) { }

  ngOnInit() {
    this.todosService.todoId$
      .pipe(
        switchMap((todoId: string) => this.todosQuery.selectTodo(todoId)),
        startWith({ title: '' })
      )
      .subscribe((todo: Todo) => {
        this.isEditMode = Boolean(todo.title);
        this.todoId = todo.id;

        this.todoForm = new FormGroup({
          todo: new FormControl(todo.title, Validators.required)
        });
      });
  }

  onSubmit() {
    if (this.todoForm.invalid) {
      this.todoForm.get('todo').markAsDirty();
      return;
    }

    if (this.todoForm.valid && !this.isEditMode) {
      this.todosService.addTodo(this.todoForm.value.todo);
    }

    if (this.todoForm.valid && this.isEditMode) {
      this.todosService.editTodo(this.todoId, { title: this.todoForm.value.todo });
    }

    this.isEditMode = false;
    this.todoId = null;
    this.todoForm.reset();
  }
}
