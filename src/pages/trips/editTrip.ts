import { Component, ViewChild } from '@angular/core';
import { Trip } from '../../models/trip';
import { NavParams, NavController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { TripPage } from './trip';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-editTrip',
    templateUrl: 'editTrip.html',
})

export class EditTripPage {

    trip: Trip;
    tripMod: Trip;
    editError: boolean;

    restProvider: RestProvider;

    tripList: Trip[];

    @ViewChild(NgForm)
    form: NgForm;

    constructor(private rest: RestProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
        this.tripMod = new Trip();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad editTripPage');

        this.trip = this.navParams.get("trip");
    }

    onSubmit($event) {
        // Prevent default HTML form behavior.
        $event.preventDefault();

        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }

        // Hide any previous edit error.
        this.editError = false;

        this.rest.editTrip(this.trip.id, this.tripMod).subscribe(modifiedTrip => {
            this.tripPage(modifiedTrip);
        }, err => {
            this.editError = true;
            console.warn(`Edit Trip failed: ${err.message}`);
        });
    }

    tripPage(trip) {
        this.navCtrl.push(TripPage, {
            trip: trip
        });
    }

    deleteTrip() {
        const confirm = this.alertCtrl.create({
            title: 'Delete Trip?',
            message: 'Do you want to delete this trip?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.rest.deleteTrip(this.trip.id).subscribe();
                        this.navCtrl.setRoot(HomePage, { opentab: 0 });
                        this.rest.getTrips().subscribe(tripList => {
                            this.tripList = tripList;

                        });
                        console.log('Do you want to delete this trip? - Yes clicked');
                    }
                },
                {
                    text: 'No',
                    handler: () => {
                        console.log('Do you want to delete this trip ? - No clicked');
                    }
                }
            ]
        });
        confirm.present();
    }
}