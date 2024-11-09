var MyHashMap = function () {
  this.obj = {};
  return null;
};

MyHashMap.prototype.put = function (key, value) {
  this.obj[key] = value;
  return null;
};

MyHashMap.prototype.remove = function (key) {
  delete this.obj[key];
  return null;
};

MyHashMap.prototype.get = function (key) {
  return this.obj[key] || this.obj[key] === 0 ? this.obj[key] : -1;
};

let obj;
let operations;
let values;

obj = new MyHashMap();
operations = ['MyHashMap', 'put', 'put', 'get', 'get', 'put', 'get', 'remove', 'get'];
values = [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]];

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
  //[-1,null,null,null,null,1,null,2]
}
