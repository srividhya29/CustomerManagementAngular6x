import { CustomerComponent } from "../component/customer.component";
import { Customer } from "./customer.model";
import { ModelRepository } from "./model.repository";
import { CustomerService } from "./customerService";
import { NgModule } from "@angular/core";


@NgModule({
  imports: [],
  providers: [CustomerService, Customer, ModelRepository]
   
})
export class ModelModule { }
