import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GuideComponent } from './guide/guide.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
	{ path: 'aboutus', component: AboutusComponent },
  { path: 'guide', component: GuideComponent }
];

export const routing = RouterModule.forRoot(routes);
