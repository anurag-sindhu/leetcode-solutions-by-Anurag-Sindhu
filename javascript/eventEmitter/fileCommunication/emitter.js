var events = require('events');
var em = new events.EventEmitter();

exports.saveScheme = function () {
    em.emit('FirstEvent', 'Test event emitter');
};

em.on('FirstEvent', function () {
    console.log('First subscriber: ' + 'extras/js/eventEmitter/fileCommunication/emitter.js');
});

module.exports.emitter = em;