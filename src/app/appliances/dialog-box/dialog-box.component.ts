import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Appliances } from '../appliances.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { AppliancesService } from '../appliances.service';
import { NotificationComponent } from 'src/app/notification/notification.component';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  action:string;
  local_data:any;
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Appliances,
    private applianceService: AppliancesService,
    private notification: NotificationComponent) {
    
      console.log(data);
      this.local_data = {...data};
      this.action = this.local_data.action;
      this.form 
       = new FormGroup( {

        serialNo: new FormControl('',{
        validators: [ Validators.required ]
      }),
      model: new FormControl('',{
        validators: [ Validators.required]
      }),
      brand: new FormControl('',{
        validators: [ Validators.required]
      }),
      dateBought: new FormControl('',{
        validators: [ Validators.required]
      })

    }
    );
}  

ngOnInit(): void {
    //throw new Error("Method not implemented.");

    
  }

  onClose(){

   this.dialogRef.close();
  }

  
  onSubmit(){
    
    this.applianceService.addAppliance({
      id:'',
      serialNo: this.form.value.serialNo,
      brand: this.form.value.brand,
      model: this.form.value.model,
      status: 'Inuse'  ,   
      dateBought: this.form.value.dateBought
      
    });
    //this.applianceService.addAppliance(this.form.value);
    this.form.reset();
    //this.notificationService.success(" New Appliance Added");
    this.onClose();
    this.notification.successMsg('New Appliance added.');
  }

  onClear(){

    this.form.reset();
  }
}