import { Order } from "./order.model";
import { Injectable } from "@angular/core";
@Injectable()
export class Customer {
  constructor(public id :number,
    public firstName: string,
    public lastName: string,
    public city: string,
    public order?: Order[]) { }
}

