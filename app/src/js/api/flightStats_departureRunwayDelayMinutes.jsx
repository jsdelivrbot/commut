import axios from 'axios'

const FLIGHT_URL = 'https://commut-api.herokuapp.com/delayTime/?'

module.exports = {
  getDepartureRunwayDelayMinutes: function (carrierCode, flightNumber) {
    var encodedCarrierCode = encodeURIComponent(carrierCode);
    var encodedFlightNumber = encodeURIComponent(flightNumber);

    var requestUrl = `${FLIGHT_URL}carrierCode=${encodedCarrierCode}&flightNumber=${encodedFlightNumber}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.departureRunwayDelayMinutes;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
