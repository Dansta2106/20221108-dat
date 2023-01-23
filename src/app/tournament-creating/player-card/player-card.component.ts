import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../entities/player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  constructor() { }

  @Input() item: Player | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  toggleSelection(): void {
    this.selected = this.selected ? false : true;
    this.selectedChange.emit(this.selected);
  }
}
