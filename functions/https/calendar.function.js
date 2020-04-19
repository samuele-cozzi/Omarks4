const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar('v3');
const googleCredential = require('../config/client_secret.json');


const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();

const db = admin.firestore();

function getOauthClient(){
    const oAuth2Client = new OAuth2(
        googleCredential.web.client_id,
        googleCredential.web.client_secret,
        googleCredential.web.redirect_uris[0]
    );

    oAuth2Client.setCredentials({
        refresh_token: googleCredential.calendar.refresh_token
    });
    //oAuth2Client.refreshToken = googleCredential.refresh_token;

    return oAuth2Client;
}






app.get('/api/calendars/:calendarId/events', async (req, res) => {
    try {
        const oAuth2Client = getOauthClient();

        const response = await calendar.events.list({
            auth: oAuth2Client,
            calendarId: req.param("calendarId"),
            timeMin: (new Date()).toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
            prettyPrint: true
        });

        console.log(JSON.stringify(response));
        res.status(200).json(response);
    } catch (error) {
        console.log('Error find list of events', error.message);
        res.sendStatus(500);
    }

});

app.get('/api/calendars', async (req, res) => {
    try {
        const oAuth2Client = getOauthClient();

        const response = await calendar.calendarList.list({
            auth: oAuth2Client,
            calendarId: 'samuele.cozzi@gmail.com',
            // timeMin: (new Date()).toISOString(),
            // maxResults: 10,
            // singleEvents: true,
            // orderBy: 'startTime',
            // prettyPrint: true
        });

        console.log(JSON.stringify(response));
        res.status(200).json(response);
    } catch (error) {
        console.log('Error find list of events', error.message);
        res.sendStatus(500);
    }

});

exports.api = functions.https.onRequest(app);