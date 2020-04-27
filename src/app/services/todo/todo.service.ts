import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private urlStatus = '/api/status/';
  private urlTodo = '/api/todo/';
  constructor(private network: NetworkService) {}

  getStatus() {
    return this.network.get(this.urlStatus);
  }

  getTodo() {
    return this.network.get(this.urlTodo);
  }

  addTodo(todo: Todo) {
    return this.network.post(this.urlTodo, todo);
  }

  updateTodo(todo: Todo) {
    return this.network.put(this.urlTodo, todo);
  }
}
