function flatAnArray(arr) {
  if (Array.isArray()) {
    const output = [];
    for (const iterator of arr) {
      if (Array.isArray(iterator)) {
        output.push(...flatAnArray(iterator));
      } else {
        output.push(iterator);
      }
    }
    return output;
  }
  return arr;
}

var NestedIterator = function (nestedList) {
  this.totalLength = nestedList.length;
  this.index = 0;
  this.array = nestedList;
};

NestedIterator.prototype.hasNext = function () {
  if (this.index < this.totalLength) {
    return true;
  }
  return false;
};

NestedIterator.prototype.next = function () {
  return flatAnArray(this.array[this.index++]);
};

const iterator = new NestedIterator([[1, 1], 2, [1, 1]]);
const res = [];
while (iterator.hasNext()) {
  res.push(iterator.next());
}
console.log({ res });
