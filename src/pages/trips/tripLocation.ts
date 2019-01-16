import { Component } from '@angular/core';
import { MapOptions, tileLayer, latLng } from 'leaflet';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-tripLocation',
    templateUrl: 'tripLocation.html',
})

export class TripLocationPage {

    mapOptions: MapOptions;

    

    ionViewDidLoad() {
        console.log('ionViewDidLoad TripLocationPage');
    }

    constructor(public navCtrl: NavController, public navParams: NavParams ) {
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
}