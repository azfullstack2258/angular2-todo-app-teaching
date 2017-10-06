/**
 * Created by btb on 10/3/2017.
 */
import {Component} from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

  newTodo: Todo = new Todo();
  todoArr: Todo[] = [];

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit() {
    this.todoDataService.getAllTodosRemote()
      .subscribe( response => this.todoArr = response.json() );
  }

  addTodo() {
    if (this.newTodo.title.length == 0) {
      return;
    }
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  get todos() {
    //return this.todoDataService.getAllTodos();
    return this.todoArr;
  }

}
