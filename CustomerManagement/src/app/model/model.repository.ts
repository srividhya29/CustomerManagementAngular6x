import { Injectable } from "@angular/core";
import { Customer } from "./customer.model";
import { CustomerService } from "./customerService";

@Injectable()
export class ModelRepository {
  // currentCustomer: Customer;
  private customers: Customer[] = [];
  private customerServiceInstance: CustomerService;
  constructor(private customerService: CustomerService) {
    this.customerServiceInstance = customerService;
    this.subscribe();
  }
  subscribe = function () {
    this.customerServiceInstance.getCustomers().subscribe(data => {
      //here there is only continious look up on data since that is
      this.customers = data;
    });
  }
  getcustomers(): Customer[]{
    //this.subscribe();

    var temp = this.customers.sort((a: any, b: any) => {
      if (!a.lastName.localeCompare(b.lastName)) {
        return a.firstName.localeCompare(b.firstName);
      }
      return a.lastName.localeCompare(b.lastName);
    });
    console.log("inside repository : " + temp)
    return temp;
  }

  insertCustomer(firstName: string, lastName: string, city: string) {
    this.customerServiceInstance.setCustomer(firstName, lastName, city);
  }

  deleteCustomer(id: number) {
    this.customerServiceInstance.deleteCustomer(id);
  }

 
  getCustomer = function (id) {
    for (var i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        return this.customers[i];
      }
    }
    return null;
  }

  
}

