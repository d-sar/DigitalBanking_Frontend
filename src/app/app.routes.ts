import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {path :"customers",component :CustomersComponent},
  {path :"accounts",component :AccountsComponent},

];
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutes{}
