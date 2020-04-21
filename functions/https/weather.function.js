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

    // try {

    //     const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Nerviano&units=metric&APPID=b985e8aece721f240b9c9871cf128c09');
    //     const data = response.data;
    //     console.log(data);

    //     //res.status(200).json(data);
    // } catch (error) {
    //     console.log('Error getting messages', error.message);
    //     //res.sendStatus(500);
    // }

    try {

        let query = db.collection(`/settings`);

        const snapshot = await db.collection(`/settings`).get();
        let users = [];
        snapshot.forEach((childSnapshot) => {
            users.push({ key: childSnapshot.id, data: childSnapshot.data() });
        });


        for (let index = 0; index < users.length; index++) {
            try {
                console.log('city: ' + users[index].data.city);

                if (users[index].data.city)  {
                    const weatherToday = await getWeather(users[index].data.city);
                    db.collection('settings').doc(users[index].key).collection('weather').doc('today').set(weatherToday);

                    const weatherForecast = await getWeatherForecast(users[index].data.city);

                    weatherForecast.forEach(forecast => {
                        //db.collection(`settings/${users[index].key}/weather`).doc(forecast.date).set(forecast);
                        db.collection('settings').doc(users[index].key).collection('weather').doc(forecast.date).set(forecast);
                    });
                }
            }
            catch (error) {
                console.log('Error getting messages', error.message);
                res.sendStatus(500);
            }

        }
        users.forEach(element => {

        });




        res.status(200).json("ok");
    }
    catch (error) {
        console.log('Error getting messages', error.message);
        res.sendStatus(500);
    }

    // var rows = [
    //     { 'createdDate': '3/11/2016', 'createdBy': 'Bob' },
    //     { 'createdDate': '3/12/2016', 'createdBy': 'Megan' },
    //     { 'createdDate': '3/12/2016', 'createdBy': 'Bob' },
    //     { 'createdDate': '3/13/2016', 'createdBy': 'Sam' },
    //     { 'createdDate': '3/11/2016', 'createdBy': 'Bob' },
    // ];

    // var occurences = rows.reduce(function (r, row) {
    //     r[row.createdBy] = ++r[row.createdBy] || 1;
    //     return r;
    // }, {});

    // //console.log(occurences);

    // var result = Object.keys(occurences).map(function (key) {
    //     return { key: key, value: occurences[key] };
    // });

    // //console.log(result);
});


async function getWeather(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=b985e8aece721f240b9c9871cf128c09`);
        //console.log(response.data);
        return response.data;

    } catch (error) {
        console.log('Error getting messages', error.message);
    }
}

async function getWeatherForecast(city) {
    try {
        let _forecast_arr = [];
        let _dayForecast = [];
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=b985e8aece721f240b9c9871cf128c09`);
        const data = response.data;
        for (let index = 0; index < data.list.length; index++) {
            const _date = formatDate(data.list[index].dt_txt);
            const element = {
                "date": _date,
                "datime": data.list[index].dt,
                "datetime_tx": data.list[index].dt_txt,
                "weather_id": data.list[index].weather[0].id,
                "weather_main": data.list[index].weather[0].main,
                "weather_icon": data.list[index].weather[0].icon,
                "value": data.list[index]
            };
            _forecast_arr.push(element);

        }

        let _forecastXday = _forecast_arr.reduce((r, a) => {
            r[a.date] = [...r[a.date] || [], a];
            return r;
        }, {});

        var _forecastXday_arr = Object.keys(_forecastXday).map(function (key) {
            return { key: key, value: _forecastXday[key] };
        });

        //console.log(_forecastXday_arr);

        for (let index = 0; index < _forecastXday_arr.length; index++) {
            const element = _forecastXday_arr[index].value.reduce(function (r, row) {
                r[row.weather_main] = ++r[row.weather_main] || 1;
                return r;
            }, {});

            var result = Object.keys(element).map(function (key) {
                return {
                    main: key,
                    count: element[key],
                    date: _forecastXday_arr[index].key,
                    day_forecast: _forecastXday_arr[index].value.find(e => e.weather_main === key),
                    hour_forecast: _forecastXday_arr[index].value
                };
            });

            let max_count = Math.max.apply(Math, result.map(function (o) { return o.count; }));
            _dayForecast.push(result.find(e => e.count === max_count));



        }

        return _dayForecast;
    } catch (error) {
        console.log('Error getting messages', error.message);
    }
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

exports.api = functions.https.onRequest(app);