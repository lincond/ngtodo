import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todo: Task[]

  constructor() {
    
  }

  ngOnInit() {
  }

}
