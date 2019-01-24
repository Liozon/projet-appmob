import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { MapOptions, tileLayer, latLng, Map, Marker, marker } from 'leaflet';
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
    placeList: Place[];

    placeMarkers: Marker[];

    restProvider: RestProvider;

    mapOptions: MapOptions;

    initialLocation: any;
    lat: any;
    lng: any;

    map: Map;

    constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private rest: RestProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TripLocationPage');

        this.trip = this.navParams.get("trip");

        this.geolocation.getCurrentPosition().then(position => {

            this.initialLocation = latLng(position.coords.latitude, position.coords.longitude);
            const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            const tileLayerOptions = { maxZoom: 18 };
            this.rest.getPlaces().subscribe(placeList => {
                this.placeList = placeList;

                this.placeMarkers = new Array();
                placeList.forEach((place) => {
                    if (place.tripId == this.trip.id) {
                        this.lat = place.location.coordinates[1];
                        this.lng = place.location.coordinates[0];
                        this.placeMarkers.push(marker([this.lat, this.lng]).bindTooltip("Place : " + place.name));
                    }
                });
                console.log(this.placeMarkers);
            });

            this.mapOptions = {
                layers: [
                    tileLayer(tileLayerUrl, tileLayerOptions)
                ],
                zoom: 5,
                center: latLng(this.initialLocation)
                //center: latLng()
            };
        }).catch(err => {
            console.warn(`Could not retrieve user position because: ${err.message}`);
        });

    }

    onMapReady(map: Map) {
        this.map = map;
        /*
        this.map.on('click', function (e) {
            var coord = e.latlng;
            var lat = coord.lat;
            var lng = coord.lng;
            console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
        });*/
    }

}