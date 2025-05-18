import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-customer-accounts',
  imports: [
    JsonPipe,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './customer-accounts.component.html',
  standalone: true,
  styleUrl: './customer-accounts.component.css'
})
export class CustomerAccountsComponent implements OnInit{
  customerId! : string ;
  customer! : Customer;
  constructor(private route : ActivatedRoute, private router :Router) {
    this.customer=this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];

  }
}
