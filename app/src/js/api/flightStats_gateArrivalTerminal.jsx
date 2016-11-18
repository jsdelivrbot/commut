import axios from 'axios'

const FLIGHT_URL = 'https://commut-api.herokuapp.com/gates/?'

module.exports = {
  getGetArrivalTerminal: function (carrierCode, flightNumber) {
    var encodedCarrierCode = encodeURIComponent(carrierCode);
    var encodedFlightNumber = encodeURIComponent(flightNumber);

    var requestUrl = `${FLIGHT_URL}carrierCode=${encodedCarrierCode}&flightNumber=${encodedFlightNumber}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        return "-";
      } else {
        return res.data.arrivalTerminal;
      }
    }, function (res) {
        return "-";
    });
  }
}
