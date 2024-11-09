const way1 = () => {
  var StockSpanner = function () {
    this.stock = [];
    this.rank = [];
    return null;
  };

  StockSpanner.prototype.next = function (price) {
    const stockLength = this.stock.length;
    const getRank = (stocks) => {
      let sum = 1;
      let currentRankIndex = stockLength - 1;
      while (stocks[currentRankIndex] <= stocks[stockLength]) {
        sum += this.rank[currentRankIndex];
        currentRankIndex = currentRankIndex - this.rank[currentRankIndex];
      }
      return sum;
    };
    this.stock.push(price);
    const rank = getRank(this.stock);
    this.rank.push(rank);
    return rank;
  };
};
var StockSpanner = function () {
  this.stock = [];
  this.rank = [];
  return null;
};

let events = null;
let values = null;
let obj = null;
obj = new StockSpanner();
events = ['StockSpanner', 'next', 'next', 'next', 'next', 'next', 'next', 'next'];
values = [[], [100], [80], [60], [70], [60], [75], [85]];
//[null, 1, 1, 1, 2, 1, 4, 6]
for (let index = 1; index < events.length; index++) {
  console.log(obj[events[index]](values[index][0]));
}
obj = new StockSpanner();
events = [
  'StockSpanner',
  'next',
  'next',
  'next',
  'next',
  'next',
  'next',
  'next',
  'next',
  'next',
  'next'
];
values = [[], [28], [14], [28], [35], [46], [53], [66], [80], [87], [88]];
//[null,1,1,3,4,5,6,7,8,9,10]
for (let index = 1; index < events.length; index++) {
  console.log(obj[events[index]](values[index][0]));
}
