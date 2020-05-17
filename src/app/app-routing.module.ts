import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { LoginComponent } from './auth/login/login.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
    {  path: '' , component:WelcomeComponent },
  
    {  path: 'login' , component:LoginComponent },
    {  path: 'appliances' , component:AppliancesComponent,canActivate: [AuthGuard] }

   
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule ],
    providers: [AuthGuard]

})

export class AppRoutingModule{

    
}