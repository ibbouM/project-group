import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FruitsComponent } from './pages/products/fruits/fruits.component';
import { VegetablesComponent } from './pages/products/vegetables/vegetables.component';
import { BioComponent } from './pages/products/bio/bio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BasketComponent } from './pages/basket/basket.component';
import { PaiementComponent } from './paiement/paiement.component';



const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"fruits", component:FruitsComponent},
  {path:"vegetables", component:VegetablesComponent},
  {path:"bio", component:BioComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"basket", component:BasketComponent},
  {path:"paiement", component:PaiementComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
