import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }

  // show history of orders and their status 
  checkOrderStatus(){
    this.msg = "hello";

  }

  // edit password, address, phone num, email id
  editProfile(){
    this.msg = "editing profile";
  }

  // show the funds currently available
  showFunds(){
    this.msg = "showing funds";
  }

  // add funds to the account
  addFunds(){
    this.msg = "adding funds";

    // does it call showFunds() at the end?
  }
  
}
