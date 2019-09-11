import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ListComponent } from './components/list/list.component';
import { EmployeeService } from './services/employee.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    EmployeeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
