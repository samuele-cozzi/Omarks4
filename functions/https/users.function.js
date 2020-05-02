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
                uid: childSnapshot.data().uid,
                providerId: childSnapshot.data().providerId
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

// GET /api/users/{userId}
// Get details about a user
app.get('/api/users/:userId', async (req, res) => {
    const userId = req.params.userId;

    console.log(`LOOKING UP MESSAGE "${userId}"`);

    try {
        const user = await getUser(userId);

        const setting = await getSetting(userId);
        user.settings = setting;

        const provider = await getProvider(user.providerId);
        user.provider = provider;

        return res.status(200).json(user);
    } catch (error) {
        console.log('Error getting message details', messageId, error.message);
        return res.sendStatus(500);
    }
});

async function getUser(user_id) {
    try {
        //console.log(user_id);
        let querySetting = db.collection(`/users`).doc(user_id);
        const snapshotSetting = await querySetting.get();
        return snapshotSetting.data();

    } catch (error) {
        console.log('Error getting setting', error.message);
    }
}

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

async function getProvider(provider_id) {
    try {
        //console.log(provider_id);
        let querySetting = db.collection(`/providers`).doc(provider_id);
        const snapshotSetting = await querySetting.get();
        return snapshotSetting.data();

    } catch (error) {
        console.log('Error getting setting', error.message);
    }
}

exports.api = functions.https.onRequest(app);