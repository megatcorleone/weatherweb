const request = require('request');
const argv = require('yargs').argv;

let apiKey = '6f7421152f141c7c74a439b6b1078c61';
let city = argv.c || 'kuala lumpur';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);

    let weather = JSON.parse(body)

    let message = `It's ${weather.main.temp} degrees in
                   ${weather.name}!`;
    console.log(message);
  }


});
