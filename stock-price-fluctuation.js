function firstWay() {
  var StockPrice = function () {
    this.obj = {};
    this.cur = {};
    this.min = {};
    this.max = {};
  };

  StockPrice.prototype.update = function (timestamp, price) {
    this.obj[timestamp] = price;
    this.cur[timestamp] = price;

    this.max[timestamp] = price;
    this.min[timestamp] = price;

    return null;
  };

  StockPrice.prototype.current = function () {
    return this.cur[Math.max(...Object.keys(this.cur))];
  };

  StockPrice.prototype.maximum = function () {
    return Math.max(...Object.values(this.max));
  };

  StockPrice.prototype.minimum = function () {
    return Math.min(...Object.values(this.min));
  };
}

var StockPrice = function () {
  this.obj = {};
  this.cur = 0;
  this.min = {};
  this.max = {};
};

StockPrice.prototype.update = function (timestamp, price) {
  this.obj[timestamp] = price;
  if (this.cur < timestamp) {
    this.cur = timestamp;
  }
  this.cur[timestamp] = price;

  this.max[timestamp] = price;
  this.min[timestamp] = price;

  return null;
};

StockPrice.prototype.current = function () {
  return this.obj[this.cur];
};

StockPrice.prototype.maximum = function () {
  return Math.max(...Object.values(this.max));
};

StockPrice.prototype.minimum = function () {
  return Math.min(...Object.values(this.min));
};

var obj = new StockPrice();
let operations = [
  'StockPrice',
  'update',
  'update',
  'current',
  'maximum',
  'update',
  'maximum',
  'update',
  'minimum'
];
let values = [[], [1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []];

//[null, null, null, 5, 10, null, 5, null, 2]
for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
}
operations = [
  'StockPrice',
  'update',
  'maximum',
  'current',
  'minimum',
  'maximum',
  'maximum',
  'maximum',
  'minimum',
  'minimum',
  'maximum',
  'update',
  'maximum',
  'minimum',
  'update',
  'maximum',
  'minimum',
  'current',
  'maximum',
  'update',
  'minimum',
  'maximum',
  'update',
  'maximum',
  'maximum',
  'current',
  'update',
  'current',
  'minimum',
  'update',
  'update',
  'minimum',
  'minimum',
  'update',
  'current',
  'update',
  'maximum',
  'update',
  'minimum'
];
values = [
  [],
  [38, 2308],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [47, 7876],
  [],
  [],
  [58, 1866],
  [],
  [],
  [],
  [],
  [43, 121],
  [],
  [],
  [40, 5339],
  [],
  [],
  [],
  [32, 5339],
  [],
  [],
  [43, 6414],
  [49, 9369],
  [],
  [],
  [36, 3192],
  [],
  [48, 1006],
  [],
  [53, 8013],
  []
];
for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
}
console.log('object');
