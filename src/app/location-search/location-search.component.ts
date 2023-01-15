import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '../entities/location';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  event_name = "";
  city= "";
  country = "";
  locations: Array<Location> = [];
  selectedLocation: Location | undefined;

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
  }

  search(): void {

    const url = 'http://localhost:3000/location';

    const headers = new HttpHeaders()
        .set('Accept', 'application/json');

    const params = new HttpParams()
        .set("country", this.country)
        .set("city", this.city)
        .set('event_name', this.event_name);

    this.http
        .get<Location[]>(url, {headers, params})
        .subscribe({
            next: (locations: Location[]) => {
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

}