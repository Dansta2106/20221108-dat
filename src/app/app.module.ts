import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { MatchSearchComponent } from './match-search/match-search.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PlayerSearchComponent,
    MatchSearchComponent,
    LocationSearchComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
