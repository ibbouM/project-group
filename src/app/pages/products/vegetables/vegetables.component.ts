import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent implements OnInit {
  legumes :any;
  legumeFilter=[];


  constructor(private adminService: AdminService) { }

  async ngOnInit() {
    console.log("1")
    await axios.get('https://localhost:44388/api/Article').then((res)=>{
      this.legumes = res.data
     
      res.data.forEach(element => {
        console.log(element.Categorie);
        if(element.Categorie== "Fruit" || element.Categorie=="Produit Bio"){

        }else{
          this.legumeFilter.push(element)
        }
        
      });
     
      })
    console.log("2")
  }

  selectedLegumeValue(Legume:any){
    this.adminService.panier.push(Legume)
    console.log("Ok");
    console.log( this.adminService.panier);
  }

}
