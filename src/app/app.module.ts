
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
