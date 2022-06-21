import { Injectable } from '@angular/core';   
import { TodoClass } from '../model/todo-class';
import { TODOS } from '../model/todos-mock';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 todos: TodoClass[] = [];   // display vuoto  


  constructor(private apiServ : ApiService) { 
    // apiServ.fetchData()
    // .then(resp => resp.json())
    // .then(result => this.todos = this.convertToTodoClass(result))
    // .catch( err => console.log(err))

    // .jeson lo fa in automatico 
    this.apiServ.getTodoFromDb().subscribe({
      next: result => this.todos = this.convertToTodoClass(result),
      error: err => console.log(err)
      
    })
  //  this.todos = TODOS
  }

  convertToTodoClass(dbObjectArray: any){
    const todoArray = [];
    for (const dbObject of dbObjectArray) {
      const newTodo = TodoClass.fromDbObj(dbObject);
      todoArray.push(newTodo)
    }
    return todoArray;
  }


  getActiveTodos(){  // filtraggio con il ciclo
    const tempTodos = [];
    for (const todo of this.todos) {
      if (todo.priority !== -1) {
        tempTodos.push(todo);
      }
    }
    return tempTodos
  }
  
  getDoneTodos(){  //filtragio 
return this.todos.filter(todo => todo.priority === -1)
  }
}
