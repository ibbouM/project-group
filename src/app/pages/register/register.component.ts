import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup;
  nom: string;
  prenom:string;
  email: string;
  pwd: string;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = fb.group({
   nom:[''],
   prenom:[''],
   email:[''],
   pwd:[''],
    })
   }

  ngOnInit(): void {
  }

  async onSubmit(){
    await console.log(this.registerForm.value)
    this.nom = this.registerForm.get('nom').value;
    this.prenom = this.registerForm.get('prenom').value;
    this.email = this.registerForm.get('email').value;
    this.pwd = this.registerForm.get('pwd').value;
    await axios.post('https://localhost:44388/api/Utilisateur',{Prenom: this.prenom,  Email:this.email, Nom: this.pwd}).then((res)=>{
      console.log(res)
      
      })
    this.router.navigate(['/']);
  }

}
