import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '../entities/location';
import { LocationService } from './location-search/location.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {
  message = "";
  event_name = "";
  city= "";
  country = "";
  locations: Array<Location> = [];
  selectedLocation: Location | undefined;
  selectedLocationAdd: Location | undefined;
  selectedLocationEdit: Location | undefined;

  constructor(private http: HttpClient, private locationService: LocationService) { 

  }

  ngOnInit(): void {
  }

  search(): void {
    this.locationService
      .find(this.country, this.city, this.event_name)
      .subscribe({
        next: (locations) => {
          this.locations = locations;
        },
        error: (errResp) => {
          console.error('Error loading locations', errResp);
      }
    });
  }

  select(l: Location): void {
    const url = 
    this.selectedLocation = l;
  }

  selectAdd(l: Location): void {
    const url =
    this.selectedLocationEdit = undefined;
    this.selectedLocationAdd = l;
  }

  selectEdit(l: Location): void {
    const url =
    this.selectedLocationAdd = undefined;
    this.selectedLocationEdit = l;
  }

  save(): void {
    if (!this.selectedLocation) return;

    this.locationService
      .save(this.selectedLocation)
      .subscribe({
        next: (locations) => {
          this.message = "Added location succesfully"
          this.selectedLocation = locations;
        },
        error: (errResp) => {
          console.error('Error adding locations', errResp);
      }
    });
  }
  update(): void {
    if (!this.selectedLocation) return;

    this.locationService
      .update(this.selectedLocation)
      .subscribe({
        next: (locations) => {
          this.message = "Edited location succesfully"
          this.selectedLocation = locations;
        },
        error: (errResp) => {
          console.error('Error editing locations', errResp);
      }
    });
  }
  delete(): void {
    if (!this.selectedLocation) return;

    this.locationService
      .delete(this.selectedLocation)
      .subscribe({
        next: (locations) => {
          this.message = "Deleted location succesfully";
        },
        error: (errResp) => {
          console.error('Error editing locations', errResp);
      }
    });
  }
};