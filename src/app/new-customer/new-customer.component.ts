import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Customer} from '../model/customer.model';
import {CustomerService} from '../services/customer.service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-new-customer',
  imports: [
    ReactiveFormsModule,CommonModule
  ],
  templateUrl: './new-customer.component.html',
  standalone: true,
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent {
  newCustomerFormGroup! : FormGroup;
  constructor(private fb : FormBuilder,
              private customerService:CustomerService,
              private router:Router) { }

  ngOnInit(): void {
    this.newCustomerFormGroup=this.fb.group({
      name : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email : this.fb.control(null,[Validators.required, Validators.email])
    });
  }

  handleSaveCustomer() {
    let customer: Customer = this.newCustomerFormGroup.value;
    this.customerService.saveCustomer(customer).subscribe({
      next: data => {
        alert("Customer has been successfully saved!");
        // Navigate after success
        this.router.navigateByUrl("/customers");
      },
      error: err => {
        console.error(err);
        alert("Error saving customer: " + err.message);
      }
    });
  }
}
