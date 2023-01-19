import { Player } from "./player";

export interface Match {
    id: number;
    player_1: Player;
    player_2: Player;
    location: Location;
    elo_difference: number;
}