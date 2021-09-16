import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {
  products: {name: string, price: Number, qty:number}[] = []
  constructor(public adminSer:AdminService) { 
    this.adminSer.getproductDetails().subscribe(result=> {
      this.products = result
    });
  
  }
  

  ngOnInit(): void {
  }

}
