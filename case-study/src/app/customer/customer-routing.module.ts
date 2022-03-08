import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ContractListComponent} from "../contract/contract-list/contract-list.component";
import {ContractCreateComponent} from "../contract/contract-create/contract-create.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";

const routes: Routes = [
  {path: "customer", component: CustomerListComponent},
  {path: "create", component: CustomerCreateComponent},
  {path: "edit/:id", component: CustomerEditComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerRoutingModule { }
