import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Player } from '../entities/player';

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

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
  }

  search(): void {

    const url = 'http://localhost:3000/player';

    const headers = new HttpHeaders()
        .set('Accept', 'application/json');

    const params = new HttpParams()
       // .set('from', this.from)
        .set('name', this.name);

    this.http
        .get<Player[]>(url, {headers, params})
        .subscribe({
            next: (players: Player[]) => {
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

}
