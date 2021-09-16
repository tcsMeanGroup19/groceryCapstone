import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';
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
  constructor(public adminSer:AdminService
    ) { }

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
