import { Component } from "@angular/core";
import { PictureProvider } from "../../providers/picture/picture";
import { QimgImage } from "../../models/qimg-image";
import { Camera } from "@ionic-native/camera";
import { NavController, NavParams } from "ionic-angular";

@Component({
    selector: 'page-newPlace',
    templateUrl: 'newPlace.html'
})

export class NewPlacePage {

    picture: QimgImage;
    //pictureData: string;

    constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, private pictureService: PictureProvider) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewPlacePage');
    }

    takePicture() {
        this.pictureService.takeAndUploadPicture().subscribe(picture => {
            this.picture = picture;
        }, err => {
            console.warn('Could not take picture', err);
        });
        /*
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
        */
    }
}