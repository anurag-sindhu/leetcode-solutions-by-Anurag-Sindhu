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
    let turn = [];
    const newList = new addSinglyLinkedList();
    while (list1 || list2) {
      if (!list1) {
        turn = list2.val;
        list2 = list2.next;
      } else if (!list2) {
        turn = list1.val;
        list1 = list1.next;
      } else if (list1.val > list2.val) {
        turn = list2.val;
        list2 = list2.next;
      } else {
        turn = list1.val;
        list1 = list1.next;
      }

      newList.add(turn);
    }
    return newList.head;
  }
}

var mergeTwoLists = function (list1, list2) {
  return new mergeTwoSortedLists().merge(list1, list2);
};

const listAdd = (arr) => {
  const list = new addSinglyLinkedList();
  for (const iterator of arr) {
    list.add(iterator);
  }
  return list;
};

let resp = mergeTwoLists(listAdd([]).head, listAdd([0]).head);
console.log(resp);
resp = mergeTwoLists(listAdd([1, 2, 4]).head, listAdd([1, 3, 4]).head);
console.log(resp);
resp = mergeTwoLists([], []);
console.log(resp);
resp = mergeTwoLists([], [0]);
console.log(resp);
