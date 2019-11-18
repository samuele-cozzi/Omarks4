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

import { Item } from '../shared/item.model';

@Injectable({
    providedIn: 'root'
})

export class DashboardService {
    private uid: string;

    private DashboardCollection: AngularFirestoreCollection<Item>;
    private itemsDoc: AngularFirestoreDocument<Item>;
    public items: Item[];
    public item: Item;

    constructor(
        private afs: AngularFirestore,
        private firebaseApp: FirebaseApp
    ) {

        this.uid = this.firebaseApp.auth().currentUser.uid;

        this.DashboardCollection = this.afs.collection<Item>('settings/' + this.uid + '/dashboard');
        let items$: Observable<Item[]>;
        items$ = this.DashboardCollection.valueChanges();

        //this.DashboardCollection.snapshotChanges().subscribe(res => this.items = res);
        items$ = this.DashboardCollection.snapshotChanges().pipe(
            map((actions: DocumentChangeAction<Item>[]) => {
              return actions.map((a: DocumentChangeAction<Item>) => {
                const data: Object = a.payload.doc.data() as Item;
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
    }

    initItem(_id){

        
        let items$: Observable<Item>;

        this.itemsDoc = this.DashboardCollection.doc(_id);
        items$ = this.itemsDoc.valueChanges();

        items$.subscribe((val: Item) => {
            this.item = val;
        });
    }

    async add(_index) {
        let _item = { } as Item;
        _item.index = _index;
        const doc_ref = await this.DashboardCollection.add(_item);
        return doc_ref.id;
    }

    update(){
        this.itemsDoc.set(this.item , {merge: true});
      }

    get timestamp() {
        // return this.afs.firestore.FieldValue.serverTimestamp();
        return '';
    }
}
