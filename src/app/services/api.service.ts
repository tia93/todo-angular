import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TodoClass } from '../model/todo-class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

   }

   getTodoFromDb(){
    const url = 'https://62860d1f96bccbf32d6e2bf5.mockapi.io/todos';
    return this.http.get<TodoClass[]>(url).pipe(  /// chiamata al url e lo converte 
      map(dbobjects => this.convertToTodoClass(dbobjects))  /// array generici di venta un array map
    );
   }

   convertToTodoClass(dbObjectArray: any[]){  /// converti in array vuoto 
    const todoArray = [];
    for (const dbObject of dbObjectArray) {
      const newTodo = TodoClass.fromDbObj(dbObject);
      todoArray.push(newTodo)
    }
    return todoArray;
  }


//  fetchData(){
// return fetch('https://62860d1f96bccbf32d6e2bf5.mockapi.io/todos') ;
// .then(resp => resp.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))

//  }

}
