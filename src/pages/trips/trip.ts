import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Trip } from '../../models/trip';
import { EditTripPage } from './editTrip';
import { TripLocationPage } from './tripLocation';
import { NewPlacePage } from '../places/newPlace';
import { Subscription } from 'rxjs';
import { AuthProvider } from '../../providers/auth/auth';
import { UserAccountPage } from '../users/userAccount';


@Component({
    selector: 'page-trip',
    templateUrl: 'trip.html'
})

export class TripPage {

    trip: Trip;

    username: string;
    userSubscription: Subscription;
    
    constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        this.userSubscription = this.auth.getUser().subscribe(user => {
            if (user) {
                this.username = user.name;
            }
        })
        console.log('ionViewDidLoad TripPage');

        this.trip = this.navParams.get("trip");
    }

    editTrip(trip) {
        this.navCtrl.push(EditTripPage, {
            trip: trip
        });
    }

    showUser(user) {
        this.navCtrl.push(UserAccountPage, {
            user: user
        });
    }

    showPlaces(trip) {
        this.navCtrl.push(TripLocationPage, {
            trip: trip
        });
    }

    addPlace(trip) {
        /*
        this.navCtrl.parent.select(1).then(() => {
            this.navCtrl.parent.getSelected().push(NewPlacePage);
        });
        */
       this.navCtrl.push(NewPlacePage, {
           trip: trip
       });
    }
}