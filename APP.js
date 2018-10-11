"use strict";

var weatherCond = new XMLHttpRequest();
var weatherFore = new XMLHttpRequest();

var cObj;
var fObj;

weatherCond.open("GET", 'http://api.wunderground.com/api/755339b2e20f5854/conditions/lang:PL/q/Poland/Warsaw.json', true);
weatherCond.responseType = 'text';
weatherCond.send(null);

weatherCond.onload = function () {
    if (weatherCond.status === 200) {
        cObj = JSON.parse(weatherCond.responseText);

        document.getElementById('location').innerHTML = cObj.current_observation.display_location.full;
        document.getElementById('weather').innerHTML = cObj.current_observation.weather;
        document.getElementById('temperature').innerHTML = cObj.current_observation.temp_c + ' C';
    }
};

weatherFore.open("GET", 'http://api.wunderground.com/api/755339b2e20f5854/forecast/lang:PL/q/autoip.json', true);
weatherFore.responseType = 'text';
weatherFore.send(null);

weatherFore.onload = function () {
    if (weatherFore.status === 200) {
        fObj = JSON.parse(weatherFore.responseText);
        document.getElementById('txtmixture').innerHTML = fObj.forecast.txt_forecast.forecastday["0"].fcttext_metric;
        document.getElementById('daytemp').innerHTML = fObj.forecast.simpleforecast.forecastday[1].date.weekday;
        document.getElementById('daytwo').innerHTML = fObj.forecast.simpleforecast.forecastday[1].high.celsius;
        document.getElementById('dayimg').src = fObj.forecast.simpleforecast.forecastday[1].icon_url;

        document.getElementById('daytemp2').innerHTML = fObj.forecast.simpleforecast.forecastday[2].date.weekday;
        document.getElementById('daytwo2').innerHTML = fObj.forecast.simpleforecast.forecastday[2].high.celsius;
        document.getElementById('dayimg2').src = fObj.forecast.simpleforecast.forecastday[2].icon_url;

        document.getElementById('daytemp3').innerHTML = fObj.forecast.simpleforecast.forecastday[3].date.weekday;
        document.getElementById('daytwo3').innerHTML = fObj.forecast.simpleforecast.forecastday[3].high.celsius;
        document.getElementById('dayimg3').src = fObj.forecast.simpleforecast.forecastday[3].icon_url;
    }
};