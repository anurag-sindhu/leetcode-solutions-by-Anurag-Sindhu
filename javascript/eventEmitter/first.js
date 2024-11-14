let EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('eventOne', c1);
myEmitter.on('eventOne', c2);
myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));
myEmitter.emit('eventOnce');
myEmitter.emit('eventOnce');
myEmitter.emit('eventOne');















function c1() {
  console.log('an event occurred!');
}

function c2() {
  console.log('yet another event occurred!');
}
