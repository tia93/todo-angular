import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './componets/todo-list/todo-list.component';
import { TodoListElementComponent } from './componets/todo-list-element/todo-list-element.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
