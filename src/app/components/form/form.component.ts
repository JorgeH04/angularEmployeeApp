import { Component, OnInit } from '@angular/core';


import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public taskService: EmployeeService)  { }

  ngOnInit() {
  }

  addTask(id1: HTMLInputElement, id2: HTMLInputElement, id3: HTMLInputElement, id4: HTMLInputElement, id5: HTMLInputElement) {
    console.log('adding...', id1.value, id2.value, id3.value, id4.value, id5.value) ;
    this.taskService.addTask({
      nombres: id1.value,
      seccion: id2.value,
      edad: id3.value,
      salario: id4.value,
      description: id5.value,
      hide: true
    });
    console.log(this.taskService.getTasks());
    return false;
  }

}


