import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
    DocumentChangeAction
} from '@angular/fire/firestore';
import 'firebase/firestore';

import { News } from '../shared/news.model';

@Injectable({
    providedIn: 'root'
})

export class NewsService {
    private uid: string;

    public news: News[];

    constructor(
        private afs: AngularFirestore,
        private firebaseApp: FirebaseApp
    ) {

        this.uid = this.firebaseApp.auth().currentUser.uid;
    }

    async getLatests()
    {
        const snapshot = await this.afs.collection<News>('settings/' + this.uid + '/news').ref.get();
        this.news = [];
        snapshot.forEach(doc => {
            let newsData = doc.data();
            this.news.push(newsData as News);
        });
        console.log(this.news);
    }
}
