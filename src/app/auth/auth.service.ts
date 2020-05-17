import { User } from './user.module';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from '../notification/notification.component';

@Injectable()
export class AuthService {

   

    private user: User;
    authChange = new Subject<boolean>();

constructor(private router : Router, private notification: NotificationComponent){


}


    registerUser( authData: AuthData){

        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authChange.next(true);
    }

    login(authData: AuthData){

        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        console.log("MMMM");console.log(authData);
        if (authData.email == "user@demo.io" && authData.password == "demo1234" ) {
            
            this.authSuccessFully();
        } else {
            
            console.log("incorrect user/password");
            this.notification.successMsg('Invalid user/password');
        }
        
    }

    logout(){

        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    private authSuccessFully(){

        this.authChange.next(true);
        this.router.navigate(['/appliances']);
    }

    isAuth(){
        return this.user != null;
    }

    getUser(){
        return {...this.user};
    }
}