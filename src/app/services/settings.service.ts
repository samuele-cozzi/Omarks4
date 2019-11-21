import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import 'firebase/firestore';

import { Observable } from 'rxjs';

import { Settings } from '../shared/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private uid: string;
  public photo_url: string;
  public displayName: string;
  public email: string;

  private userSettingsCollection: AngularFirestoreCollection<Settings>;
  private settingsDoc: AngularFirestoreDocument<Settings>;
  private settings$: Observable<Settings>;
  public settings: Settings;

  constructor(
    private afs: AngularFirestore,
    private firebaseApp: FirebaseApp
  ) {
    this.uid = this.firebaseApp.auth().currentUser.uid;
    this.photo_url = this.firebaseApp.auth().currentUser.photoURL;
    this.displayName = this.firebaseApp.auth().currentUser.displayName;
    this.email = this.firebaseApp.auth().currentUser.email;

    this.userSettingsCollection = this.afs.collection('settings');
    this.settingsDoc = this.userSettingsCollection.doc(this.uid);
    this.settings$ = this.settingsDoc.valueChanges();

    this.settings$.subscribe((val: Settings) => {
      if (!val) {
        let _settings = new Settings();
        this.settingsDoc.set(Object.assign({},_settings));
      } else {
        this.settings = val;

        document.body.classList.toggle('dark', this.settings.dark);
      }
    });
  }

  update(){
    this.settingsDoc.set(this.settings , {merge: true});
  }

  get timestamp() {
    // return this.afs.firestore.FieldValue.serverTimestamp();
    return '';
  }
}
