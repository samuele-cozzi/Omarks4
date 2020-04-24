const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();

const db = admin.firestore();

app.get('/api/users', async (req, res) => {

    try {
        const snapshotUsers = await db.collection(`/users`).get();

        let users = [];

        snapshotUsers.forEach((childSnapshot) => {
            //console.log(childSnapshot);

            users.push({ 
                key: childSnapshot.key, 
                mail: childSnapshot.data().email, 
                uid: childSnapshot.data().uid
            });
        });

        for (let i = 0; i < users.length; i++) {
            const setting = await getSetting(users[i].uid);
            users[i].city = setting.city;
        }

        res.status(200).json(users);
    } catch (error) {
        console.log('Error getting users', error);
        res.sendStatus(500);
    }
});

async function getSetting(user_id) {
    try {
        //console.log(user_id);
        let querySetting = db.collection(`/settings`).doc(user_id);
        const snapshotSetting = await querySetting.get();
        return snapshotSetting.data();

    } catch (error) {
        console.log('Error getting setting', error.message);
    }
}

exports.api = functions.https.onRequest(app);