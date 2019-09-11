import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() task: Task;
  constructor(public taskService: EmployeeService) { }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    if(confirm('Are you sure you want to delete this employee?')) {
      this.taskService.deleteTask(task);
    }
  }

}


