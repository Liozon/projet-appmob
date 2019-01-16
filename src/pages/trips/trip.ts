import { Component } from '@angular/core';
import { TripLocationPage } from './tripLocation';
import { NewPlacePage} from '../places/newPlace';
import { NavController } from 'ionic-angular';
import { EditTripPage } from './editTrip';

@Component({
    selector: 'page-trip',
    templateUrl: 'trip.html'
})

export class TripPage {
    
    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TripPage');
    }

    editTrip() {
        this.navCtrl.push(EditTripPage);
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
        //this.navCtrl.push(NewPlacePage);
    }
}