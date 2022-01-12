//import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit  {
  @Input() globalData: any;

  constructor() {
    // this.http.get("https://api.covid19api.com/summary").subscribe((value: any) => {
    //   console.log(value.Global);
    //   this.data = value.Global;
    
    //})
    
   }

  ngOnInit(): void {
  }

}
