import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { AdminService } from '../admin.service';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  addRef = new FormGroup({
    _id:new FormControl(),
    name:new FormControl(),
    qty:new FormControl(),
    price:new FormControl(),
  })
  deleteRef = new FormGroup({
    _id:new FormControl(),
  })

  addemp = new FormGroup({
    _id:new FormControl(),
    name:new FormControl(),
    email:new FormControl(),
    
  })

  deleteemp = new FormGroup({
    _id:new FormControl(),
  })


  constructor(public adminSer:AdminService, public EmpSer:EmployeeService
    ) { }
    addemployee(){
      let empcut = this.addemp.value;
      console.log(empcut);
       this.EmpSer.addemployeeDetails(empcut).
       subscribe(result=>this.msgs=result,error=>console.log(error));
       this.addemp.reset();
       alert("The Employee has been added successfully")
    }
  
    deleteemployee(){
      let employee = this.deleteemp.value;
      this.EmpSer.deleteemployeeDetails(employee._id).
      subscribe(result=>this.msgs=result,error=>console.log(error));
      this.deleteemp.reset();
      alert("The Employee has been deleted successfully")
    }

    msgs?:string;


  ngOnInit(): void {
  }

  addproduct(){
    let prodcut = this.addRef.value;
    console.log(prodcut);
     this.adminSer.addproductDetails(prodcut).
     subscribe(result=>this.msgs=result,error=>console.log(error));
     this.addRef.reset();
     alert("The product added successfully")
  }

  deleteproduct(){
    let product = this.deleteRef.value;
    this.adminSer.deleteproductDetails(product._id).
    subscribe(result=>this.msgs=result,error=>console.log(error));
    this.deleteRef.reset();
    alert("The product deleted successfully")
  }

  
  
  updateRef = new FormGroup({
    _id:new FormControl(),
    qty:new FormControl(),
    price:new FormControl(),
  })

  updateproduct(){
    let prodcut = this.updateRef.value;
    console.log(prodcut);
     this.adminSer.updateproductDetails(prodcut).
     subscribe(result=>this.msgs=result,error=>console.log(error));
     this.updateRef.reset();
     alert("The product updated successfully")
  }
}
