var axios = require('axios');

//Makes a variable that cannot be altered. Naming convention for const is upper-case with underscores to separate words
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=51807f5a50c3dd6563dfb8063fb5d626@units=imperial';

//
module.exports = {
  getTemp: function (startingAddress) {
    var encodedLocation = encodeURIComponent(startingAddress);
    //when you use the backtick, you can inject variables inside the string using the dollar sign and curly braces syntax; everything within the dollar sign and curly braces gets convereted into regular javascript
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    //these are called query strings

    //axios.get takes in a URL and fetches it, bringing you back the results
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
