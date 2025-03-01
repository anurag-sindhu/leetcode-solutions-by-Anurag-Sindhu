const singlyLinkedList1 = require('../javascript/singlyLinkedList');

class Node {
    constructor(data, next = null) {
        this.val = data;
        this.next = next;
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
}

function getTotalNumberOfElements(list, count = 0) {
    if (!list) {
        return count;
    }
    return getTotalNumberOfElements(list.next, count + 1);
}

function getReverseLinkedList(list) {
    let output = null;
    const reverseLinkedList = function (list) {
        if (!list) {
            return null;
        }
        const restList = list.next;
        const currentNode = list;
        list.next = null;
        if (!output) {
            output = currentNode;
        } else {
            currentNode.next = output;
            output = currentNode;
        }
        reverseLinkedList(restList);
    };
    reverseLinkedList(list);
    return output;
}

/**
 * 1 -> 1-1 (+0)
 * 2 -> 2-3 (+1)
 * 3 -> 4-6 (+2)
 * 4 -> 7-10 (+3)
 * 5 -> 11-15 (+4)
 */
var reverseEvenLengthGroups = function (list) {
    if (!list) {
        return null;
    }
    const newList = new singlyLinkedList();
    const count = getTotalNumberOfElements(list);
    let tempNode = new singlyLinkedList();
    function start(
        list,
        group = 1,
        elementNumber = 1,
        prevStart = 1,
        prevEnd = 1,
        increment = 1,
        elementsInThisGroup = 1,
        tempNode = null,
    ) {
        if (!list) {
            return;
        }
        if (elementNumber + 1 > prevEnd) {
            const restElements = count - elementNumber;
            const newStart = prevStart + increment;
            const newEnd = prevStart + increment + increment;
            const elementsInNextGroup = Math.min(restElements, newEnd - newStart + 1);
            if (elementsInThisGroup % 2 == 0) {
                if (tempNode) {
                    tempNode.next = list;
                } else {
                    tempNode = list;
                }
            }
            start(
                list.next,
                group + 1,
                elementNumber + 1,
                newStart,
                newEnd,
                increment + 1,
                elementsInNextGroup,
            );
            if (elementsInThisGroup % 2 == 0) {
                const temp = tempNode.head;
                if (temp) {
                    newList.add(temp.val);
                    tempNode.head = temp.next;
                } else {
                    newList.add(list.val);
                }
            } else {
                newList.add(list.val);
            }
        } else {
            if (elementsInThisGroup % 2 == 0) {
                if (tempNode) {
                    tempNode.next = list;
                } else {
                    tempNode = list;
                }
            }
            start(
                list.next,
                group,
                elementNumber + 1,
                prevStart,
                prevEnd,
                increment,
                elementsInThisGroup,
                tempNode,
            );
            if (elementsInThisGroup % 2 == 0) {
                const temp = tempNode.head;
                if (temp) {
                    newList.add(temp.val);
                    tempNode.head = temp.next;
                } else {
                    newList.add(list.val);
                }
            } else {
                newList.add(list.val);
            }
        }
    }

    start(list);
    const reversed = getReverseLinkedList(newList.head);
    return reversed;
};
console.log('iveo    eed   l te   olc'.length);
console.log(reverseEvenLengthGroups(singlyLinkedList1([5, 2, 6, 3, 9, 1, 7, 3, 8, 4]).head)); //[5,6,2,3,9,1,4,8,3,7]
console.log(reverseEvenLengthGroups(singlyLinkedList1([4, 8, 3, 7, 1, 9, 3, 6, 2, 5]).head)); //[5,6,2,3,9,1,4,8,3,7]
console.log(reverseEvenLengthGroups(singlyLinkedList1([1, 1, 0, 6, 5]).head)); //[1,0,1,5,6]
console.log(reverseEvenLengthGroups(singlyLinkedList1([0, 3, 4, 1, 5, 2]).head)); //[0, 4, 3, 1, 5, 2];
console.log(reverseEvenLengthGroups(singlyLinkedList1([1, 1, 0, 6]).head)); //[1,0,1,6]
