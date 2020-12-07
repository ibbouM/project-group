import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {AdminService} from "../../../services/admin/admin.service";


@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  ProduitBio :any;
  ProduiBioFilter=[]

  constructor(private adminservice: AdminService) { }

  async ngOnInit() {
    console.log("1")
    await axios.get('https://localhost:44388/api/Article').then((res)=>{
      this.ProduitBio = res.data
     
      res.data.forEach(element => {
        console.log(element.Categorie);
        if(element.Categorie== "Legume"|| element.Categorie=="Fruit"){

        }else{
          this.ProduiBioFilter.push(element)
        }
        
      });
     
      })
    console.log("2")
  }
  selectedProduitBioValue(produitbio:any){
    this.adminservice.panier.push(produitbio)
    console.log("Ok");
    console.log( this.adminservice.panier);
  }
}
