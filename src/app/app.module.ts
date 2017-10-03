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

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    GuideComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
