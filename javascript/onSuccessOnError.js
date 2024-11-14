(function () {
  // function somewhere in father-controller.js
  var makePromiseWithSon = function () {
    // This service's function returns a promise, but we'll deal with that shortly
    SonService.getWeather()
    // then() called when son gets back
        .then(function (data) {
          // promise fulfilled
          if (data.forecast === 'good') {
            prepareFishingTrip();
          } else {
            prepareSundayRoastDinner();
          }
        }, function (error) {
          // promise rejected, could log the error with: console.log('error', error);
          prepareSundayRoastDinner();
        });
  };
})()
