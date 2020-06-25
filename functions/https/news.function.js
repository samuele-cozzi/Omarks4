const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');
const app = express();

const db = admin.firestore();

app.post('/api/settings/:uid/news', async (req, res) => {
    const _uid = req.params.uid;
    const _body = req.body;

    console.log(`ANALYZING MESSAGE: UID-"${_uid}" - "${JSON.stringify(_body)}"`);

    try {
        const snapshot = await db.collection('settings').doc(_uid).collection('news').add(_body);

        res.status(201).json({ id: snapshot.id });
    } catch (error) {
        console.log('Insert error: ', error.message);
        res.sendStatus(500);
    }
});

app.delete('/api/settings/:uid/news', async (req, res) => {
    const _uid = req.params.uid;

    console.log(`ANALYZING MESSAGE: UID-"${_uid}"`);

    try {
       
        const snapshot = await db.collection('settings').doc(_uid).collection('news').get()

        // Once we get the results, begin a batch
        var batch = db.batch();

        snapshot.forEach(function(doc) {
            // For each doc, add a delete operation to the batch
            batch.delete(doc.ref);
        });

        // Commit the batch
        batch.commit();


        res.status(201).json({ status: "OK"});
    } catch (error) {
        console.log('Insert error: ', error.message);
        res.sendStatus(500);
    }
});

exports.api = functions.https.onRequest(app);