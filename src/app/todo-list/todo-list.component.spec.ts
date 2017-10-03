/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

describe('TodoListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TodoListComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(TodoListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a newTodo todo`, async(() => {
    let fixture = TestBed.createComponent(TodoListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.newTodo instanceof Todo).toBeTruthy()
  }));

  it('should display "Todos" in h1 tag', async(() => {
    let fixture = TestBed.createComponent(TodoListComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  }));
});
