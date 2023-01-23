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

  IsPressed = false;
  message = "";
  name = "";
  players: Array<Player> = [];
  selectedPlayer: Player | undefined;
  selectedPlayerCreat: Player | undefined;
  selectedPlayerUpdate: Player | undefined;

  basket: Record<number, boolean> = {};


  constructor(private playerService: PlayerService) { 

  }

  ngOnInit(): void {
  }

  async search(): Promise<void> {
    if (this.IsPressed == true)
    await new Promise(resolve => setTimeout(resolve, 3000));

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

  selectDelete(): void {
    this.selectedPlayerCreat = undefined;
    this.selectedPlayerUpdate = undefined;
  }



  async save(): Promise<void> {

    if (!this.selectedPlayer) return;

    this.IsPressed = true;

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

    this.selectedPlayerCreat = undefined;
    this.search();

    await new Promise(resolve => setTimeout(resolve, 3000));
    this.IsPressed = false;
  }

  async delete(): Promise<void> {
    if (!this.selectedPlayer) return;

    this.IsPressed = true;

    this.playerService.delete(this.selectedPlayer)
        .subscribe({
          next: (players) => {
            this.message = "Deleted player succesfully";
          },
          error: (errResp) => {
            console.error('Error deleting player', errResp);
        }
      });

      await new Promise(resolve => setTimeout(resolve, 3000));
      this.IsPressed = false;

    }



  async update(): Promise<void> {
    if (!this.selectedPlayer) return;

this.IsPressed = true;

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

    this.selectedPlayerUpdate = undefined;
    this.search()

    await new Promise(resolve => setTimeout(resolve, 5000));
    this.IsPressed = false;
  }
}