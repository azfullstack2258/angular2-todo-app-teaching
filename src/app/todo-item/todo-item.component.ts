/**
 * Created by btb on 10/2/2017.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoComponent {

  @Input() todo: Todo;
  @Output() clicked = new EventEmitter();
  newTodo: Todo = new Todo();
  comment: string;

  constructor(private todoDataService: TodoDataService) {
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  addComment() {
    if (!this.comment) {
      return;
    }
    let event = {
      type: 'ac',
      header: this.todo.title,
      data: this.comment
    }
    this.clicked.emit(event);
  }

  removeTodo(todo) {
    let event = {
      type: 'rm',
      data: todo.id
    }
    this.clicked.emit(event);
  }
}
