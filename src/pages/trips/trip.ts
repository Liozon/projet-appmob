import { Component } from '@angular/core';
import { TripLocationPage } from './tripLocation';
import { NewPlacePage} from '../places/newPlace';
import { NavController, NavParams } from 'ionic-angular';
import { EditTripPage } from './editTrip';
import { Trip } from '../../models/trip';

@Component({
    selector: 'page-trip',
    templateUrl: 'trip.html'
})

export class TripPage {

    trip: Trip;
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TripPage');

        this.trip = this.navParams.get("trip");
    }

    editTrip(trip) {
        this.navCtrl.push(EditTripPage, {
            trip: trip
        });
    }

    showUser() {
        alert("todo: show user");
    }

    showPlaces() {
        this.navCtrl.push(TripLocationPage);
    }

    addPlace() {
        this.navCtrl.parent.select(1).then(() => {
            this.navCtrl.parent.getSelected().push(NewPlacePage);
        });
    }
}