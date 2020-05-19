import { Component, OnInit, ViewChild } from '@angular/core';

import { Appliances } from './appliances.model';
import { MatTableDataSource, MatTable, MatDialog, MatDialogConfig, MatSort, MatPaginator } from '@angular/material';
import { AppliancesService } from './appliances.service';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { NotificationComponent } from '../notification/notification.component';


@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {


  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  appliancesData: Appliances[] = [];

  displayedColumns = ['serialNo','brand', 'model','dateOfPurchase','state','action'];
  dataSource = new MatTableDataSource<Appliances>(this.appliancesData);
  searchKey : String;
  
  constructor(private applianceService : AppliancesService,
              private dialog: MatDialog ,
              private notification: NotificationComponent) { 

  // this.dataSource.data = this.applianceService.getAppliances();
  // this.

  }

  @ViewChild(MatSort) sort: MatSort;
  //@ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
   // this.appliances = this.applianceService.getAppliances();
   //this.applianceService()

   this.callGetAppliances();
    
  }


  callGetAppliances(){
    let response = this.applianceService.getAppliances();
    response.subscribe(app => this.dataSource.data = app as Appliances[] );
    this.dataSource.sort = this.sort;
    this.notification.successMsg('Please wait while is data is being pulled remote server!');
  }

  addAppliance() {
    
    const diaglogConfig = new  MatDialogConfig();
    //diaglogConfig.disableClose=true;
    diaglogConfig.autoFocus=true;
    diaglogConfig.width="60%";
    diaglogConfig.height="70%";
    //obj.action = action;
    const dialogRef = this.dialog.open( DialogBoxComponent,diaglogConfig );
    dialogRef.afterClosed().subscribe(result => {
      this.callGetAppliances(); 
      this.notification.successMsg('New Appliance added.Please wait while is data is refreshed remote server!');
    });
    }
    
    onEdit(){

    }

    onDelete(){


    }

    clearSearch(){

      this.searchKey = "";
      this.applyFilter();
    }

    applyFilter(){

      this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }


}
