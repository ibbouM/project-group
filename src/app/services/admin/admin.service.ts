import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  admin = true;
  nom="";
  nomUser="";
  userConnection=true
  panier=[]

}
