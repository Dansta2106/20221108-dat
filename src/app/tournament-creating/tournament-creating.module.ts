import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LocationSearchComponent } from './location-search/location-search.component';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TOURNAMENT_CREATING_ROUTES } from './tournament-creating.routes';
import { PlayerCardComponent } from './player-card/player-card.component';
import { LocationCardComponent } from './location-card/location-card.component';



@NgModule({
  declarations: [
  LocationSearchComponent,
  PlayerSearchComponent,
  PlayerCardComponent,
  LocationCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(TOURNAMENT_CREATING_ROUTES)
  ],

  exports:  [
    LocationSearchComponent,
    PlayerSearchComponent
  ]
})
export class TournamentCreatingModule { }
