import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Params } from '@angular/router';
import { TodosService } from '../todos/store/todos.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((data: Params) => {
        this.todosService.updateFilter(data.filter);
      });
  }
}
