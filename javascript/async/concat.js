let async = require('async');
async.concat([1, 2, 3], hello, (err, result) => {
    if (err) throw err;
    console.log(result); // [1, 3]
});

function hello(time, callback) {
    setTimeout(function () {
        callback(time, null)
    }, time * 500);
}