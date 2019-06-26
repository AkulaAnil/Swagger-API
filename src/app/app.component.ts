import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from './api.service';

export interface IOrg {
  address: string;
  emailId: string;
  logoPath: string;
  mobileNo: string;
  orgId: number;
  organization: string;
  status: number;
}

export interface RootObject {
  orgs: IOrg[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(){}

  
  ngOnInit() {}
}
