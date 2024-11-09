/**
 * @param {number} n
 */
var SeatManager = function (n) {
  this.lowestAvailableSeatIndex = 0;
  this.vacatedAvailableSeatIndex = [];
  return null;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  let indexToReserve = null;
  if (this.vacatedAvailableSeatIndex.length) {
    if (this.vacatedAvailableSeatIndex.length === 1) {
      indexToReserve = this.vacatedAvailableSeatIndex.pop();
    } else {
      indexToReserve = this.vacatedAvailableSeatIndex.sort((a, b) => b - a).pop();
    }
  } else {
    indexToReserve = this.lowestAvailableSeatIndex;
    this.lowestAvailableSeatIndex++;
  }
  return indexToReserve + 1;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  this.vacatedAvailableSeatIndex.push(seatNumber - 1);
  return null;
};

let keys = null;
let values = null;
let obj = null;

keys = [
  'SeatManager',
  'reserve',
  'unreserve',
  'reserve',
  'reserve',
  'reserve',
  'unreserve',
  'reserve',
  'unreserve',
  'reserve',
  'unreserve'
];
values = [[4], [], [1], [], [], [], [2], [], [1], [], [2]];
obj = new SeatManager();
for (let index = 1; index < keys.length; index++) {
  console.log(obj[keys[index]](values[index][0]));
  //[null,1,null,1,2,3,null,2,null,1,null]
  //[null,1,null,1,2,3,null,3,null,3,null]
}

keys = [
  'SeatManager',
  'reserve',
  'reserve',
  'unreserve',
  'reserve',
  'reserve',
  'reserve',
  'reserve',
  'unreserve'
];
values = [[5], [], [], [2], [], [], [], [], [5]];
obj = new SeatManager();
for (let index = 1; index < keys.length; index++) {
  console.log(obj[keys[index]](values[index][0]));
}
