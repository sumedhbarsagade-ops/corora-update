import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  globalData: any = {};
  countryData: any = {};
  USData: any = {};
  constructor( public http: HttpClient){
    this.http.get("https://api.covid19api.com/summary").subscribe((value:any) => {
     // console.log(value);
      //value.Global; 
      this.globalData = value.Global;
      this.countryData = value.Countries;
     /// console.log(this.globalData);
      //console.log(this.countryData);

      this.countryData.forEach((countryList) => {
        //console.log(countryList);

        if(countryList.CountryCode == "US"){
          this.USData = countryList;
        }
      });
    });


  } 
  title = 'covidapp';

}
