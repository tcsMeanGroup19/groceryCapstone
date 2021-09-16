import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee} from './employee'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  addemployeeDetails(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employees/storeemployeeid",employee,
    {responseType:'text'});
  }
  deleteemployeeDetails(employee:Employee):Observable<any>{
    return this.http.delete("http://localhost:9090/api/employees/deleteEmployee/"+ employee);
  }
  getemployeeDetails():Observable<any>{
    return this.http.get("http://localhost:9090/api/employees/getEmployees/");
  }
 
}















