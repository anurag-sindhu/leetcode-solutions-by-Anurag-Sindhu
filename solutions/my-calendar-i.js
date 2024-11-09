var MyCalendar = function () {
  this.engaged = {};
};

MyCalendar.prototype.book = function (start, end) {
  if (this.engaged[start] || this.engaged[end]) {
    return false;
  }
  for (let index = start + 1; index < end; index++) {
    this.engaged[index] = true;
  }
  return true;
};

let obj;
let operations;
let values;

obj = new MyCalendar();
operations = ['MyCalendar', 'book', 'book', 'book'];
values = [[], [10, 20], [15, 25], [20, 30]];

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
  //[null, true, false, true]
}
