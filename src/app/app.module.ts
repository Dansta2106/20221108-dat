import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { FlightSearchComponent } from './flight-search/flight-search.component';
// import { PlayerSearchComponent } from './player-search/player-search.component';
// import { MatchSearchComponent } from './match-search/match-search.component';
// import { LocationSearchComponent } from './location-search/location-search.component';
import { FormsModule } from '@angular/forms';
import { TournamentCreatingModule } from './tournament-creating/tournament-creating.module';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TournamentCreatingModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    // PlayerSearchComponent,
    // MatchSearchComponent,
    // LocationSearchComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
