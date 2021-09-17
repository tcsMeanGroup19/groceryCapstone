import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  fundRef = new FormGroup({
    userID: new FormControl(),
    funds:new FormControl()
  });
  editRef = new FormGroup({
    userID: new FormControl(),
    password: new FormControl(),
    address: new FormControl(),
    phoneNum: new FormControl(),
    emailID: new FormControl()
  });
  funds:number = 0;
  msg:string="";
  constructor(public userService:UserService) {
    this.showFunds();
   }

  ngOnInit(): void {

  }

  // show history of orders and their status 
  checkOrderStatus(){
    this.msg = "hello";

  }

  // edit password, address, phone num, email id
  editProfile(){
    this.msg = "editing profile";

    let newProfile = this.editRef.value;
    this.userService.editUserProfile(newProfile)
    .subscribe(result=>{this.msg=result;},error=>{console.log(error)});

    this.editRef.reset();
  }

  // show the funds currently available
  showFunds(){
    this.msg = "showing funds";
    this.userService.showUserFunds().subscribe(result=>{
      this.funds = result;
    })
  }

  // add funds to the account
  addFunds(){
    this.msg = "adding funds";
    let newFunds = this.fundRef.value;
    //this.userService.addUserFunds(newFunds).subscribe(result=>{
    //  this.msg = result;
    //}, error=>console.log(error));
    this.funds = newFunds.funds;
    this.fundRef.reset();
    // call showFunds at the end to update it
    //this.showFunds();
  }
  
}
