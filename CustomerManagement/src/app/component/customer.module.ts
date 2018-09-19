import { CustomerComponent } from "./customer.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { RouterModule } from "@angular/router";
import { OrderModule } from 'ngx-order-pipe';
import { SortPipe } from '../filters/sortFilterPipe'
import { OrdersComponent } from "./orders.component";
import { OrderTableComponent } from "./ordersTable.component";
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule, OrderModule],
  declarations: [CustomerComponent, SortPipe, OrdersComponent, OrderTableComponent],
  exports: [CustomerComponent, OrdersComponent, OrderTableComponent]
})
export class CustomerModule { }
