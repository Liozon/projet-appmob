import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { MapOptions, tileLayer, latLng, Map, Marker } from 'leaflet';
import { NavController, NavParams } from 'ionic-angular';
import { Trip } from '../../models/trip';
import { Place } from '../../models/place';
import { RestProvider } from '../../providers/rest/rest';

@Component({
    selector: 'page-tripLocation',
    templateUrl: 'tripLocation.html',
})

export class TripLocationPage {

    trip: Trip;
    restProvider: RestProvider;

    mapOptions: MapOptions;
    mapMarkers: Marker[];

    map: Map;
    places: Place[];

    constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private rest: RestProvider) {
        const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tileLayerOptions = { maxZoom: 18 };
        this.mapOptions = {
            layers: [
                tileLayer(tileLayerUrl, tileLayerOptions)
            ],
            zoom: 13,
            center: latLng(46.778186, 6.641524)
        };
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TripLocationPage');

        this.trip = this.navParams.get("trip");

        this.rest.getPlaces().subscribe(places => {
            this.places = places;
            this.mapMarkers = [];
            places.forEach((place) => {
                //this.mapMarkers = place.location.coordinates;
            });
        });
    };


}