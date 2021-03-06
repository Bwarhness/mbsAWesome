import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { HTTP } from '@ionic-native/http';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  
})
export class SearchPage {
info:any;
headers:any;
focus:any;
isAsc:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    console.log(navParams.data)
    let urlParams = "";
    if (navParams.data.Params !== undefined) {
      
      for (let index = 0; index < navParams.data.Params.length; index++) {

        const element = navParams.data.Params[index];
        urlParams += "&Params["+index+"].Param=" + element.Navn + "&Params["+index+"].Values[0]=" + element.Value;
      }
    }
    let finalUrl = 
    this.http.get("https://cors-anywhere.herokuapp.com/" + this.navParams.data.Url + urlParams).subscribe(
      (data:any) => {
        this.headers = data.header;
        this.info = data.body.rows;
      }
    )
  }
  selectFocus(selectedCell, allCells:any)
  {
    var index = allCells.indexOf(selectedCell);
    index++;
    if (this.focus == index)
    {
      this.isAsc = !this.isAsc;
    }
    else{
      this.isAsc = false;
      this.focus = index;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
