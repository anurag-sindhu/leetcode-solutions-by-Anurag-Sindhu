const singlyLinkedList = require('../../js/singlyLinkedList');

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

function getTotalNumberOfElements(list, count = 0) {
  if (!list) {
    return count;
  }
  return getTotalNumberOfElements(list.next, count + 1);
}

function reverseFurtherElements(list) {
  const count = getTotalNumberOfElements(list);
  if (count % 2 === 0) {
    return getReverseLinkedList(list);
  }
  return list;
}

function skipNextThreeElementsAndReverseFurther(list) {
  if (list && list.next && list.next.next && list.next.next.next) {
    list.next.next.next = reverseFurtherElements(list.next.next.next);
  } else if (list && list.next && !list.next.next) {
    list = getReverseLinkedList(list);
  }
  return list;
}

function reverseNextTwoElements(list) {
  if (list && list.next) {
    const restList = list.next.next;
    const secondElementOfList = list.next;
    list.next = skipNextThreeElementsAndReverseFurther(restList);
    secondElementOfList.next = list;
    return secondElementOfList;
  }
  return list;
}

var reverseEvenLengthGroups = function (list) {
  if (!list) {
    return null;
  }
  list.next = reverseNextTwoElements(list.next);
  return list;
};

console.log(reverseEvenLengthGroups(singlyLinkedList([0, 3, 4, 1, 5, 2]).head)); //[0, 4, 3, 1, 5, 2];
console.log(reverseEvenLengthGroups(singlyLinkedList([1, 1, 0, 6, 5]).head)); //[1,0,1,5,6]
console.log(reverseEvenLengthGroups(singlyLinkedList([5, 2, 6, 3, 9, 1, 7, 3, 8, 4]).head)); //[5,6,2,3,9,1,4,8,3,7]
console.log(reverseEvenLengthGroups(singlyLinkedList([1, 1, 0, 6]).head)); //[1,0,1,6]
