var async = require('async');
async.auto({
    get_data: function (callback) {
        setTimeout(function () {
            console.log('in get_data');
            callback(null, 'data', 'converted to array');
        }, 1000);
    },
    make_folder: function (callback) {
        setTimeout(function () {
            console.log('in make_folder');
            callback(null, 'folder');
        }, 500);
    },
    write_file: ['get_data', 'make_folder', function (results, callback) {
        console.log('in write_file', JSON.stringify(results));
        // once there is some data and the directory exists,
        // write the data to a file in the directory
        callback(null, 'filename');
    }],
    email_link: ['write_file', function (results, callback) {
        console.log('in email_link', JSON.stringify(results));
        // once the file is written let's email a link to it...
        // results.write_file contains the filename returned by write_file.
        callback(null, { 'file': results.write_file, 'email': 'user@example.com' });
    }],
    last: function (callback) {
        setTimeout(function () {
            console.log('in last');
            callback(null, 'last');
        }, 0);
    }
}, function (err, results) {
    console.log('err = ', err);
    console.log('results = ', results);
});



// async.auto({
//     1: function (callback) {
//         setTimeout(function () {
//             callback(null, 'one');
//         }, 500);
//     },
//     12: ['data', function (results, callback) {
//         console.log(results.data);
//         setTimeout(function () {
//             callback(null, 'three', results.data);
//         }, 1000);
//     }],
//     2: function (callback) {
//         setTimeout(function () {
//             callback(null, 'three');
//         }, 1000);
//     },
//     3: function (callback) {
//         setTimeout(function () {
//             callback(null, 'two');
//         }, 500);
//     }
// },
//     function (err, result) {
//         console.log('The result is ', result);
//     });