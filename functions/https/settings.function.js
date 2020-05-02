const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();

const db = admin.firestore();

// GET /api/users/{userId}
// Get details about a user
app.get('/api/users/:userId/settings', async (req, res) => {
    const userId = req.params.userId;

    console.log(`LOOKING UP MESSAGE "${userId}"`);

    try {
        const setting = await getSetting(userId);

        return res.status(200).json(setting);
    } catch (error) {
        console.log('Error getting message details', messageId, error.message);
        return res.sendStatus(500);
    }
});

// GET /api/users/{userId}
// Get details about a user
app.post('/api/users/:userId/tokens', async (req, res) => {
    const userId = req.params.userId;

    const _body = req.body;

    console.log(`ANALYZING MESSAGE: "${JSON.stringify(_body)}"`);

    const access_token = _body.access_token;
    const refresh_token = _body.refresh_token;

    try {
        const snapshot = await  db.collection('/settings').doc(userId).set({
            access_token: access_token,
            refresh_token: refresh_token
        }, { merge: true });

        res.status(201).json({ id: snapshot.id });

       

    } catch (error) {
        console.log('Error getting message details', messageId, error.message);
        return res.sendStatus(500);
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