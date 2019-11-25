const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require("axios");

const express = require('express');
const app = express();

const db = admin.firestore();

// GET /api/messages?category={category}
// Get all messages, optionally specifying a category to filter on
app.get('/api/weather', async (req, res) => {
    //const category = req.query.category;
    //let query = db.collection(`/messages`);

    try {

        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Nerviano&units=metric&APPID=b985e8aece721f240b9c9871cf128c09');
        const data = response.data;
        console.log(data);
        
        res.status(200).json(data);
    } catch (error) {
        console.log('Error getting messages', error.message);
        res.sendStatus(500);
    }
});

exports.api = functions.https.onRequest(app);