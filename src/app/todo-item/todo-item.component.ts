/**
 * Created by btb on 10/2/2017.
 */
import {Component, Input} from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoComponent {

  @Input() todo: Todo;
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

}
