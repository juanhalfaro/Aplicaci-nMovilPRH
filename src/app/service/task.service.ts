import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  splice(index: number, arg1: number) {
    throw new Error('Method not implemented.');
  }
  deleteTask(id: string) {
    throw new Error('Method not implemented.');
  }

  private api = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

getAllTasks(){
  const path = `${this.api}/todos/`;
  return this.http.get<Task[]>(path);
}

getTasks(id: string){
  const path = `${this.api}/todos/${id}`;
  return this.http.get<Task>(path);
}



}
