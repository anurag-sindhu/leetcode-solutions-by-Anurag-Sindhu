// const EventEmitter = require('events');
var events = require('events');
class Server extends events {
    constructor(client) {
        super();
        client.on('input', function (...object) {
            this.emit('output', "Hi There;")
            console.log(...object);
        });
        return this;
    }

}

// funcs.get = function () {
//     setTimeout(function () {
//         printEmitter.emit('eventOne', 'anurag', "sandhu");
//         // return "Hi Anurag";
//     }, 1000);
//     // return "Anurag Sandhu"
// };

module.exports = function (client) {
    new Server(client);
}
