import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import {NgModule} from '@angular/core';
import {NewCustomerComponent} from './new-customer/new-customer.component';
import {LoginComponent} from './login/login.component';
import {AdminTemplateComponent} from './admin-template/admin-template.component';
import {CustomerAccountsComponent} from './customer-accounts/customer-accounts.component';

export const routes: Routes = [
  {path :"login",component:LoginComponent},
  {path : "",redirectTo:"/login",pathMatch:"full"},
  {path : "admin" , component :AdminTemplateComponent,children:[
      {path :"customers",component :CustomersComponent},
      {path :"accounts",component :AccountsComponent},
      {path :"new-customer",component : NewCustomerComponent},
      {path :"customer-accounts/:id",component:CustomerAccountsComponent},
    ]},


];
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutes{}
