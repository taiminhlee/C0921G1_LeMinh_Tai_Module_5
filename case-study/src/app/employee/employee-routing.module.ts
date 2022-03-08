import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CustomerListComponent} from "../customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "../customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "../customer/customer-edit/customer-edit.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./employee-create/employee-create.component";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";

const routes: Routes = [
  {path: "employee", component: EmployeeListComponent},
  {path: "create", component: EmployeeCreateComponent},
  {path: "edit/:id", component: EmployeeEditComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeRoutingModule { }
