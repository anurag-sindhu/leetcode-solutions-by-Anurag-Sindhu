var events = require('events');
class Server extends events {
    constructor(client) {
        super();
        client.on('input', function (...object) {
            console.log(...object)
        });
    }

}
module.exports = function (client) {
    new Server(client);
}
