import { Component, ViewChild } from "@angular/core";
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from "@ionic-native/camera";
import { NavController, NavParams } from "ionic-angular";
import { QimgImage } from "../../models/qimg-image";
import { PictureProvider } from "../../providers/picture/picture";
import { Place } from "../../models/place";
import { RestProvider } from "../../providers/rest/rest";
import { NgForm } from "@angular/forms";
import { PlacesPage } from "./places";
import { Trip } from "../../models/trip";

@Component({
    selector: 'page-newPlace',
    templateUrl: 'newPlace.html'
})

export class NewPlacePage {

    place: Place;
    trip: Trip; 
    lat: any;
    lng: any;

    restProvider: RestProvider;

    placeError: boolean;

    /**
     * The newplace form.
     */
    @ViewChild(NgForm)
    form: NgForm;

    picture: QimgImage;

    constructor(private rest: RestProvider, public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private pictureService: PictureProvider, private geolocation: Geolocation) {
        this.place = new Place();
        this.picture = new QimgImage;
     }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewPlacePage');
    }

    takePicture() {
        this.pictureService.takeAndUploadPicture().subscribe(picture => {
            this.picture = picture;
        }, err => {
            console.warn('Could not take picture', err);
        });
    }

    /**
   * Called when the newplace form is submitted.
   */
    onSubmit($event) {

        // Prevent default HTML form behavior.
        $event.preventDefault();

        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }

        // Hide any previous login error.
        this.placeError = false;

        // Perform the authentication request to the API.
        this.rest.newPlace(this.trip, this.trip.id).subscribe(() => this.placesPage(), err => {
            this.placeError = true;
            console.warn(`Creating Place failed: ${err.message}`);
        });
    }

    placesPage() {
        this.navCtrl.push(PlacesPage);
    }

    getLocation() {
        this.geolocation.getCurrentPosition().then(position => {
           this.lng = +position.coords.longitude;
           this.lat = +position.coords.latitude;
        })        
    }
}