import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../app/config';
import { Trip } from '../../models/trip';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { switchMap } from 'rxjs/operators';



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
  }

  getTrips(): Observable<Trip[]> {
    const tripUrl = `${config.apiUrl}/trips`;
    return this.http.get<Trip[]>(tripUrl, {
      params: {
        include: 'user'
      }
    });
  };

  editTrip(id: string, body: Trip): Observable<Trip> {
    const editUrl = `${config.apiUrl}/trips/` + id;
    return this.http.patch<Trip>(editUrl, body);
  }

  newTrip(body: Trip): Observable<Trip> {
    const newTripUrl = `${config.apiUrl}/trips`;
    return this.http.post<Trip>(newTripUrl, body);
  }

  deleteTrip(id: string): Observable<{}> {
    const deleteTripUrl = `${config.apiUrl}/trips/` + id;
    return this.http.delete(deleteTripUrl);
  }

  getUsers(): Observable<User[]> {
    const userUrl = `${config.apiUrl}/users`;
    return this.http.get<User[]>(userUrl);
  };

}