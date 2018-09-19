import { Injectable } from "@angular/core";
import { Customer } from "./customer.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Order } from "./order.model";
//import { ChangeDetectorRef } from '@angular/core';
@Injectable()
export class CustomerService {
  private customer: Customer[] = [];

  constructor() {
    this.customer = [
      new Customer(1, "pooja", "ZGanesan", "bangalore",
        [new Order("Basket", 29.99, 1, 29.99),
        new Order("Yarn", 9.99, 1, 39.96),
        new Order("Needes", 5.99, 1, 5.99)]
      ),

      new Customer(2, "sdedsneha", "bbbb", "mysore",
        [new Order("ipod", 29.99, 1, 29.99),
        new Order("tv", 9.99, 1, 39.96),
        new Order("bed", 5.99, 1, 5.99)]
      )
    ];
  }

  getCustomers(): Observable<Customer[]> {
    return Observable.from([this.customer]);
  }

  //the below 2 methods should be presentin this clss because the new customer and delete customer has to be done in this instance of customers
  setCustomer(firstName: string, lastName: string, city: string): Observable<Customer[]> {
    var topID = this.customer.length + 1;
    this.customer.push(new Customer(topID,
      firstName,
      lastName,
      city, []));

    return Observable.from([this.customer]);
  }

  deleteCustomer(id: number) {
    for (let i = this.customer.length - 1; i >= 0; i--) {
      if (this.customer[i].id === id) {
        this.customer.splice(i, 1); // i refers to the position of item u want to remove, 1 refers to how many items has to be removed
        break;
      }
    }
  }

  
}
