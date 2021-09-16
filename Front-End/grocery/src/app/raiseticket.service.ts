import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RaiseTicket } from './raiseticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaiseticketService {

  constructor(public http:HttpClient) { }

  raiseTicket(RaiseTicket:RaiseTicket):Observable<any>{
    return this.http.post("http://localhost:9090/api/requests",RaiseTicket,
    {responseType:'text'});
  }

  getTickets():Observable<any>{
    return this.http.get("http://localhost:9090/api/requests",
    {responseType:'json'});
  }
}
