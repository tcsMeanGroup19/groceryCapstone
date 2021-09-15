import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RaiseticketService } from '../raiseticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raiserequest',
  templateUrl: './raiserequest.component.html',
  styleUrls: ['./raiserequest.component.css']
})
export class RaiserequestComponent implements OnInit {

  raiseRequestRef = new FormGroup({
    username:new FormControl(),
    request:new FormControl()
  })
  constructor(public raiseRequestService:RaiseticketService, public router:Router) { }
  msg?:string;
  ngOnInit(): void {
  }

  raiseTicket() {
    let raiseRequest = this.raiseRequestRef.value;
 
    this.raiseRequestService.raiseTicket(raiseRequest).
    subscribe(result=> {

        alert("ticket sent");
        this.router.navigate(["userlogin"]);
      

          this.msg = result;

    });
 
    this.raiseRequestRef.reset();
  }

}
