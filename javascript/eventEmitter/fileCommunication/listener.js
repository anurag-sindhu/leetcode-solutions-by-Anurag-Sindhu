//secondFile.js

var events = require('events');
var em = new events.EventEmitter();
var firstFile = require('./emitter');
var firstFileEmitter = firstFile.emitter;
firstFile.saveScheme();


firstFileEmitter.on('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});
