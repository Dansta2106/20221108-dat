import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Player } from '../entities/player';
import { PlayerService } from './player-search/player.service';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {

  message = "";
  name = "";
  players: Array<Player> = [];
  selectedPlayer: Player | undefined;
  selectedPlayerCreat: Player | undefined;
  selectedPlayerUpdate: Player | undefined;


  constructor(private playerService: PlayerService) { 

  }

  ngOnInit(): void {
  }

  search(): void {
    this.playerService
      .find(this.name)
      .subscribe({
        next: (players) => {
          this.players = players;
        },
        error: (errResp) => {
          console.error('Error getting players', errResp);
      }
    });
  }
  

  select(p: Player): void {
    const url = 
    this.selectedPlayer = p;
  }

  selectCreat(p: Player): void {
    const url =
    this.selectedPlayerUpdate = undefined;
    this.selectedPlayerCreat = p;
  }

  selectUpdate(p: Player): void {
    const url =
    this.selectedPlayerCreat = undefined;
    this.selectedPlayerUpdate = p;
  }



  save(): void {

    if (!this.selectedPlayer) return;

    this.playerService
      .save(this.selectedPlayer)
      .subscribe({
        next: (players) => {
          this.message = "Created player succesfully"
          this.selectedPlayer = players;
        },
        error: (errResp) => {
          console.error('Error creating players', errResp);
      }
    });
  }

delete(): void {
    if (!this.selectedPlayer) return;

    this.playerService.delete(this.selectedPlayer)
        .subscribe({
          next: (players) => {
            this.message = "Deleted player succesfully";
          },
          error: (errResp) => {
            console.error('Error deleting player', errResp);
        }
      });
    
    }



update(): void {
    if (!this.selectedPlayer) return;

    this.playerService
      .update(this.selectedPlayer)
      .subscribe({
        next: (players) => {
          this.message = "Updated player succesfully"
          this.selectedPlayer = players;
        },
        error: (errResp) => {
          console.error('Error updating players', errResp);
      }
    });
  }
}