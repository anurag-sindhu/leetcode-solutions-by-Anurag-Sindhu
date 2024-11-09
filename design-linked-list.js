var MyLinkedList = function () {
  this.list = null;
};

class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}

MyLinkedList.prototype.get = function (index, currentIndex = 0, list = this.list) {
  if (!list) {
    return -1;
  }
  if (index === currentIndex) {
    return list.val;
  } else {
    return this.get(index, currentIndex + 1, list.next);
  }
};

MyLinkedList.prototype.addAtHead = function (val, list = this.list) {
  const newNode = new Node(val);
  if (!list) {
    list = newNode;
  } else {
    newNode.next = list;
    list = newNode;
  }
  this.list = list;
  return list;
};

MyLinkedList.prototype.addAtTail = function (val, list = this.list) {
  if (!list) {
    list = new Node(val);
  } else {
    list.next = this.addAtTail(val, list.next);
  }
  this.list = list;
  return list;
};

MyLinkedList.prototype.addAtIndex = function (index, val, currentIndex = 0, list = this.list) {
  if (!list && index !== currentIndex) {
    return null;
  }
  const newNode = new Node(val);
  if (index === currentIndex) {
    if (list) {
      let stored = list;
      list = newNode;
      list.next = stored;
    } else {
      newNode.next = list;
      list = newNode;
    }
  } else if (!list) {
    list = newNode;
  } else {
    list.next = this.addAtIndex(index, val, currentIndex + 1, list.next);
  }
  this.list = list;
  return list;
};

MyLinkedList.prototype.deleteAtIndex = function (index, currentIndex = 0, list = this.list) {
  if (!list) {
    return null;
  }
  if (index === currentIndex) {
    list = list.next;
  } else {
    const res = this.deleteAtIndex(index, currentIndex + 1, list.next);
    list.next = res;
  }
  this.list = list;
  return list;
};

let obj;
let operations;
let values;

obj = new MyLinkedList();
operations = ['MyLinkedList', 'addAtIndex', 'get'];
values = [[], [1, 0], [0]];

for (let index = 1; index < operations.length; index++) {
  const res = obj[operations[index]](...values[index]);
  console.log(res);
  //[null,null,-1]
}

obj = new MyLinkedList();
operations = [
  'MyLinkedList',
  'addAtHead',
  'get',
  'addAtHead',
  'addAtHead',
  'deleteAtIndex',
  'addAtHead',
  'get',
  'get',
  'get',
  'addAtHead',
  'deleteAtIndex'
];
values = [[], [4], [1], [1], [5], [3], [7], [3], [3], [3], [1], [4]];

for (let index = 1; index < operations.length; index++) {
  const res = obj[operations[index]](...values[index]);
  console.log(res);
  //[null,null,-1,null,null,null,null,4,4,4,null,null]
}

obj = new MyLinkedList();
operations = ['MyLinkedList', 'addAtTail', 'get'];
values = [[], [1], [0]];

for (let index = 1; index < operations.length; index++) {
  const res = obj[operations[index]](...values[index]);
  console.log(res);
  // [null,null,null,null,null,null,null,null,4,null,null,null]
}

obj = new MyLinkedList();
operations = [
  'MyLinkedList',
  'addAtHead',
  'addAtTail',
  'addAtIndex',
  'get',
  'deleteAtIndex',
  'get'
];
values = [[], [1], [3], [1, 2], [1], [0], [0]];

for (let index = 1; index < operations.length; index++) {
  const res = obj[operations[index]](...values[index]);
  console.log(res);
  // [null,null,null,null,null,null,null,null,4,null,null,null]
}

obj = new MyLinkedList();
operations = ['MyLinkedList', 'addAtIndex', 'addAtIndex', 'addAtIndex', 'get'];
values = [[], [0, 10], [0, 20], [1, 30], [0]];

for (let index = 1; index < operations.length; index++) {
  const res = obj[operations[index]](...values[index]);
  console.log(res);
  // [null,null,null,null,20]
}

obj = new MyLinkedList();
operations = [
  'MyLinkedList',
  'addAtHead',
  'addAtHead',
  'addAtHead',
  'addAtIndex',
  'deleteAtIndex',
  'addAtHead',
  'addAtTail',
  'get',
  'addAtHead',
  'addAtIndex',
  'addAtHead'
];
values = [[], [7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]];

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
  // [null,null,null,null,null,null,null,null,4,null,null,null]
}

obj = new MyLinkedList();
operations = [
  'MyLinkedList',
  'addAtHead',
  'addAtTail',
  'addAtIndex',
  'get',
  'deleteAtIndex',
  'get'
];
values = [[], [1], [3], [1, 2], [1], [1], [1]];

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]));
  //   [null, null, null, null, 2, null, 3]
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
