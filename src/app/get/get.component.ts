import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  public users:IOrg[];

  public create = {
    address : "Guntur",
    emailId : "anil@gmail.com",
    logoPath : "it's ntg",
    mobileNo : "9642263902",
    orgId : 45,
    organization : "I don't",
    status : 1,
    // licenseId:1537766469465,
    // licensePath: "../1549089303926.l4j",
  }


  public dataSource;
  displayedColumns: string[] = ['address', 'emailId', 'logoPath', 'mobileNo', 'orgId', 'organization', 'status'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private apiService: ApiService,private snackBar: MatSnackBar){
    this.getData();
    this.createData(this.create);
  }

  
  ngOnInit() {
   

  }

  getData(){
    this.apiService.getApi().subscribe( res => {
      this.users = res['orgs'];
      this. dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
      this.openSnackBar('Success','Completed')
    },
    (error) => {
      console.log("Error->" , error);
      this.openSnackBar('Error','Pending');
    })      
  }

  createData(create){
    this.apiService.postApi(create).subscribe( create => {
      this.users.push(this.create);
      this. dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
      this.openSnackBar('Success','Completed')
    },
    (error) => {
      console.log("Error->" , error);
      this.openSnackBar('Error','Pending');
    })
  }

  deleteClick(element /* orgId */){
    // this.apiService.deleteApi(orgId).subscribe(res => {
    //   for(var i=0; i< this.users.length; i++){
    //     if(this.users[i].orgId===orgId){
    //       this.users.splice(i,1);
    //     }
    //   }
    // })
    this.dataSource.data = this.dataSource.data.filter(i => i!=element);
  }

  // Snack Bar
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 1500,
      });
    }

}
