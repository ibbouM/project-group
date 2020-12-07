import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin/admin.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  
   nbrPanier;
   //Panier dans basket.component.html
   Panier= this.adminService.panier;
   

  constructor(private adminService: AdminService) { }
  

  ngOnInit(): void {
    this.adminService.panier
    console.log(this.adminService.panier);
    console.log(this.Panier);
  }

}

