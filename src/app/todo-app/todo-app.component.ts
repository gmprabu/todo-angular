import {Component,OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl: 'todo-app.component.html',
  styleUrls: ['todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent implements OnInit  {


  todos: Todo[];

  todoTodo: Todo[];

  error : boolean = false;

  todosCompleted: Todo[];

  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
     this.getAllTodo();
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo).subscribe((data) => {
      this.getAllTodo();
      this.newTodo = new Todo();
    }, (err) => {
       if(err.error.exception == "org.springframework.dao.DataIntegrityViolationException"){
        this.error = true;

       }
    })
  }

  removeTodo(todo : Todo){
    this.todoService.removeTodo(todo).subscribe(() =>
    this.getAllTodo())
  }

  getAllTodo(){
    this.todoService.getTodos().subscribe((data) => {
     this.todosCompleted= this.todos = data.filter( (todo) => todo.complete === true );
     this.todoTodo= this.todos = data.filter( (todo) => todo.complete === false );
    })
  }

  makeComplete(todo : Todo){

    todo.complete = true;

    this.todoService.updateTodo(todo).subscribe((data) => {
      this.getAllTodo();
    } )
  }

}