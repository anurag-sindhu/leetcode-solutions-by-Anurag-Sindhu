class Node {
  constructor(data, next = null) {
    this.val = data;
    this.next = next;
  }
}
class addSinglyLinkedList {
  constructor() {
    this.head = null;
  }
  add(data) {
    const newNode = new Node(data);
    if (this.head) {
      let tempHead = this.head;
      while (tempHead.next !== null) {
        tempHead = tempHead.next;
      }
      tempHead.next = newNode;
    } else {
      this.head = newNode;
    }
    return this.head;
  }
}
class mergeTwoSortedLists {
  constructor() {
    this.newList = null;
  }
  merge(list1, list2) {
    let turn = null;
    const newList = new addSinglyLinkedList();
    while (list1 || list2) {
      if (!list1) {
        turn = list2.data;
        list2 = list2.next;
      } else if (!list2) {
        turn = list1.data;
        list1 = list1.next;
      } else if (list1.data > list2.data) {
        turn = list2.data;
        list2 = list2.next;
      } else {
        turn = list1.data;
        list1 = list1.next;
      }
      if (turn) {
        newList.add(turn);
      }
    }
    return newList;
  }
}
class countList {
  constructor() {
    this.counting = 0;
    this.tempRef = null;
  }
  count(list) {
    this.tempRef = list;
    while (this.tempRef) {
      this.counting += 1;
      this.tempRef = this.tempRef.next;
    }
    return this.counting;
  }
}

class reversListClass {
  constructor() {
    this.newList = null;
  }
  reverse(list) {
    if (!list) {
      return this.newList;
    }
    while (list) {
      const newNode = new Node(list.val);
      if (this.newList === null) {
        this.newList = newNode;
      } else {
        newNode.next = this.newList;
        this.newList = newNode;
      }
      list = list.next;
    }
    return this.newList;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
  }
  add(data) {
    const newNode = new Node(data);
    if (this.head) {
      let tempHead = this.head;
      while (tempHead.next !== null) {
        tempHead = tempHead.next;
      }
      tempHead.next = newNode;
    } else {
      this.head = newNode;
    }
    return this.head;
  }
  getSecondLast() {
    let tempHead = this.head;
    while (tempHead.next && tempHead.next.next) {
      tempHead = tempHead.next;
    }
    return tempHead;
  }
  getAt(index) {
    let tempHead = this.head;
    if (index) {
      while (index-- > 0) {
        if (!tempHead.next) {
          return tempHead;
        }
        tempHead = tempHead.next;
      }
    }
    return tempHead;
  }
  addAt(data, index) {
    const newNode = new Node(data);
    if (!index) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const getAtNode = this.getAt(index);
      const afterPortion = getAtNode.next;
      getAtNode.next = newNode;
      newNode.next = afterPortion;
    }
  }
  deleteAt(index) {
    if (!index) {
      this.head = this.head.next;
    } else {
      const getAtNode = this.getAt(index);
      const afterAfterPortion = getAtNode.next && getAtNode.next.next;
      getAtNode.next = afterAfterPortion;
    }
  }
  deleteLast() {
    const getSecondLastElement = this.getSecondLast();
    getSecondLastElement.next = null;
  }
  get() {}
  delete() {}
}
const listAdd = (arr) => {
  const list = new singlyLinkedList();
  for (const iterator of arr) {
    list.add(iterator);
  }
  return list;
};
module.exports = listAdd;
// const ll1 = listAdd([]);
// var reverseList = function (head) {
//   return new reversListClass().reverse(head);
// };
// reverseList(ll1.head);
// const ll2 = listAdd([1, 3, 4]);
// console.log(new mergeTwoSortedLists().merge(ll1.head, ll2.head));
// console.log({ ll1, ll2 });
// exports.addElements = (arr) => {
//   return listAdd(arr);
// };

// let resp = null;
// resp = list.add(10);
// resp = list.add(20);
// resp = list.add(30);
// resp = list.add(40);
// resp = list.add(50);
// resp = list.addAt(5, 0);
// resp = list.addAt(45, 4);
// resp = list.deleteAt(4);
// resp = list.deleteAt(0);
// resp = list.getSecondLast();
// resp = list.deleteLast();
