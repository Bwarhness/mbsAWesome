import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
Navn;
Url = "";
Searches:any = [];
  constructor(public navCtrl: NavController, public cookieService:CookieService) {
    var res = window.localStorage.getItem('Searches')
    if (!res) {
      let data:any =   {
        'Navn':"Alle opgaver",
        'Url':"http://login.tradenda.dk/embed/GetDataAsJson?searchId=b5f178e2-3e2d-4fbc-ac42-b377859fef7b"
      }
      this.Searches.push(data);      
      window.localStorage.setItem("Searches", JSON.stringify(this.Searches));
      console.log(this.Searches)
    }
    else
    {
      this.Searches = JSON.parse(res)
      console.log(this.Searches)
    }
  }

  AddSearch(){
    let data = {
      'Navn':this.Navn,
      'Url':this.Url
    };
    this.Searches.push(data)
    window.localStorage.setItem("Searches", JSON.stringify(this.Searches));
  }
  navigate(search){
    
    this.navCtrl.push(SearchPage,search)
  }
}
