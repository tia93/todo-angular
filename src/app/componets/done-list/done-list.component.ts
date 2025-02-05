import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  
   todosArray: TodoClass[] = [];

   
   
     constructor(private dataServ: DataService) {
      dataServ.getDoneTodos().subscribe({
        next: todos => this.todosArray = todos,
        error: err => console.log(err)
        
       });   
     }
   
   
     ngOnInit(): void {
       
     }

     refreshArray(){
      
     }
      
     
   
     manageTodoDeleted(todo: TodoClass){
      this.dataServ.removeTodo(todo).subscribe({
        next: res => console.log('bella storia', res),
        error: err => console.log('brutta storia' , err)
        
      })


      //  console.log('sono il listcomponet', todo.name);
      //  this.orderByPiority();
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
