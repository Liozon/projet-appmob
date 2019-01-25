import { Component } from "@angular/core";
import { Place } from "../../models/place";
import { NavParams, NavController } from "ionic-angular";
import { EditPlacePage } from './editPlace';
import { PlaceLocationPage } from "./placeLocation";


@Component({
    selector: 'page-place',
    templateUrl: 'place.html'
})

export class PlacePage {

    place: Place;

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad tPlacePage');

        this.place = this.navParams.get("place");
    }

    editPlace(place) {
        this.navCtrl.push(EditPlacePage, {
            place: place
        });
    }

    showUser() {
        alert("todo: show user");
    }

    showTrip() {
        alert("todo: show user");
    }

    showLocation(place) {
        this.navCtrl.push(PlaceLocationPage, {
            place: place
        });
    }
}