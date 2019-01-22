import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  selectedTrip: Trip;

  constructor(private rest: RestProvider, public navCtrl: NavController) {
    this.tripList = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');
    
    this.rest.getTrips().subscribe(tripList => {
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
