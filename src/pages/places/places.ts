import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { QimgImage } from '../../models/qimg-image';
import { PictureProvider } from '../../providers/picture/picture';
import { PlacePage } from './place';
import { TripPage } from '../trips/trip';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showPlace() {
    this.navCtrl.push(PlacePage);
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
