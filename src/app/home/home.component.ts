import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../app/services/admin/admin.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = true;
  name = ""

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
    this.user = this.admin.admin
    this.name = this.admin.nom
  }

}