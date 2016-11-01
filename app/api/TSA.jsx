// var axios = require('axios');
//
//
// //const variables cannot be changed, which makes them useful here
// const TSA_URL = 'http://apps.tsa.dhs.gov/MyTSAWebService/GetTSOWaitTimes.ashx?&output=json';
//
// module.exports = {
//   getTSA: function (departureAirport) {
//     var encodedDepartureAirport = encodeURIComponent(departureAirport);
//     var requestUrl = '${TSA_URL}&q=${encodedDepartureAirport}';
//
//     //axios fetches URL and gives you back results
//     return axios.get(requestUrl).then(function () {
//       if (res.data.cod && res.data.message) {
//         throw new Error(res.data.message);
//       } else {
//         return res.data.main.departureAirport;
//       }
//     }, function (res) {
//       throw new Error(res.data.message);
//     });
//   }
// }
