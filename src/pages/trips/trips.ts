import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AuthProvider } from '../../providers/auth/auth';

import { TripPage } from './trip';
import { NewTripPage } from './newTrip';
import { Trip } from '../../models/trip';
import { Subscription } from 'rxjs';


@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {

  restProvider: RestProvider;

  tripList: Trip[];

  trips: any;

  selectedTrip: Trip;

  search: string;

  username: string;
  userSubscription: Subscription;

  constructor(private auth: AuthProvider, private rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.tripList = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');

    this.userSubscription = this.auth.getUser().subscribe(user => {
      if (user) {
        this.username = user.name;
      }
    })

    this.search = this.navParams.get("search");

    console.log("this:" + this.search);
    
    this.rest.getTrips(this.trips).subscribe(tripList => {
      this.tripList = tripList;
    });
  }

  onInput(e: any) {
    this.rest.getTrips(e.target.value).subscribe(tripList => {
      this.tripList = tripList; 
    }); 
  }

  addTrip() {
    this.navCtrl.push(NewTripPage);
  }

  showTrip(trip) {
    this.navCtrl.push(TripPage, {
      trip: trip
    });
  }

  showUser() {
    alert("todo: show user");
  }
}
