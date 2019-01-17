import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../app/config';
import { Trip } from '../../models/trip';
import { Observable } from 'rxjs';
import { User } from '../../models/user';


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

  getUsers(): Observable<User[]> {
    const userUrl = `${config.apiUrl}/users`;
    return this.http.get<User[]>(userUrl);
  };
}