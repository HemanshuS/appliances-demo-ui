import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { LoginComponent } from './auth/login/login.component';
import { AppliancesComponent } from './appliances/appliances.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AppliancesService } from './appliances/appliances.service';
import { DialogBoxComponent } from './appliances/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,   
    LoginComponent,
    AppliancesComponent,
   
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AppliancesService],
  bootstrap: [AppComponent],
  entryComponents:[DialogBoxComponent]
})
export class AppModule { }
