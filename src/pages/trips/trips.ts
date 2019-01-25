import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AuthProvider } from '../../providers/auth/auth';

import { TripPage } from './trip';
import { NewTripPage } from './newTrip';
import { Trip } from '../../models/trip';
import { Subscription } from 'rxjs';
import { UserAccountPage } from '../users/userAccount';
import { User } from '../../models/user';
import { getSegmentsFromUrlPieces } from 'ionic-angular/umd/navigation/url-serializer';


@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {

  restProvider: RestProvider;

  tripList: Trip[];

  trips: any;

  selectedTrip: Trip;

  user: User;
  tripsCount: any;

  tripUser: string;
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
    
    this.getTrips();
    
  }

  getTrips(search?){
    this.rest.getTrips(search).subscribe(tripList => {
      this.tripList = tripList, {
        search: this.navParams.get("name")
      };
      if (this.navParams.get("name")) {
        console.log(name);
      } else {
        console.log("leider nein");
      }
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
    console.log(user);
  }
}
