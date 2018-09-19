import { ModelModule } from "../model/model.module";
import { ModelRepository } from "../model/model.repository";
import { Customer } from "../model/customer.model";
import { Component } from "@angular/core";

@Component({
   selector: "customer",
  // moduleId: module.id,
  templateUrl: "customer.component.html"
})
export class CustomerComponent {
  private repository: ModelRepository;
  firstName: string;
  lastName: string;
  city: string;
  //customers: Customer[];


  constructor(public repo: ModelRepository) {
   // let a = 100;

    this.repository = repo;
    //this.customers = []; //this.repository.getcustomers();
  }

  get customers(): Customer[] {
    console.log("jgdxj")
    return this.repository.getcustomers();
  }


  
  insertCustomer() {
    var firstName = this.firstName; // get the value from newcustomer.firstname from view  ,we cant communicate directly from vc to view we need a vm inbetween and thus we use $scope -which is a vm
    var lastName = this.lastName;
    var city = this.city;
    this.repository.insertCustomer(firstName, lastName, city);// calling insertCustomer in model layer and passing data got from the viewmodel which inturn gets daat from view
    this.firstName = '';
    this.lastName = '';
    this.city = '';
  };

  deleteCustomer(id) {
    this.repository.deleteCustomer(id);
  };
  }
