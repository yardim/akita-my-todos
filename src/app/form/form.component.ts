import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosService } from '../todos/store/todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      todo: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.todosService.addTodo(this.todoForm.value.todo);
      this.todoForm.reset();
      return;
    }

    this.todoForm.get('todo').markAsDirty();
  }
}
