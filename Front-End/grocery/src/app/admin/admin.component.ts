import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  alert:boolean = false;
  username:string = "";
  password: string = ""

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  logIn(){
    if(this.username == "admin" && this.password == "admin"){
      this.router.navigate(["adminpanel"]);

      //Navigate to Page
    }
    else{
      alert("Please enter valid details");
    }



  }


}
