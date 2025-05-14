import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import {NgModule} from '@angular/core';
import {NewCustomerComponent} from './new-customer/new-customer.component';

export const routes: Routes = [
  {path :"customers",component :CustomersComponent},
  {path :"accounts",component :AccountsComponent},
  {path :"new-customer",component : NewCustomerComponent},

];
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutes{}
