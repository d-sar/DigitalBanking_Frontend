import { Component } from '@angular/core';

import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {CustomerService} from '../services/customer.service';
import {provideHttpClient} from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';
import {Customer} from '../model/customer.model';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-customers',
  imports: [NgForOf, NgIf, AsyncPipe, ReactiveFormsModule],
  templateUrl: './customers.component.html',
  standalone: true,
  styleUrl: './customers.component.css',

})
export class CustomersComponent {
  customers !: Observable<Array<Customer>> ;
  errorMessage !: String;
  searchFormGroup : FormGroup | undefined ;

  constructor(private customerService : CustomerService,private fb : FormBuilder) { }

  ngOnInit():void{
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchCustomers();
  }
  handleSearchCustomers() {
    let kw=this.searchFormGroup?.value.keyword;
    this.customers=this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }
  handleDeleteCustomer(c: Customer) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.customerService.deleteCustomer(c.id).subscribe({
      next : (resp) => {
        this.customers=this.customers.pipe(
          map(data=>{
            let index=data.indexOf(c);
            data.slice(index,1)
            return data;
          })
        );
      },
      error : err => {
        console.log(err);
      }
    })
  }
}
