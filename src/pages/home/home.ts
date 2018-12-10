import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CreateTripPage } from '../create-trip/create-trip';
import { PlacesMapPage } from '../places-map/places-map';
import { TripListPage } from '../trip-list/trip-list';

export interface HomePageTab {
  title: string;
  icon: string;
  component: Function;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // list of tabs
  tabs: HomePageTab[];

  constructor(public navCtrl: NavController) {
    this.tabs = [
      { title: 'New Trip', icon: 'add', component: CreateTripPage },
      { title: 'Places Map', icon: 'map', component: PlacesMapPage },
      { title: 'Trip List', icon: 'list', component: TripListPage }
    ];
  }
}
