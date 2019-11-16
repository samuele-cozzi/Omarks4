import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from '@angular/fire/firestore';
import 'firebase/firestore';

import { Observable } from 'rxjs';

import { Item } from '../shared/item.model';

@Injectable({
    providedIn: 'root'
})

export class Dashboard {
    private uid: string;

    private DashboardCollection: AngularFirestoreCollection<Item>;
    public items: Item[];

    constructor(
        private afs: AngularFirestore,
        private firebaseApp: FirebaseApp
    ) {

        this.uid = this.firebaseApp.auth().currentUser.uid;

        this.DashboardCollection = this.afs.collection('settings/'+ this.uid + '/dashboard');
        
    }

    get timestamp() {
        //return this.afs.firestore.FieldValue.serverTimestamp();
        return '';
    }
}
