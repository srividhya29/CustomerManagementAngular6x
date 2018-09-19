import { Injectable } from "@angular/core";
@Injectable()
export class Order {
  constructor(public product: string,
    public price: number,
    public quantity: number,
    public orderTotal: number) { }
}
