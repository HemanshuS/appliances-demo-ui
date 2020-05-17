import { Component, OnInit, ViewChild } from '@angular/core';

import { Appliances } from './appliances.model';
import { MatTableDataSource, MatTable, MatDialog, MatDialogConfig } from '@angular/material';
import { AppliancesService } from './appliances.service';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';


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
  
  constructor(private applianceService : AppliancesService,
              private dialog: MatDialog ) { 

  // this.dataSource.data = this.applianceService.getAppliances();
  // this.
  

  }

  ngOnInit(): void {
   // this.appliances = this.applianceService.getAppliances();
   //this.applianceService()

   this.callGetAppliances();
    
  }


  callGetAppliances(){
    let response = this.applianceService.getAppliances();
    response.subscribe(app => this.dataSource.data = app as Appliances[] );
  }

  addAppliance() {
    
    const diaglogConfig = new  MatDialogConfig();
    //diaglogConfig.disableClose=true;
    diaglogConfig.autoFocus=true;
    diaglogConfig.width="60%";
    diaglogConfig.height="70%";
    //obj.action = action;
    const dialogRef = this.dialog.open( DialogBoxComponent,diaglogConfig );
      
    }
    
    onEdit(){

    }

}
