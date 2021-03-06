import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GuideComponent } from './guide/guide.component';
import { TodoDetailComponent } from "./todo-detail/todo-detail.component";
import { TodoItemResolver } from './resolvers/todo-item.resolver';

const routes: Routes = [
  { path: '', component: LoginComponent },
	{ path: 'aboutus', component: AboutusComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'todo/:todo_id',
      component: TodoDetailComponent,
      resolve: {
        todo: TodoItemResolver
      }
  }
];

export const routing = RouterModule.forRoot(routes);
