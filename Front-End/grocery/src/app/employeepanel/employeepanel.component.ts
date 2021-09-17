import { Component, OnInit } from '@angular/core';
import { RaiseticketService } from '../raiseticket.service';
import { EmployeerequestService } from '../employeerequest.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeepanel',
  templateUrl: './employeepanel.component.html',
  styleUrls: ['./employeepanel.component.css']
})

export class EmployeepanelComponent implements OnInit {

  employeeraiseRequestRef = new FormGroup({
    employeeusername:new FormControl(),
    Erequest:new FormControl()
  })

  tickets: {username: string, request: string, _id: string}[] = []
  constructor(public raiseRequestService:RaiseticketService, public EmployeerequestSer:EmployeerequestService, public router:Router) {
    
    this.raiseRequestService.getTickets()
    .subscribe(result=> {
      this.tickets = result
    });
  }
  msg?:string;


  employeeraiseTicket() {
    let Employeerequest = this.employeeraiseRequestRef.value;
 
    this.EmployeerequestSer.employeeraiseTicket(Employeerequest).
    subscribe(result=> {

        alert("request sent");
        this.router.navigate(["employeepanel"]);
      

          this.msg = result;

    });
 
    this.employeeraiseRequestRef.reset();
  }
  ngOnInit(): void {
  }

}







