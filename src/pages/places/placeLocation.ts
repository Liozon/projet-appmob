import { Component } from "@angular/core";
import { Place } from "../../models/place";
import { NavParams } from "ionic-angular";
import { MapOptions, tileLayer, latLng, Marker } from "leaflet";
import { getPluralCase } from "@angular/common/src/i18n/localization";

@Component({
    selector: 'page-placeLocation',
    templateUrl: 'placeLocation.html'
})

export class PlaceLocationPage {

    place: Place;
    marker: Marker;
    placeMarker: any;

    mapOptions: MapOptions;

    //this.marker: this.place.location.coordinates

    //placeMarker = marker([46.778186, 6.641524]);

    constructor(public navParams: NavParams ) { 
        
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PlaceLocationPage');

        /*
        this.place = this.navParams.get("place").subscribe(place => {
            this.marker = place.location.coordinates;
        });
        */

        this.place = this.navParams.get("place");
        //this.placeMarker = marker(["place.location.coordinates"]);

        //this.getMarker();
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
            center: latLng(46.778186, 6.641524)
        };
    }

}