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
    public itemRows: Item[][];

    constructor(
        private afs: AngularFirestore,
        private firebaseApp: FirebaseApp
    ) {

        this.uid = this.firebaseApp.auth().currentUser.uid;

        this.DashboardCollection = this.afs.collection<Item>('settings/' + this.uid + '/dashboard', ref => ref.orderBy('index'));
        let items$: Observable<Item[]>;

        //this.DashboardCollection.snapshotChanges().subscribe(res => this.items = res);
        items$ = this.DashboardCollection.snapshotChanges().pipe(
            map((actions: DocumentChangeAction<Item>[]) => {
                return actions.map((a: DocumentChangeAction<Item>) => {
                    let data: Item = a.payload.doc.data() as Item;
                    data.id = a.payload.doc.id
                    return data;
                });
            })
        );

        items$.subscribe((val: Item[]) => {
            this.items = val

            this.itemRows = new Array<Item[]>();
            for (let _i = 0; _i < this.items.length; _i = _i + 12 )
            {
                let _row: Item[] = new Array<Item>();

                for (let _j = 0; ( _j < 12 && _j < ( (_i * 12) + this.items.length ) ); _j++) {
                    _row.push( this.items[(_i * 12) + _j] );
                }

                this.itemRows.push(_row);
            }
        });
    }

    initItem(_id) {

        let items$: Observable<Item>;

        this.itemsDoc = this.DashboardCollection.doc(_id);
        items$ = this.itemsDoc.valueChanges();

        items$.subscribe((val: Item) => {
            this.item = val;
        });
    }

    async add(_index) {
        let _item = {} as Item;
        _item.index = _index;
        const doc_ref = await this.DashboardCollection.add(_item);
        return doc_ref.id;
    }

    update(_item?: Item) {
        if (_item == null) {
            this.itemsDoc.set(this.item, { merge: true });
        } else {
            this.DashboardCollection.doc(_item.id).set(_item, {merge: true});
        }
    }

    delete(_id) {
        this.DashboardCollection.doc(_id).delete();
    }

    get timestamp() {
        // return this.afs.firestore.FieldValue.serverTimestamp();
        return '';
    }
}
