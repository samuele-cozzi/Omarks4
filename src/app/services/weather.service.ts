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

        let todaydoc = this.afs.collection('settings/' + this.uid + '/weather').doc('today');
        todaydoc.get().subscribe((val) => {
            if (val) {
                this.today = new Weather();
                this.today.city = val.get("name");
                this.today.temp_max = val.get("main").temp_max;
                this.today.temp_min = val.get("main").temp_min;
                this.today.icon = val.get("weather")[0].icon;
                //console.log(this.today);
            } 
        });

        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);

        let tomorrowdoc = this.afs.collection('settings/' + this.uid + '/weather').doc(currentDate.toISOString().split('T')[0]);
        tomorrowdoc.get().subscribe((val) => {
            if (val) {
                this.tomorrow = new Weather();
                this.tomorrow.temp_max = val.get("day_forecast").value.main.temp_max;
                this.tomorrow.temp_min = val.get("day_forecast").value.main.temp_mix;
                this.tomorrow.icon = val.get("day_forecast").value.weather[0].icon;
                //console.log(val);
            } 
        });

        currentDate.setDate(currentDate.getDate() + 1);

        let dayAfterdoc = this.afs.collection('settings/' + this.uid + '/weather').doc(currentDate.toISOString().split('T')[0]);
        dayAfterdoc.get().subscribe((val) => {
            if (val) {
                this.dayAfter = new Weather();
                this.dayAfter.temp_max = val.get("day_forecast").value.main.temp_max;
                this.dayAfter.temp_min = val.get("day_forecast").value.main.temp_mix;
                this.dayAfter.icon = val.get("day_forecast").value.weather[0].icon;
                //console.log(val);
            } 
        });

        // this.DashboardCollection = this.afs.collection<Item>('settings/' + this.uid + '/dashboard').doc('today');
        // let items$: Observable<Item[]>;

        // //this.DashboardCollection.snapshotChanges().subscribe(res => this.items = res);
        // items$ = this.DashboardCollection.snapshotChanges().pipe(
        //     map((actions: DocumentChangeAction<Item>[]) => {
        //         return actions.map((a: DocumentChangeAction<Item>) => {
        //             let data: Item = a.payload.doc.data() as Item;
        //             data.id = a.payload.doc.id
        //             return data;
        //         });
        //     })
        // );

        // items$.subscribe((val: Item[]) => {
        //     this.items = val

        //     this.itemRows = new Array<Item[]>();
        //     for (let _i = 0; _i < this.items.length; _i = _i + 12 )
        //     {
        //         let _row: Item[] = new Array<Item>();

        //         for (let _j = 0; ( _j < 12 && _j < ( (_i) + this.items.length ) ); _j++) {
        //             _row.push( this.items[(_i) + _j] );
        //         }

        //         this.itemRows.push(_row);
        //     }
        //     console.log(this.itemRows);
        // });
    }

    get timestamp() {
        // return this.afs.firestore.FieldValue.serverTimestamp();
        return '';
    }
}
