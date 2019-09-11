import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "../../services/employee.service";

import { Task } from '../../models/task';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[];

  constructor(public taskService: EmployeeService) {
    
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask(task: Task) {
    console.log(task);
    this.taskService.addTask(task);
  }

}


