import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FruitsComponent } from './pages/products/fruits/fruits.component';
import { VegetablesComponent } from './pages/products/vegetables/vegetables.component';
import { BioComponent } from './pages/products/bio/bio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BasketComponent } from './pages/basket/basket.component';
import { PaiementComponent } from './paiement/paiement.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FruitsComponent,
    VegetablesComponent,
    BioComponent,
    LoginComponent,
    RegisterComponent,
    BasketComponent,
    PaiementComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
