import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../app/config';
import { Trip } from '../../models/trip';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Place } from '../../models/place';


@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
  }


  /*--------- TRIP-PAGES-----------*/

  getTrips(): Observable<Trip[]> {
    const tripUrl = `${config.apiUrl}/trips`;
    return this.http.get<Trip[]>(tripUrl, {
      params: {
        include: 'user'
      }
    });
  };

  editTrip(id: string, body: Trip): Observable<Trip> {
    const editTripUrl = `${config.apiUrl}/trips/` + id;
    return this.http.patch<Trip>(editTripUrl, body);
  }

  newTrip(body: Trip): Observable<Trip> {
    const newTripUrl = `${config.apiUrl}/trips`;
    return this.http.post<Trip>(newTripUrl, body);
  }

  deleteTrip(id: string): Observable<{}> {
    const deleteTripUrl = `${config.apiUrl}/trips/` + id;
    return this.http.delete(deleteTripUrl);
  }


  /*--------- PLACE-PAGES-----------*/

  getPlaces(): Observable<Place[]> {
    const placeUrl = `${config.apiUrl}/places`;
    return this.http.get<Place[]>(placeUrl, {
      params: {
        include: 'user'
      }
    });
  };

  editPlace(id: string, body: Place): Observable<Place> {
    const editPlaceUrl = `${config.apiUrl}/places/` + id;
    return this.http.patch<Place>(editPlaceUrl, body);
  }

  newPlace(trip: Trip, body: string): Observable<Place> {
    const newPlaceUrl = `${config.apiUrl}/places`;
    return this.http.post<Place>(newPlaceUrl, body);
    
  }

  deletePlace(id: string): Observable<{}> {
    const deletePlaceUrl = `${config.apiUrl}/places/` + id;
    return this.http.delete(deletePlaceUrl);
  }


  /*--------- USER-PAGES-----------*/

  getUsers(): Observable<User[]> {
    const userUrl = `${config.apiUrl}/users`;
    return this.http.get<User[]>(userUrl);
  };

}