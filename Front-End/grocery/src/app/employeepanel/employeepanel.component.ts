import { Component, OnInit } from '@angular/core';
import { RaiseticketService } from '../raiseticket.service';

@Component({
  selector: 'app-employeepanel',
  templateUrl: './employeepanel.component.html',
  styleUrls: ['./employeepanel.component.css']
})
export class EmployeepanelComponent implements OnInit {
  tickets: {username: string, request: string, _id: string}[] = []
  constructor(public raiseRequestService:RaiseticketService) {
    this.raiseRequestService.getTickets()
    .subscribe(result=> {
      this.tickets = result
    });
  }

  ngOnInit(): void {
  }

}
