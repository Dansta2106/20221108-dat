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
  selectedPlayer : Player | undefined;

  constructor(private http: HttpClient, private playerService: PlayerService) { 

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
          console.error('Error loading players', errResp);
      }
    });
  }
  

  select(p: Player): void {
    const url = 
    this.selectedPlayer = p;
  }

  save(): void {

    if (!this.selectedPlayer) return;

    const url = 'http://localhost:3000/player';

    const headers = new HttpHeaders()
        .set('Accept', 'application/json');

    this.http
        .post<Player>(url, this.selectedPlayer, { headers })
        .subscribe({
            next: (player) => {
                this.selectedPlayer = player;
                this.message = 'Update successful!';
            },
            error: (errResponse) => {
                this.message = 'Error on updating the Player (post)';
                console.error(this.message, errResponse);

            }
        });
}

delete(): void {
    if (!this.selectedPlayer) return;

    this.http.delete('http://localhost:3000/player/'+ this.selectedPlayer.id)
        .subscribe(() => this.message = 'Delete successful');
  }



update(): void {
    if (!this.selectedPlayer) return;

    this.playerService
      .update(this.selectedPlayer)
      .subscribe({
        next: (players) => {
          this.message = "Edited player succesfully"
          this.selectedPlayer = players;
        },
        error: (errResp) => {
          console.error('Error editing players', errResp);
      }
    });
  }
}