import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TodoDataService } from '../todo-data.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: any = {};
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _todoDataService: TodoDataService
  ) { }

  ngOnInit() {
    this.todo = this._activatedRoute.snapshot.data['todo'];
    console.log("\n\nResolver code:\n\nresolve(route: ActivatedRouteSnapshot)\n{\n\tlet todoId = route.params['todo_id'];\n\treturn this._todoDataService.getTodoByIdRemote(todoId)\n\t\t\t.map(response => response.json());\n}");
    console.log("\nDetail component code:\n\n ngOnInit() {\n\tthis.todo = this._activatedRoute.snapshot.data['todo'];\n}");
  }

}
