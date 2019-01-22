import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacePage } from './place';
import { TripPage } from '../trips/trip';
import { RestProvider } from '../../providers/rest/rest';
import { Place } from '../../models/place';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  restProvider: RestProvider;

  placeList: Place[];

  places: any;

  selectedPlace: Place;

  constructor(private rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.placeList = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');

    this.rest.getPlaces().subscribe(placeList => {
      this.placeList = placeList;
    });
  }

  onInput(e: any) {
    this.rest.getPlaces(e.target.value).subscribe(placeList => {
      this.placeList = placeList;
    });
  }

  showPlace(place) {
    this.navCtrl.push(PlacePage, {
      place: place
    });
  }

  showTrip() {
    this.navCtrl.parent.select(0).then(() => {
      this.navCtrl.parent.getSelected().push(TripPage);
    });
  }

  showUser() {
    alert("todo: show user");
  }

}