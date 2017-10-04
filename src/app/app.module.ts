import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent} from './todo-item/todo-item.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import { GuideComponent} from './guide/guide.component';
import { routing } from './app.routes';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoDataService } from "./todo-data.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    GuideComponent,
    AboutusComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ TodoDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
