import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Place } from "../../models/place";
import { RestProvider } from "../../providers/rest/rest";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { PlacePage } from "./place";
import { HomePage } from "../home/home";
import { PictureProvider } from "../../providers/picture/picture";
import { QimgImage } from "../../models/qimg-image";

@Component({
    selector: 'page-editPlace',
    templateUrl: 'editPlace.html'
})

export class EditPlacePage {

    place: Place;
    placeMod: Place;
    editError: boolean;
    picture: QimgImage;

    placeList: Place[];

    restProvider: RestProvider;

    @ViewChild(NgForm)
    form: NgForm;

    constructor(private rest: RestProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private pictureService: PictureProvider) {
        this.placeMod = new Place();
        this.picture = new QimgImage;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EditPlacePage');

        this.place = this.navParams.get("place");
    }

    onSubmit($event) {
        // Prevent default HTML form behavior.
        $event.preventDefault();

        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }

        // Hide any previous edit error.
        this.editError = false;

        this.rest.editPlace(this.place.id, this.placeMod).subscribe(modifiedPlace => {
            this.placePage(modifiedPlace);
        }, err => {
            this.editError = true;
            console.warn(`Edit Place failed: ${err.message}`);
        });
    }

    placePage(place) {
        this.navCtrl.push(PlacePage, {
            place: place
        });
    }

    takePicture() {
        this.pictureService.takeAndUploadPicture().subscribe(picture => {
            this.picture = picture;
        }, err => {
            console.warn('Could not take picture', err);
        });
    }

    deletePlace() {
        const confirm = this.alertCtrl.create({
            title: 'Delete Place?',
            message: 'Do you want to delete this place?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.rest.deletePlace(this.place.id).subscribe();
                        this.navCtrl.setRoot(HomePage, { opentab: 1 });
                        this.rest.getPlaces().subscribe(placeList => {
                            this.placeList = placeList;

                        });
                        console.log('Do you want to delete this place? - Yes clicked');
                    }
                },
                {
                    text: 'No',
                    handler: () => {
                        console.log('Do you want to delete this place? - No clicked');
                    }
                }
            ]
        });
        confirm.present();
    }
}