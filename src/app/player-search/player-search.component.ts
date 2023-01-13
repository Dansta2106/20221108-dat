import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Player } from '../entities/player';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {

  name = "";
  players: Array<Player> = [];
  selectedPlayer : Player | undefined;

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
  }

  search(): void {

  }

  select(p: Player): void {
    const url = 
    this.selectedPlayer = p;
  }

}
