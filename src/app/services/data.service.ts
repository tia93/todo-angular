import { Injectable } from '@angular/core';   
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TodoClass } from '../model/todo-class';
import { TODOS } from '../model/todos-mock';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//  todos: TodoClass[] = [];   // display vuoto  

 todos:BehaviorSubject<TodoClass[]> = new BehaviorSubject<TodoClass[]>([])

  constructor(private apiServ : ApiService) { 
    // apiServ.fetchData()
    // .then(resp => resp.json())
    // .then(result => this.todos = this.convertToTodoClass(result))
    // .catch( err => console.log(err))

    // .jeson lo fa in automatico 
    this.apiServ.getTodosFromDb().subscribe({
      next: result => this.todos.next(result),
      error: err => console.log(err)
      
    })
  //  this.todos = TODOS
  }

  // convertToTodoClass(dbObjectArray: any){
  //   const todoArray = [];
  //   for (const dbObject of dbObjectArray) {
  //     const newTodo = TodoClass.fromDbObj(dbObject);
  //     todoArray.push(newTodo)
  //   }
  //   return todoArray;
  // }


  getActiveTodos(): Observable<TodoClass[]>{ 
    
    return this.todos.pipe(
      map(array => array.filter(todo => todo.doneDate === null))
    )
    // filtraggio con il ciclo attivi
    // const tempTodos = [];
    // for (const todo of this.todos) {
    //   if (todo.doneDate === null) {
    //     tempTodos.push(todo);
    //   }
    // }
    // return tempTodos
  }
  
  getDoneTodos(): Observable<TodoClass[]>{  
    return this.todos.pipe(
      map(array => array.filter(todo => todo.doneDate !== null))
    )
    
    
    //filtragio mokap done 
// return this.todos.filter(todo => todo.doneDate !== null)
  }


  completeTodo(todo: TodoClass): Observable<TodoClass>{
    const newarray = [...this.todos.value] 
    this.todos.next(newarray);
    return this.apiServ.putTodo(todo);
  }

  removeTodo(todo: TodoClass){
    const newarray = this.todos.value.filter(t => t !== todo);
    this.todos.next(newarray);
    return this.apiServ.deleteTodo(todo.id!);
  }

  saveTodo(todo: TodoClass){
    
    if (todo.id) {
      return this.apiServ.putTodo(todo);
    } else {
      return this.apiServ.postTodo(todo).pipe(
        map(todo => {
          const newArray = [...this.todos.value, todo];
          this.todos.next(newArray);
          return todo;
        })
      );
    }
  }

  getTodoById(id: string): Observable<TodoClass|undefined>{
    return this.todos.pipe(
      map(array => array.find(t => t.id === id))
    )
  }
  
}
