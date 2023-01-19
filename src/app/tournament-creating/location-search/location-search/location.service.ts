import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../../entities/location';

@Injectable({ providedIn: 'root' })
export class LocationService {

    constructor(private http: HttpClient) {
    }

    find(country: string, city: string, event_name: string): Observable<Location[]> {
      const url = 'http://localhost:3000/location';

      const headers = new HttpHeaders()
          .set('Accept', 'application/json');
  
      const params = new HttpParams()
          .set("country", country)
          .set("city", city)
          .set('event_name', event_name);
  
          return this.http.get<Location[]>(url, { headers, params });
        }

        save(selectedLocation: Location): Observable<Location> {
          const url = 'http://localhost:3000/location';
        
          const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        
          return this.http.post<Location>(url, selectedLocation, { headers });
        }
        update(selectedLocation: Location): Observable<Location> {
          const url = 'http://localhost:3000/location';
        
          const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        
          return this.http.put<Location>(url + "/" + selectedLocation.id, selectedLocation, { headers });
        }

        delete(selectedLocation: Location): Observable<Location> {
          const url = "http://localhost:3000/location";

          const headers = new HttpHeaders()
          .set('Accept', 'application/json');
      
          return this.http.delete<Location>(url + "/" + selectedLocation.id, { headers });
        }
      
      }


