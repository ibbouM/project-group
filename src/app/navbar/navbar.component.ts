import { Component, OnInit } from '@angular/core';
import {AdminService} from "../services/admin/admin.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user = true;
  userConnection= false;
  nomUser = "";

  constructor(private admin: AdminService,private router: Router) { 
 
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.user = this.admin.admin
      this.userConnection = this.admin.userConnection
      this.nomUser = this.admin.nomUser

    },200)
  }
 
  deconnecter(){
    this.admin.userConnection = true;
    this.router.navigate(['/']); 

  }
}
