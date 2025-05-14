import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  backendHost:string="http://localhost:8085";
  constructor(private http:HttpClient) { }
  public getCustomers ():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>("http://localhost:8085/customers",{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }
  public searchCustomers(keyword : string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers/search?keyword="+keyword)
  }
}
