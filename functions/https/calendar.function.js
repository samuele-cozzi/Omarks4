const functions = require('firebase-functions');
const admin = require('firebase-admin');
//const axios = require("axios");

const express = require('express');
const app = express();

const db = admin.firestore();

app.post('/api/settings/:uid/calendar/:eventid', async (req, res) => {
    const _uid = req.params.uid;
    const _eventid = req.params.eventid
    const _body = req.body;

    console.log(`ANALYZING MESSAGE: UID-"${_uid}" "${JSON.stringify(_body)}"`);

    try {
        //   const results = await client.analyzeSentiment({
        //     document: { content: message, type: 'PLAIN_TEXT' }
        //   });

        //   const category = categorizeScore(results[0].documentSentiment.score);
        //   const data = {message: message, sentiment: results[0], category: category};

        //   await admin.database().ref(`/users/${req.user.uid}/messages`).push(message);

        const snapshot = await db.collection('settings').doc(_uid).collection('calendar').doc(_eventid).set(_body);

        res.status(201).json({ id: snapshot.id });
    } catch (error) {
        console.log('Insert error: ', error.message);
        res.sendStatus(500);
    }
});

exports.api = functions.https.onRequest(app);