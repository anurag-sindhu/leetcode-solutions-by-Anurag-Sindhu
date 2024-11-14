let async = require("async");
async.every(['file1', 'file2', 'file3'], function (filePath, callback) {
    console.log({ filePath })
    callback(null, filePath);
}, function (err, result) {
    console.log({ result })
});