import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Trip } from '../../models/trip';
import { EditTripPage } from './editTrip';
import { TripLocationPage } from './tripLocation';
import { NewPlacePage } from '../places/newPlace';


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