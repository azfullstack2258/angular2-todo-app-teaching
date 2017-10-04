import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TodoDataService } from '../todo-data.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _todoDataService: TodoDataService
  ) { }

  ngOnInit() {
    let todoId = this._activatedRoute.snapshot.paramMap.get('todo_id');
    this.todo = this._todoDataService.getTodoById(parseInt(todoId));
  }

}