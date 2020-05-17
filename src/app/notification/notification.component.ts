import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  

  constructor(public snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  config : MatSnackBarConfig = {
    
    duration:3000,
    horizontalPosition: 'right',
    verticalPosition:'top'


  }

  configEr : MatSnackBarConfig = {
    
    duration:3000,
    horizontalPosition: 'right',
    verticalPosition:'top'


  }

  successMsg(msg:string){
    this.config['panelClass']= ['notification','success'];
    this.snackbar.open(msg,'',this.config);
  }

  errorMsg(msg:string){
    this.configEr['panelClass']= ['errNotification','failure'];
    this.snackbar.open(msg,'',this.config);
  }
}
