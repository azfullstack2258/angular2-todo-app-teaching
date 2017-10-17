/**
 * Created by btb on 10/3/2017.
 */
import {Component} from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  newTodo: Todo = new Todo();
  todoArr: Todo[] = [];
  comments: object[]=[];

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit() {
    this.todoDataService.getAllTodosRemote()
      .subscribe( response => this.todoArr = response.json() );
  }

  addTodo() {
    if (this.newTodo.content.length == 0) {
      return;
    }
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo);
    this.todoArr = this.todoArr
      .filter(td => td.id != todo);
  }

  get todos() {
    //return this.todoDataService.getAllTodos();
    return this.todoArr;
  }

  onClickListner(event) {
    switch(event.type) {
      case 'rm':
        alert(event.data);
        this.removeTodo(event.data);
        break;
      case 'ac':
        this.comments.push({
          header: event.header,
          content:event.data
        });
        break;
    }
  }
}
