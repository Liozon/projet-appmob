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

  

  constructor(private auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    
  }

  ionViewDidLoad() {
    const url = `${config.apiUrl}/trips`;
    this.http.get(url).subscribe(trips => {
      console.log(`Trips loaded`, trips);
    });
    console.log('ionViewDidLoad UsersPage');

  }

  
  

}
