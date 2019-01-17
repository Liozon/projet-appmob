import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../app/config';
import { Trip } from '../../models/trip';
import { Observable } from 'rxjs';


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
    return this.http.get<Trip[]>(tripUrl);
  };

  /*const tripUrl = `${config.apiUrl}/trips`;
  return new Promise(resolve => {
    this.http.get(tripUrl).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
} */

}