const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require("axios");

const express = require('express');
const app = express();

const db = admin.firestore();

exports.scheduled = functions.pubsub.schedule('00 1 * * *')
  .timeZone('europe/rome') // Users can choose timezone - default is America/Los_Angeles
  .onRun(async (context) => {
    try {

        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Nerviano&units=metric&APPID=b985e8aece721f240b9c9871cf128c09');
        const data = response.data;
        console.log(data);
        
    } catch (error) {
        console.log('Error getting messages', error.message);
    }
    console.log('scheduledWeather run');
  return null;
});
