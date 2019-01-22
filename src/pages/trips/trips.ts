import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams, DateTime, List } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { TripPage } from './trip';
import { NewTripPage } from './newTrip';
import { Trip } from '../../models/trip';
import { getSegmentsFromUrlPieces } from 'ionic-angular/umd/navigation/url-serializer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {

  restProvider: RestProvider;

  tripList: Trip[];

  trips: any;

  selectedTrip: Trip;

  constructor(private http: HttpClient, private rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getList();
    this.tripList = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');
    
  }

  getList() {
    this.rest.getTrips().subscribe(tripList => {
      this.tripList = tripList;
    });
  }

  onInput(e: any) {

    //this.getList();

    // get the input-value
    var val = e.target.value;
    
    if (!val) {
      return;
    }

    if (val && val.trim() != '') {
      this.tripList = this.tripList.filter((trip) => {
        return (trip.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || trip.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } 
  }



  addTrip() {
    this.navCtrl.push(NewTripPage);
  }

  showTrip(trip) {
    this.navCtrl.push(TripPage, {
      trip: trip
    });
  }

  showUser() {
    alert("todo: show user");
  }
}
