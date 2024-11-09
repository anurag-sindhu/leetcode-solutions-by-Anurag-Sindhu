const configNotes = {
  20: 0,
  50: 1,
  100: 2,
  200: 3,
  500: 4
};

var ATM = function () {
  this.notes = [0, 0, 0, 0, 0];
};

ATM.prototype.deposit = function (banknotesCount) {
  for (let childIndex = 0; childIndex < banknotesCount.length; childIndex++) {
    this.notes[childIndex] += banknotesCount[childIndex];
  }
};

ATM.prototype.withdraw = function (amount) {
  const fiveParsed = parseInt(amount / 500);
  if (fiveParsed && fiveParsed <= this.notes[4]) {
    amount -= fiveParsed * 500;
    this.notes[4] -= fiveParsed;
  }
  if (configNotes[amount] || configNotes[amount] === 0) {
    if (twoParsed <= this.notes[3]) {
    }
  }
  const twoParsed = parseInt(amount / 200);
  if (twoParsed && twoParsed <= this.notes[3]) {
    amount -= twoParsed * 200;
    this.notes[3] -= twoParsed;
  }
  const oneParsed = parseInt(amount / 100);
  if (oneParsed && oneParsed <= this.notes[2]) {
    amount -= oneParsed * 100;
    this.notes[2] -= oneParsed;
  }
  const fiftyParsed = parseInt(amount / 50);
  if (fiftyParsed && fiftyParsed <= this.notes[1]) {
    amount -= fiftyParsed * 50;
    this.notes[1] -= fiftyParsed;
  }
  const twentyParsed = parseInt(amount / 20);
  if (twentyParsed && twentyParsed <= this.notes[0]) {
    amount -= twentyParsed * 20;
    this.notes[0] -= twentyParsed;
  }
  if (amount) {
    if (fiveParsed) {
      this.notes[4] += fiveParsed;
    }
    if (twoParsed) {
      this.notes[3] += twoParsed;
    }
    if (oneParsed) {
      this.notes[2] += oneParsed;
    }
    if (fiftyParsed) {
      this.notes[1] += fiftyParsed;
    }
    if (twentyParsed) {
      this.notes[0] += twentyParsed;
    }
    return -1;
  }
  return [twentyParsed, fiftyParsed, oneParsed, twoParsed, fiveParsed];
};

let obj;
let operations;
let values;

obj = new ATM();
operations = ['ATM', 'deposit', 'withdraw', 'deposit', 'withdraw', 'withdraw'];
values = [[], [[0, 0, 1, 2, 1]], [600], [[0, 1, 0, 1, 1]], [600], [550]];

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
  //[-1,null,null,null,null,1,null,2]
}
