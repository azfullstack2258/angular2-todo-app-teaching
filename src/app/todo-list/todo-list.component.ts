/**
 * Created by btb on 10/3/2017.
 */
import {Component} from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  providers: [TodoDataService]
})
export class TodoListComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    if (this.newTodo.title.length == 0) {
      return;
    }

    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
