import { Component } from "@angular/core";
import { Place } from "../../models/place";
import { NavParams } from "ionic-angular";

@Component({
    selector: 'page-placeLocation',
    templateUrl: 'placeLocation.html'
})

export class PlaceLocationPage {

    place: Place;

    constructor(public navParams: NavParams ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PlaceLocationPage');

        this.place = this.navParams.get("place");
    }
}