import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  
   todosArray: TodoClass[];

   
   
     constructor(private dataServ: DataService) {
       this.todosArray = dataServ.todos;   /// nn prende piu dal mok ma dal server?
     }
   
   
     ngOnInit(): void {
       
     }

     refreshArray(){
      this.todosArray = this.dataServ.getActiveTodos();
     }
      
     
   
     manageTodoEmission(todo: TodoClass){
       console.log('sono il listcomponet', todo.name);
       this.orderByPiority();
     }
     
     orderByName(){
    
     this.todosArray.sort(TodoClass.compareByName); 
   }
   
   orderByDate(){
     this.todosArray.sort(TodoClass.compareByDate);
   }
   
   orderByPiority(){
     this.todosArray.sort(TodoClass.compareByPriority)
   }

}
