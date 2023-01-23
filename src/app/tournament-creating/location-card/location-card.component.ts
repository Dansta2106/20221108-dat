import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '../entities/location';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {

  constructor() { }
  @Input() item: Location | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  toggleSelection(): void {
    this.selected = this.selected ? false : true;
    this.selectedChange.emit(this.selected);
  }
}
