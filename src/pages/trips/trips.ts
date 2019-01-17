import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams, DateTime, List } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { EditTripPage } from '../trips/editTrip';
import { config } from '../../app/config';
import { RestProvider } from '../../providers/rest/rest';
import { TripPage } from './trip';
import { NewTripPage } from './newTrip';
import { Trip } from '../../models/trip';

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {

  restProvider: RestProvider;

  tripList: Trip[];

  trips: any;

  selectedTrip : Trip;

  constructor(private auth: AuthProvider, private http: HttpClient, private rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.tripList = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');
    
    this.rest.getTrips().subscribe(tripList => {
      this.tripList = tripList;
      
    });
    
  }

  onInput(e) {
    // set val to the value of the ev target
    var val = e.target.value;
  }

  addTrip() {
    this.navCtrl.push(NewTripPage);
  }

  showTrip(trip) {
    console.log(trip);
    this.navCtrl.push(TripPage, {
      trip: trip
    });
  }

  showUser() {
    alert("todo: show user");
  }
}
