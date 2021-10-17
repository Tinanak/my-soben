import { Component } from '@angular/core';
import { TaskHttpService } from 'src/app/task-http.service';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.css']
})
export class RealisationComponent{

  title = 'angular-service-app';

  todoList:any = [];

  constructor(private taskHttpService: TaskHttpService) { }

  ngOnInit(): void {
    this.listTodos();
  }

  listTodos(){
    this.taskHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }

  createTodo(){
    let todo = {
      id: new Date().getTime(),
      title: '',
      description: '',
      image: '',
      category: ''
    }
    this.taskHttpService.create(todo).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
  }

  editTodo(todo: any){
    let data = {
      id: new Date().getTime(),
      title: '',
      description: '',
      image: '',
      category: ''
    }
    this.taskHttpService.update(todo.id,data).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
  }

  deleteTodo(id: any){
    this.taskHttpService.delete(id).subscribe((response)=>{
      this.listTodos();
    },(error=>{
    }));
  }

}
