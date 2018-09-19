import { CustomerComponent } from "./component/customer.component";
import { OrdersComponent } from "./component/orders.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Customer } from "./model/customer.model";
import { CustomerModule } from "./component/customer.module";
//import { CheckoutComponent } from "./store/checkout.component";
//import {StoreFirstGuard} from "./storeFirst.guard"

  export const  routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'orders', component: OrdersComponent },
  
 // { path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard] }
  { path: "**", redirectTo: '', component: CustomerComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[]
})

export class AppRoutingModule{

}

