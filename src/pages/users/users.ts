import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { config } from '../../app/config';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  pictureData: string;

  constructor(private auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    
  }

  ionViewDidLoad() {
    const url = `${config.apiUrl}/trips`;
    this.http.get(url).subscribe(trips => {
      console.log(`Trips loaded`, trips);
    });
    console.log('ionViewDidLoad UsersPage');
  }

  
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(pictureData => {
      this.pictureData = pictureData;
    }).catch(err => {
      console.warn(`Could not take picture because: ${err.message}`);
    });
  }

}
