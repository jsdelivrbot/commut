import axios from 'axios'

const FLIGHT_URL = 'https://commut-api.herokuapp.com/gates/?'

module.exports = {
  getGetDepartureTerminal: function (carrierCode, flightNumber) {
    var encodedCarrierCode = encodeURIComponent(carrierCode);
    var encodedFlightNumber = encodeURIComponent(flightNumber);

    var requestUrl = `${FLIGHT_URL}carrierCode=${encodedCarrierCode}&flightNumber=${encodedFlightNumber}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
      } else {
        return res.data.departureTerminal;
      }
    }, function (res) {
    });
  }
}
