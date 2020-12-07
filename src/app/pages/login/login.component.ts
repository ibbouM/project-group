import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AdminService} from "../../services/admin/admin.service"
import { Router } from '@angular/router';
import axios from 'axios'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  email: string;
  pwd: string;


  constructor(private fb:FormBuilder, private admin : AdminService,private router: Router) {
 this.loginForm= fb.group({
   email:[''],
   pwd:['']
   
 })
   }

  ngOnInit(): void {
  }

  async onSubmit(){
    console.log(this.loginForm.value)
    this.email = this.loginForm.get('email').value;
    this.pwd = this.loginForm.get('pwd').value;
    await axios.get('https://localhost:44388/api/Utilisateur',{params:{email:this.email, mdp:this.pwd}}).then((res)=>{
      console.log(res)
      //config => params => affiche dans la console "F12" pour se connecter
      console.log(res.config.params.mdp);
      if(res.config.params.email == "ibbou96@gmail.com" && res.config.params.mdp=="Ibbou"){
        this.admin.admin = false;
        //nom = > pour admin
        this.admin.nom = res.config.params.mdp
      //Revenir a la racine "accueil" de la page web : Une fois connecté
     this.router.navigate(['/']);
      console.log("Ok");
      console.log(this.admin.admin);
    console.log(this.router.navigate)
    

      }else if(res.config.params.email !== "ibbou96@gmail.com" && res.config.params.mdp !=="Ibbou" && res.config.params.email!==""){
        this.admin.userConnection=false;
        this.admin.nomUser=res.config.params.mdp
        this.router.navigate(['/'])
        console.log("Ok");
        console.log(this.admin.admin);
      console.log(this.router.navigate)
      }
      
      })
     
  }



}