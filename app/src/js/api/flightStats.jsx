// import axios from 'axios'
//
// //Makes a variable that cannot be altered. Naming convention for const is upper-case with underscores to separate words
// const FLIGHT_URL = 'https://commut-api.herokuapp.com/flightstats/?departureAirport='
//
// //
// module.exports = {
//   getDelay: function (departureAirport) {
//     var encodedLocation = encodeURIComponent(departureAirport);
//     //when you use the backtick, you can inject variables inside the string using the dollar sign and curly braces syntax; everything within the dollar sign and curly braces gets convereted into regular javascript
//     var requestUrl = `${FLIGHT_URL}${encodedLocation}`
//     //these are called query strings
//
//     //axios.get takes in a URL and fetches it, bringing you back the results
//     return axios.get(requestUrl).then(function (res) {
//       if (res.data.cod && res.data.message) {
//         throw new Error(res.data.message);
//       } else {
//         return res.data.normalizedScore;
//       }
//     }, function (res) {
//       throw new Error(res.data.message);
//     });
//   }
// }
