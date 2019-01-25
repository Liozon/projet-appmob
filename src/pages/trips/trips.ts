import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { TripPage } from './trip';
import { NewTripPage } from './newTrip';
import { Trip } from '../../models/trip';
import { UserAccountPage } from '../users/userAccount';


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

  constructor(private rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.tripList = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');

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

  showUser(user) {
    this.navCtrl.push(UserAccountPage, {
      user: user
    });
  }
}
