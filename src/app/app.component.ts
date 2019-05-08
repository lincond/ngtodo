import { Component } from '@angular/core';
import { Task } from './models/task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = '';
  todo: Task[]

  constructor() {
    this.todo = new Array<Task>()
  }

  createTask() {
    const task = new Task()
    task.detail = this.task
    task.created_at = new Date()
    task.finished = false

    this.todo.push(task)
    this.task = ''
  }
}
