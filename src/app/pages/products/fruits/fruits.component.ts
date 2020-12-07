import { isNull } from '@angular/compiler/src/output/output_ast';
import {AdminService} from "../../../services/admin/admin.service";
import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  fruits :any;
  fruitsFilter=[]

  constructor(private adminService:AdminService) { 


  }

  async ngOnInit() {
    console.log("1")
    await axios.get('https://localhost:44388/api/Article').then((res)=>{
      this.fruits = res.data
     
      res.data.forEach(element => {
        console.log(element.Categorie);
        if(element.Categorie== "Legume" || element.Categorie=="Produit Bio"){

        }else{
          this.fruitsFilter.push(element)
        }
        
      });
     
      })
    console.log("2")
  }
  
  selectedFruitValue(Fruit:any){
    this.adminService.panier.push(Fruit)
    console.log("Ok");
    console.log( this.adminService.panier);
  }
}