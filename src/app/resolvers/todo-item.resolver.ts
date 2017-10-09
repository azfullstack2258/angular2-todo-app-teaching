/**
 * Created by btb on 10/5/2017.
 */
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { TodoDataService } from '../todo-data.service';

@Injectable()
export class TodoItemResolver implements Resolve<any> {

  constructor(
    private _todoDataService: TodoDataService
  ){}
  resolve(route: ActivatedRouteSnapshot) {
    let todoId = route.params['todo_id'];
    return this._todoDataService.getTodoByIdRemote(todoId)
              .map(response => response.json());
  }
}
