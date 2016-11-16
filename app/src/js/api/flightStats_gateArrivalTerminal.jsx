import axios from 'axios'

//Makes a variable that cannot be altered. Naming convention for const is upper-case with underscores to separate words
const FLIGHT_URL = 'https://commut-api.herokuapp.com/gates/'

//
module.exports = {
  getGetArrivalTerminal: function (carrierCode, flightNumber) {
    var encodedCarrierCode = encodeURIComponent(carrierCode);
    var encodedFlightNumber = encodeURIComponent(flightNumber);
    var requestUrl = `${FLIGHT_URL}?carrierCode=${encodedCarrierCode}?flightNumber=${encodedFlightNumber}`

    //axios.get takes in a URL and fetches it, bringing you back the results
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.arrivalTerminal;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
