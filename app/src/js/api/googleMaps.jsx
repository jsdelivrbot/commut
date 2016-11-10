import axios from 'axios'

//Makes a variable that cannot be altered. Naming convention for const is upper-case with underscores to separate words
const GMAP_URL = 'https://maps.googleapis.com/maps/api/directions/json?';

//
module.exports = {
  getGmap: function (startingAddress, departureAirport) {
    var encodedLocation = encodeURIComponent(startingAddress);
    var encodedDeparture = encodeURIComponent(departureAirport);
    //when you use the backtick, you can inject variables inside the string using the dollar sign and curly braces syntax; everything within the dollar sign and curly braces gets convereted into regular javascript
    var requestUrl = `${GMAP_URL}origin=${encodedLocation}&destination=${encodedDeparture}&key=AIzaSyAqpWjz6H7emmTezZQsDs3aqcovG5fqm4w`;
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
