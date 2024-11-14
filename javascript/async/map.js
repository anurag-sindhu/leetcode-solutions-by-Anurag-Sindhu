let async = require('async');
var AsyncSquaringLibrary = {
    squareExponent: 2,
    square: function (number, callback) {
        var result = Math.pow(number, this.squareExponent);
        setTimeout(function () {
            callback(null, result);
        }, 200);
    }
};

async.map([1, 2, 3], AsyncSquaringLibrary.square, function (err, result) {
    console.log(result);
});

async.map([1, 2, 3], AsyncSquaringLibrary.square.bind(AsyncSquaringLibrary), function (err, result) {
    console.log(result);
});
console.log("object")