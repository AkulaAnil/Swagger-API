import {Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface RootObject {
  floorId: number;
  medicalService: string;
  orgId: number;
  srTypeLocation: string;
  srTypeName: string;
  svcSegmentId: string;
}

@Component({
  selector: 'app-get-two',
  templateUrl: './get-two.component.html',
  styleUrls: ['./get-two.component.css']
})
export class GetTwoComponent implements OnInit {

  public users2: RootObject[];

  public create2: RootObject = {
    floorId: 4,
    medicalService: "Ram-Service45",
    orgId: 7,
    srTypeLocation: "Hyderabad",
    srTypeName: "Service Type64",
    svcSegmentId: "SVC-64"
  }
  

  // public message;
  // public action;
  

  public dataSource;
  displayedColumns: string[] = ['floorId', 'medicalService', 'orgId', 'srTypeLocation', 'srTypeName', 'svcSegmentId'];

  constructor(private apiService2: ApiService, private snackBar: MatSnackBar) { 
    this.getData2();
    // this.openSnackBar(this.message, this.action);
  }

  ngOnInit() {
  }

  getData2(){
    this.apiService2.getApi2().subscribe(response => {
      this.users2 = response['serviceType'];
      this. dataSource = new MatTableDataSource(this.users2);
      this.createData2(this.create2);
      this.openSnackBar('Success','Completed')
    }, 
    (error) => {
        console.log("Error-> ", error);
        this.openSnackBar('Error','Pending') 
    });      
  }

  createData2(create2){
    this.apiService2.postApi2(create2).subscribe(response => {
      this.users2.push(this.create2);
      this. dataSource = new MatTableDataSource(this.users2);  
      this.openSnackBar('Success','Completed')
    },
    (error) => {
      console.log("Error->" , error);
      this.openSnackBar('Error','Pending');
    })
  }

  // Snack Bar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1500,
    });
  }

}
