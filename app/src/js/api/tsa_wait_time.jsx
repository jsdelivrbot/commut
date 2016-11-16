// import axios from 'axios'
//
// //Makes a variable that cannot be altered. Naming convention for const is upper-case with underscores to separate words
// const TSA_URL2 = 'https://commut-api.herokuapp.com/WaitTime?';
//
// //
// module.exports = {
//   getWaitTime: function (departureAirport) {
//     var encodedDeparture = encodeURIComponent(departureAirport);
//     //when you use the backtick, you can inject variables inside the string using the dollar sign and curly braces syntax; everything within the dollar sign and curly braces gets convereted into regular javascript
//     var requestUrl = `${TSA_URL2}${encodedDeparture}`;
//     //these are called query strings
//     // console.log(requestUrl);
//     //axios.get takes in a URL and fetches it, bringing you back the results
//     return axios.get(requestUrl).then(function (res) {
//       if (res.data.cod && res.data.message) {
//         throw new Error(res.data.message);
//       } else {
//         return res.data.WaitTime;
//       }
//     }, function (res) {
//       throw new Error(res.data.message);
//     });
//   }
// }
