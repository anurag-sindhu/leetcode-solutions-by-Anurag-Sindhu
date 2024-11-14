var events = require('events');
const readLine = require('readline');

let client = new events();
let server = require('./server')(client);

let rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (input) => {
    console.log(input, "input");
    console.log({ input });
    client.emit('input', "anurag", "anurag", "anurag", "anurag", "anurag")
});

client.on('input', function () {
    console.log("hereererre")
    client.emit('input', "hereererre", "hereererre", "anurag", "anurag", "anurag")
});
