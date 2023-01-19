import { Routes } from "@angular/router";
import { LocationSearchComponent } from "./location-search/location-search.component";
import { PlayerSearchComponent } from "./player-search/player-search.component";

export const TOURNAMENT_CREATING_ROUTES: Routes = [
    {
      path: 'player-search',
      component: PlayerSearchComponent
    },
    {
      path: 'location-search',
      component: LocationSearchComponent
    }
  ];
  