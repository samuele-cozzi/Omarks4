const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const people = google.people('v1');
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
        refresh_token: googleCredential.contacts.refresh_token
    });

    return oAuth2Client;
}






app.get('/api/contacts/:contactId', async (req, res) => {
    try {
        const oAuth2Client = getOauthClient();

        const response = await people.people.get({
            auth: oAuth2Client,
            resourceName: 'people/' + req.param("contactId"),
            personFields: 'names,emailAddresses'
        });

        console.log(JSON.stringify(response));
        res.status(200).json(response);
    } catch (error) {
        console.log('Error find list of events', error.message);
        res.sendStatus(500);
    }

});

app.get('/api/contacts', async (req, res) => {
    try {
        const oAuth2Client = getOauthClient();

        const response = await people.people.connections.list({
            auth: oAuth2Client,
            resourceName: 'people/me',
            personFields: 'names,emailAddresses'

        });

        console.log(JSON.stringify(response));
        res.status(200).json(response);
    } catch (error) {
        console.log('Error find list of events', error.message);
        res.sendStatus(500);
    }

});

exports.api = functions.https.onRequest(app);