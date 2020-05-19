import { Appliances } from './appliances.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppliancesService{

     private API_URL : String  = 'http://localhost:8080/';
    todayString : string = new Date().toDateString();
    /**  private API_URL : String  = 'https://appliancesdemo.herokuapp.com/';
     * private availableAppliances: Appliances[] = [
        {
           id:'1' , serialNo : '1' , brand : 'LG',dateBought : this.todayString ,status : 'InUse', model: 'Fridge1'
        },
        {
            id:'2' , serialNo : '2' , brand : 'Bajaj',dateBought : this.todayString ,status : 'InUse', model: 'Fan1'
         },
         {
            id:'3' , serialNo : '3' , brand : 'Daikin',dateBought : this.todayString ,status : 'Sold', model: 'AC1'
         },
    ]; */


    constructor( private http:HttpClient){


    }
    getAppliances(){

        console.log( this.http.get( this.API_URL +'getAppliances'));

        return this.http.get(this.API_URL +'getAppliances');
        //return this.availableAppliances.slice();
    }

    addAppliance(appliance : Appliances){
       // console.log(appliance);
       // console.log("XXXX");

     // const addApp  =  
      this.http.post(this.API_URL +'addAppliance',appliance)
        .toPromise().then(data => console.log(data));
        //console.log(addApp);
    }

    deleteAppliance(appliance : Appliances){
       

    }
}