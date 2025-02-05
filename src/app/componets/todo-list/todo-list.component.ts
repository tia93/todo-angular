import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,AfterViewInit, OnDestroy {

  // @Input() todos: TodoClass[];
 todosArray: TodoClass[] = [];

//   @Input() set todos(value: TodoClass[]){
//  this.todosArray = value;
//  this.orderByPiority()
//   }

  constructor(private dataServ: DataService) {   /// valore iniziare ogni volta che cambiano i todos cambia e li mette nel array e il todos array cambia e modifica html
   dataServ.getActiveTodos().subscribe({
    next: todos => this.todosArray = todos,
    error: err => console.log(err)
    
   });
  
   
   
   /// nn prende piu dal mok ma dal server?
  }

  refreshArray(){
    // this.todosArray = this.dataServ.getActiveTodos();
  }


  ngOnInit(): void {
    
  }


  ngAfterViewInit(): void {
     
  }
  
  
  ngOnDestroy(): void {
    
  }

  manageTodoEmission(todo: TodoClass){
    this.dataServ.completeTodo(todo).subscribe({
      next: todo => console.log('bella storia', todo),
      error: err => console.log('brutta storia', err)
    });

    // this.refreshArray
    // this.orderByPiority();
  }
  
  orderByName(){
  // this.todos.sort ((a: TodoClass, b: TodoClass) => {
  //   if(a.name < b.name) {
  //     return -1;
  //   }
  //   if(a.name > b.name) {
  //     return 1;
  //   }
  // });
  this.todosArray.sort(TodoClass.compareByName); //perche ce la static
}

orderByDate(){
  this.todosArray.sort(TodoClass.compareByDate);
}

orderByPiority(){
  this.todosArray.sort(TodoClass.compareByPriority)
}

}
