import { Component } from "@angular/core";
import { Place } from "../../models/place";
import { NavParams } from "ionic-angular";
import { MapOptions, tileLayer, latLng, marker } from "leaflet";

@Component({
    selector: 'page-placeLocation',
    templateUrl: 'placeLocation.html'
})

export class PlaceLocationPage {

    place: Place;
    placeMarker: any;
    lat: any;
    lng: any;

    mapOptions: MapOptions;

    constructor(public navParams: NavParams ) { 
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PlaceLocationPage');

        this.place = this.navParams.get("place");
        this.lat = this.place.location.coordinates[1];
        this.lng = this.place.location.coordinates[0];
        this.placeMarker = marker([this.lat, this.lng]);

        console.log(this.placeMarker);
        this.getMarker(); 
    }

    getMarker() {
        const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tileLayerOptions = { maxZoom: 18 };
        this.mapOptions = {
            layers: [
                tileLayer(tileLayerUrl, tileLayerOptions),
                this.placeMarker
            ],
            zoom: 13,
            center: latLng(this.lat, this.lng)
        };
    }
}