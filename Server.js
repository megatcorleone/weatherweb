const express = require('express')
const bodyParser = require('body-parser');

const request = require('request');
const apiKey = '6f7421152f141c7c74a439b6b1078c61';

const app = express()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  var weather
  res.render('index', {
    weather: null
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// app.get('/', function (req, res) {
//
//     let city = req.body.city;
//     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
//
//   request(url, function (err, response, body) {
//       console.log(body)
//       if(err){
//         res.render('index', {weather: null, error: 'Error, please try again'});
//       } else {
//         let weather = JSON.parse(body)
//         console.log(123)
//         if(weather.main == undefined){
//           res.render('index', {weather: null, error: 'Error, please try again'});
//         } else {
//           let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//           res.render('index', {weather: weatherText, error: null});
//         }
//       }
//     });
// });

app.post('/', function (req, res) {

    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
      console.log(body)
      if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weather = JSON.parse(body)
        console.log(123)
        if(weather.main == undefined){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
          let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
          res.render('index', {weather: weatherText, error: null});
        }
      }
    });
});
