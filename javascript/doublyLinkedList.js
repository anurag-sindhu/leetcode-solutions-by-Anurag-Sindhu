class Node {
  constructor(data, next = null, previous = null) {
    this.previous = previous;
    this.data = data;
    this.next = next;
  }
}

class doublyLinkedList {
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
      newNode.previous = tempHead;
    } else {
      this.head = newNode;
    }
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
      this.head.previous = newNode;
      this.head = newNode;
      console.log(this.head);
    } else {
      const getAtNode = this.getAt(index - 1);
      const afterPortion = getAtNode.next;
      getAtNode.next = newNode;
      newNode.next = afterPortion;
      newNode.previous = getAtNode;
      afterPortion.previous = newNode;
      console.log(this.head);
    }
  }
  deleteAt(index) {
    if (!index) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      const getAtNode = this.getAt(index - 1);
      const afterAfterPortion = getAtNode.next && getAtNode.next.next;
      getAtNode.next = afterAfterPortion;
      afterAfterPortion.previous = getAtNode;
    }
  }
  deleteLast() {
    const getSecondLastElement = this.getSecondLast();
    getSecondLastElement.next = null;
  }
  get() {}
  delete() {}
}

const list = new doublyLinkedList();
let resp = null;
resp = list.add(10);
resp = list.add(20);
resp = list.add(30);
resp = list.add(40);
resp = list.add(50);
resp = list.addAt(35, 3);
resp = list.addAt(5, 0);
resp = list.deleteAt(4);
resp = list.deleteAt(0);
resp = list.getSecondLast();
resp = list.deleteLast();
