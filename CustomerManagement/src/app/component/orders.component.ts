import { ModelModule } from "../model/model.module";
import { ModelRepository } from "../model/model.repository";
import { Customer } from "../model/customer.model";
import { Component } from "@angular/core";


@Component({
  selector: "orders",
  templateUrl: "orders.component.html"
})
export class OrdersComponent {

  private repository: ModelRepository;
  private pos: number;
  constructor(public repo: ModelRepository) {
    // let a = 100;

    this.repository = repo;
    //this.customers = []; //this.repository.getcustomers();
  }
  //I like to have an init() for controllers that need to perform some initialization. Keeps things in
  //one place...not required though especially in the simple example below


 
  get customers(): Customer[] {
    console.log("jgdxj")
    console.log("inside order component : "+ this.repository.getcustomers())
    return this.repository.getcustomers();
   
    
  }
}
