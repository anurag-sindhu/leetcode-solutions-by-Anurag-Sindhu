var MyHashSet = function () {
  this.obj = {};
  return null;
};

MyHashSet.prototype.add = function (key) {
  this.obj[key] = key;
  return null;
};

MyHashSet.prototype.remove = function (key) {
  delete this.obj[key];
  return null;
};

MyHashSet.prototype.contains = function (key) {
  return this.obj[key] || this.obj[key] === 0 ? true : false;
};

let obj;
let operations;
let values;

obj = new MyHashSet();
operations = [
  'MyHashSet',
  'add',
  'add',
  'contains',
  'contains',
  'add',
  'contains',
  'remove',
  'contains'
];
values = [[], [1], [2], [1], [3], [2], [2], [2], [2]];

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
  //[-1,null,null,null,null,1,null,2]
}
