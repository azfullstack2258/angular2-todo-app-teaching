import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GuideComponent } from './guide/guide.component';
import { TodoDetailComponent } from "./todo-detail/todo-detail.component";
import { TodoItemResolver } from './resolvers/todo-item.resolver';

const routes: Routes = [
  { path: '', component: TodoListComponent },
	{ path: 'aboutus', component: AboutusComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'todo/:todo_id',
      component: TodoDetailComponent,
      resolve: {
        todo: TodoItemResolver
      }
  }
];

export const routing = RouterModule.forRoot(routes);
