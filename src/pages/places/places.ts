import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { latLng, MapOptions, tileLayer } from 'leaflet';

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  mapOptions: MapOptions;




  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
