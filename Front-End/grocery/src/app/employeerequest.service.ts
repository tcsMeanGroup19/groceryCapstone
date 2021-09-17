import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employeerequest } from './employeerequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeerequestService {

  constructor(public http:HttpClient) { }

  employeeraiseTicket(EmployeeraiseTicket:Employeerequest):Observable<any>{
    return this.http.post("http://localhost:9090/api/employeerequests",EmployeeraiseTicket,
    {responseType:'text'});
  }

  employeegetTickets():Observable<any>{
    return this.http.get("http://localhost:9090/api/employeerequests",
    {responseType:'json'});
  }
}
