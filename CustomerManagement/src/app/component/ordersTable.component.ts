
import { Component , Input} from "@angular/core";
import { Customer } from "../model/customer.model";
import { ModelModule } from "../model/model.module";
import { ModelRepository } from "../model/model.repository";
import { CustomerComponent } from "./customer.component";
import { OrdersComponent } from "./orders.component";
@Component({
  selector: "ordersTable",
  // moduleId: module.id,
  templateUrl: "ordersTable.component.html"
})
export class OrderTableComponent {

  @Input() customer: Customer;

   //private customer: Customer;
  private repository: ModelRepository;
  constructor(public repo: ModelRepository) {
    // let a = 100;

    this.repository = repo;
  
  }
 

  get ordersTotal(): Number {
  //Calculate grand total
    //Handled at this level so we don't duplicate it across parent controllers
    if (this.customer && this.customer.order) {
    var total = 0.00;
    for (var i = 0; i < this.customer.order.length; i++) {
      var order = this.customer.order[i];
      total += order.orderTotal;
    }
    return total;
  }
}
}
