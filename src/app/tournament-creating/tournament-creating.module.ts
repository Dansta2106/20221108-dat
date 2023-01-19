import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LocationSearchComponent } from './location-search/location-search.component';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TOURNAMENT_CREATING_ROUTES } from './tournament-creating.routes';



@NgModule({
  declarations: [
  LocationSearchComponent,
  PlayerSearchComponent
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
