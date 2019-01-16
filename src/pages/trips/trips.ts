import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams, DateTime, List } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { EditTripPage } from '../trips/editTrip';
import { config } from '../../app/config';
import { RestProvider } from '../../providers/rest/rest';
import { TripPage } from './trip';
import { NewTripPage } from './newTrip';

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {

  tripList = [];

  title: string;
  description: string;
  updatedAt: DateTime;
  user: string;

  trips: any;

  constructor(private http: HttpClient, private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    /*this.getTrips(); */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');

    /*
    this.auth.getUser().subscribe(user => {
      this.user = user.name;
    });
    
    
    this.getTrips().subscribe(trip => {
      this.title = trip.title;
      this.description = trip.description;
      this.updatedAt = trip.updatedAt;
    });
    */
  }

  /*
  getTrips() { 
    this.restProvider.getTrips().then(data => { 
      this.trips = data; console.log(this.trips); 
    }); 
  }
  */

  // TODO: add a method to log in.
  logIn() {
    this.auth.logOut();
  }

  // TODO: add a method to log out.
  logOut() {
    this.auth.logOut();
  }

  addTrip() {
    this.navCtrl.push(NewTripPage);
  }

  showTrip() {
    this.navCtrl.push(TripPage);
  }

  showUser() {
    alert("todo: show user");
  }
}
