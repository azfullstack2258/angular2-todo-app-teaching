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
  title: string;
  id: number;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _todoDataService: TodoDataService
  ) { }

  ngOnInit() {
    let observerID = this._activatedRoute.snapshot.data['todo'];
    let obse = this._todoDataService.getTodoByIdRemote(observerID);
    obse.subscribe( response => {
      this.title = response.json().title
      this.id = response.json().id
    })
  }

}
