var express = require('express');
var app = express();
var PORT = 3200;
var events = require('events');
let client = new events();
let server = require('./service')(client);
client.emit('input', "anurag", "anurag", "anurag", "anurag", "anurag");
server.on('output', function (output) {
    console.log("object")
    res.status(200).send(output);
});
app.get('/', function (req, res) {
    client.emit('input', "anurag", "anurag", "anurag", "anurag", "anurag");
    server = require('./service')(client);
    server.on('output', function (output) {
        console.log("object")
        res.status(200).send(output);
    });
});

app.listen(PORT, function () {
    console.log('Server is running on PORT:', PORT);
});
module.exports = eventEmitter;