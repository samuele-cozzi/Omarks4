import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
    DocumentChangeAction
} from '@angular/fire/firestore';
import 'firebase/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Weather } from '../shared/weather.model';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    private uid: string;

    public today: Weather;
    public tomorrow: Weather;
    public dayAfter: Weather;

    constructor(
        private afs: AngularFirestore,
        private firebaseApp: FirebaseApp
    ) {

        this.uid = this.firebaseApp.auth().currentUser.uid;

        let currentDate = new Date();

        let todaydoc = this.afs.collection('settings/' + this.uid + '/weather').doc(currentDate.toISOString().split('T')[0]);
        todaydoc.get().subscribe((val) => {
            if (val.exists) {
                this.today = new Weather();
                this.today.temp_max = Math.round(val.get("feels_like").day);
                this.today.temp_min = Math.round(val.get("feels_like").night);
                this.today.icon = val.get("weather")[0].icon;
                //console.log(val);
            } 
        });
        
        currentDate.setDate(currentDate.getDate() + 1);

        let tomorrowdoc = this.afs.collection('settings/' + this.uid + '/weather').doc(currentDate.toISOString().split('T')[0]);
        tomorrowdoc.get().subscribe((val) => {
            if (val.exists) {
                this.tomorrow = new Weather();
                this.tomorrow.temp_max = Math.round(val.get("feels_like").day);
                this.tomorrow.temp_min = Math.round(val.get("feels_like").night);
                this.tomorrow.icon = val.get("weather")[0].icon;
                //console.log(val);
            } 
        });

        currentDate.setDate(currentDate.getDate() + 1);

        let dayAfterdoc = this.afs.collection('settings/' + this.uid + '/weather').doc(currentDate.toISOString().split('T')[0]);
        dayAfterdoc.get().subscribe((val) => {
            if (val.exists) {
                this.dayAfter = new Weather();
                this.dayAfter.temp_max = Math.round(val.get("feels_like").day);
                this.dayAfter.temp_min = Math.round(val.get("feels_like").night);
                this.dayAfter.icon = val.get("weather")[0].icon;
                //console.log(val);
            } 
        });
    }

    get timestamp() {
        return '';
    }
}
