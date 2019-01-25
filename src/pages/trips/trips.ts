import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AuthProvider } from '../../providers/auth/auth';
import { TripPage } from './trip';
import { NewTripPage } from './newTrip';
import { Trip } from '../../models/trip';
import { Subscription } from 'rxjs';
import { UserAccountPage } from '../users/userAccount';
import { User } from '../../models/user';


@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {

  restProvider: RestProvider;

  tripList: Trip[];

  search: string;

  user: User;

  username: string;
  userSubscription: Subscription;

  constructor(private auth: AuthProvider, private rest: RestProvider, public navCtrl: NavController) {
    this.tripList = [];
  }

  ionViewDidLoad(search?) {
    console.log('ionViewDidLoad TripsPage');

    this.userSubscription = this.auth.getUser().subscribe(user => {
      if (user) {
        this.username = user.name;
      }
    })

    this.rest.getTrips(search).subscribe(tripList => {
      console.log(search);
      this.tripList = tripList, {
        params:{
          search: search
        }
      };
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