import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,AfterViewInit, OnDestroy {

  // @Input() todos: TodoClass[];
 todosArray: TodoClass[] = [];

  @Input() set todos(value: TodoClass[]){
 this.todosArray = value;
 this.orderByPiority()
  }

  constructor() {
    this.todos = [];
  }


  ngOnInit(): void {
    
  }


  ngAfterViewInit(): void {
     
  }
  
  
  ngOnDestroy(): void {
    
  }

  manageTodoEmission(todo: TodoClass){
    console.log('sono il listcomponet', todo.name);
    this.orderByPiority();
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
