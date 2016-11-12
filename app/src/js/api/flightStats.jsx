import axios from 'axios'

//Makes a variable that cannot be altered. Naming convention for const is upper-case with underscores to separate words
const FLIGHT_URL = 'https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/'

const FLIGHT_URL2 = '?appId=2f2f3e48&appKey=5118cbf9ab0d0478039292e64eddfe3a';

//
module.exports = {
  getDelay: function (departureAirport) {
    var encodedLocation = encodeURIComponent(departureAirport);
    //when you use the backtick, you can inject variables inside the string using the dollar sign and curly braces syntax; everything within the dollar sign and curly braces gets convereted into regular javascript
    var requestUrl = `${FLIGHT_URL}${encodedLocation}${FLIGHT_URL2}`;
    //these are called query strings

    //axios.get takes in a URL and fetches it, bringing you back the results
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.delayIndexes[1].normalizedScore;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
