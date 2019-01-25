import { Component } from "@angular/core";
import { Place } from "../../models/place";
import { NavParams, NavController } from "ionic-angular";
import { EditPlacePage } from './editPlace';
import { PlaceLocationPage } from "./placeLocation";
import { Subscription } from 'rxjs';
import { AuthProvider } from "../../providers/auth/auth";


@Component({
    selector: 'page-place',
    templateUrl: 'place.html'
})

export class PlacePage {

    place: Place;

    username: string;
    userSubscription: Subscription;

    constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PlacePage');

        this.userSubscription = this.auth.getUser().subscribe(user => {
            if (user) {
                this.username = user.name;
            }
        })

        this.place = this.navParams.get("place");
    }

    editPlace(place) {
        this.navCtrl.push(EditPlacePage, {
            place: place
        });
    }

    showUser() {
        alert("todo: show user");
    }

    showTrip() {
        alert("todo: show user");
    }

    showLocation(place) {
        this.navCtrl.push(PlaceLocationPage, {
            place: place
        });
    }
}