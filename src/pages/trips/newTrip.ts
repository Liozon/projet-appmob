import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { Trip } from '../../models/trip';
import { TripsPage } from './trips';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-newTrip',
    templateUrl: 'newTrip.html',
})

export class NewTripPage {

    trip: Trip;

    restProvider: RestProvider;

    /**
     * The newtrip form.
     */
    @ViewChild(NgForm)
    form: NgForm;

    constructor(private rest: RestProvider, public navCtrl: NavController) {
        this.trip = new Trip();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewTripPage');
    }

    tripError: boolean;

    /**
   * Called when the newtrip form is submitted.
   */
    onSubmit($event) {

        // Prevent default HTML form behavior.
        $event.preventDefault();

        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }

        // Hide any previous login error.
        this.tripError = false;

        // Perform the authentication request to the API.
        this.rest.newTrip(this.trip).subscribe(() => this.tripsPage(), err => {
            this.tripError = true;
            console.warn(`Creating User failed: ${err.message}`);
        });
    }

    tripsPage() {
        this.navCtrl.push(TripsPage);
    }
}