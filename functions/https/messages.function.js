const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();

const db = admin.firestore();

// POST /api/messages
// Create a new message, get its sentiment using Google Cloud NLP,
// and categorize the sentiment before saving.
app.post('/api/messages', async (req, res) => {
    const _body = req.body;

    console.log(`ANALYZING MESSAGE: "${JSON.stringify(_body)}"`);

    try {
        //   const results = await client.analyzeSentiment({
        //     document: { content: message, type: 'PLAIN_TEXT' }
        //   });

        //   const category = categorizeScore(results[0].documentSentiment.score);
        //   const data = {message: message, sentiment: results[0], category: category};

        //   await admin.database().ref(`/users/${req.user.uid}/messages`).push(message);

        const snapshot = await db.collection(`/messages`).add(_body);

        res.status(201).json({ id: snapshot.id });
    } catch (error) {
        console.log('Error detecting sentiment or saving message', error.message);
        res.sendStatus(500);
    }
});

// GET /api/messages?category={category}
// Get all messages, optionally specifying a category to filter on
app.get('/api/messages', async (req, res) => {
    //const category = req.query.category;
    let query = db.collection(`/messages`);

    // if (category && ['positive', 'negative', 'neutral'].indexOf(category) > -1) {
    //   // Update the query with the valid category
    //   query = query.orderByChild('category').equalTo(category);
    // } else if (category) {
    //   res.status(404).json({errorCode: 404, errorMessage: `category '${category}' not found`});
    //   return;
    // }
    try {
        const snapshot = await query.get();
        let messages = [];
        snapshot.forEach((childSnapshot) => {
            messages.push({ key: childSnapshot.key, message: childSnapshot.data() });
        });

        res.status(200).json(messages);
    } catch (error) {
        console.log('Error getting messages', error.message);
        res.sendStatus(500);
    }
});

// GET /api/message/{messageId}
// Get details about a message
app.get('/api/messages/:messageId', async (req, res) => {
    const messageId = req.params.messageId;

    console.log(`LOOKING UP MESSAGE "${messageId}"`);

    try {
        const snapshot = await db.collection(`messages`).doc(messageId).get();

        if (!snapshot.exists) {
            return res.status(404).json({ errorCode: 404, errorMessage: `message '${messageId}' not found` });
        }
        res.set('Cache-Control', 'private, max-age=300');
        return res.status(200).json(snapshot.data());
    } catch (error) {
        console.log('Error getting message details', messageId, error.message);
        return res.sendStatus(500);
    }
});


exports.api = functions.https.onRequest(app);

// exports.add = functions.https.onRequest(async (req, res) => {
//     // Grab the text parameter.
//     const original = req.query.text;
//     console.log(original);
//     // Push the new message into the Realtime Database using the Firebase Admin SDK.
//     const snapshot = await db.collection('/messages').add({text: original});
//     // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//     res.redirect(303, snapshot.id.toString());
//   });