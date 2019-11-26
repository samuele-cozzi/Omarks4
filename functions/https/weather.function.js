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
        
        //res.status(200).json(data);
    } catch (error) {
        console.log('Error getting messages', error.message);
        //res.sendStatus(500);
    }

    try {
        let _forecast_arr = [];
        let _dayForecast = []
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Nerviano&units=metric&APPID=b985e8aece721f240b9c9871cf128c09');
        const data = response.data;
        for (let index = 0; index < data.list.length; index++) {
            const _date = new Date(data.list[index].dt_txt).toDateString();
            const element = {
                "date": _date, 
                "datime": data.list[index].dt,
                "datetime_tx": data.list[index].dt_txt,
                "weather_id":data.list[index].weather[0].id, 
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
                    date: _forecastXday_arr[index].key , 
                    day_forecast: _forecastXday_arr[index].value.find(e => e.weather_main == key),
                    hour_forecast: _forecastXday_arr[index].value
                };
            });
            
            for (let index = 0; index < result.length; index++) {
                
                let best_day_forecast = _dayForecast.find(e => e.date == result[index].date && e.count >= result[index].count);

                console.log("result", result[0]);
                console.log("_dayForecast", _dayForecast);
                console.log("best_day", best_day_forecast);

                if(  best_day_forecast && best_day_forecast.length > 0 ){
                    best_day_forecast = result[index];
                }
                else
                {
                    _dayForecast.push(result[index]);
                }
                
            }
            
        }

        
        
        res.status(200).json(_dayForecast);
    } catch (error) {
        console.log('Error getting messages', error.message);
        res.sendStatus(500);
    }

    var rows = [
        { 'createdDate': '3/11/2016', 'createdBy': 'Bob' },
        { 'createdDate': '3/12/2016', 'createdBy': 'Megan' },
        { 'createdDate': '3/12/2016', 'createdBy': 'Bob' },
        { 'createdDate': '3/13/2016', 'createdBy': 'Sam' },
        { 'createdDate': '3/11/2016', 'createdBy': 'Bob' },
    ];
    
    var occurences = rows.reduce(function (r, row) {
        r[row.createdBy] = ++r[row.createdBy] || 1;
        return r;
    }, {});

    //console.log(occurences);
    
    var result = Object.keys(occurences).map(function (key) {
        return { key: key, value: occurences[key] };
    });
    
    //console.log(result);
});

exports.api = functions.https.onRequest(app);