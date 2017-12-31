
import {Todo} from './todo';
import { Injectable } from '@angular/core';
import {AppSettings } from './app.settings';
import {Observable } from 'rxjs/Rx';

import { HttpClient } from '@angular/common/http';
@Injectable()
export class TodoService {

    constructor( private http : HttpClient) { }

    getTodos(): Observable<Todo[]> {
      //return BILLERS;
      return this.http.get<Todo[]> (AppSettings.API_ENDPOINT + '/todos');
    }
  
    addTodo(todo: Todo): Observable<Todo> {
      //BILLERS.push(biller);
      return this.http.post<Todo>(AppSettings.API_ENDPOINT + '/todo',todo).catch((err) => {
                
        // Do messaging and error handling here
        console.log(err);
       
        return Observable.throw(err)
    })
    }
  
    updateTodo(todo:Todo): Observable<Todo>{
      return this.http.put<Todo>(AppSettings.API_ENDPOINT +'/todo/' + todo.id,todo);
    }
  
    removeTodo(todo: Todo): Observable<any> {
      return this.http.delete(AppSettings.API_ENDPOINT +'/todo/'+todo.id)
    }

}