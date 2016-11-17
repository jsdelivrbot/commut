import axios from 'axios'

//Makes a variable that cannot be altered. Naming convention for const is upper-case with underscores to separate words
const GMAP_URL = 'https://commut-api.herokuapp.com/google?';

//
module.exports = {
  getGmap: function (startingAddress, departureAirport) {
    var encodedLocation = encodeURIComponent(startingAddress);
    var encodedDeparture = encodeURIComponent(departureAirport);

    var requestUrl = `${GMAP_URL}origin=${encodedLocation}&destination=${encodedDeparture}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.duration;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
