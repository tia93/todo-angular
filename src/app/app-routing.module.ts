import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneListComponent } from './componets/done-list/done-list.component';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';
import { TodoListComponent } from './componets/todo-list/todo-list.component';
import { TodoDetailComponent } from './componets/todo-detail/todo-detail.component';

const routes: Routes = [
  {path: 'active', component: TodoListComponent},
  {path: 'done', component: DoneListComponent },
  {path: 'todo/:id', component: TodoDetailComponent},
  {path: 'todo', component: TodoDetailComponent},
  {path: '', redirectTo: '/active', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent} // indirizarlaa una pagina not foundo o
  {path: '**', redirectTo: '/active'} // indirizarlo sempre alla pagina indicata
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
