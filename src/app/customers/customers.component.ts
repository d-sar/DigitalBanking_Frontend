import { Component } from '@angular/core';

import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {CustomerService} from '../services/customer.service';
import {provideHttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Customer} from '../model/customer.model';


@Component({
  selector: 'app-customers',
  imports: [NgForOf, NgIf, AsyncPipe],
  templateUrl: './customers.component.html',
  standalone: true,
  styleUrl: './customers.component.css',

})
export class CustomersComponent {
  customers !: Observable<Array<Customer>> ;
  errorMessage !: String;
  constructor(private customerService : CustomerService) { }

  ngOnInit():void{
    this.customers=this.customerService.getCustomers().pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    )

  }
}
