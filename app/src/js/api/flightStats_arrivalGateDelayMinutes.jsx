import axios from 'axios'

const FLIGHT_URL = 'https://commut-api.herokuapp.com/delayTime/?'

module.exports = {
  getArrivalGateDelayMinutes: function (carrierCode, flightNumber) {
    var encodedCarrierCode = encodeURIComponent(carrierCode);
    var encodedFlightNumber = encodeURIComponent(flightNumber);

    var requestUrl = `${FLIGHT_URL}carrierCode=${encodedCarrierCode}&flightNumber=${encodedFlightNumber}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
      } else {
        return res.data.arrivalGateDelayMinutes;
      }
    }, function (res) {
      return "-";
    });
  }
}
