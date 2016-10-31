// In a promise, although both resolve and reject are called, a promise can be used once. So it's great because it forces code to work as expected


function getCityPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(30);
      reject('City not found');
    }, 1000);
  });
}

getCityPromise('Portland').then(function (waittime) {
  console.log('promise success', waittime);
}, function (err) {
  console.log('promise error', err);
})
