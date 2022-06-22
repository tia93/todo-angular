import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './componets/todo-list/todo-list.component';
import { TodoListElementComponent } from './componets/todo-list-element/todo-list-element.component';
import { DoneListComponent } from './componets/done-list/done-list.component';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';
import { TodoDetailComponent } from './componets/todo-detail/todo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListElementComponent,
    DoneListComponent,
    PageNotFoundComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
