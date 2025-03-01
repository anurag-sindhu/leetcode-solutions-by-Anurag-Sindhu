const singlyLinkedList = require('../javascript/singlyLinkedList');

var nodesBetweenCriticalPoints = function (head) {
    let prevValue = null;
    let prevCritical = null;
    let firstCritical = null;
    let lastCritical = null;
    let minDistance = Infinity;
    function helper(head, count = 0) {
        if (!head) {
            return;
        }
        if (head.next && head.next.val) {
            const nextValue = head.next.val;
            const currentValue = head.val;
            if (prevValue != null) {
                if (prevValue > currentValue && nextValue > currentValue) {
                    if (firstCritical == null) {
                        firstCritical = count;
                    }
                    if (prevCritical !== null) {
                        minDistance = Math.min(minDistance, count - prevCritical);
                    }
                    prevCritical = count;
                    lastCritical = count;
                }
                if (prevValue < currentValue && nextValue < currentValue) {
                    if (firstCritical == null) {
                        firstCritical = count;
                    }
                    if (prevCritical !== null) {
                        minDistance = Math.min(minDistance, count - prevCritical);
                    }
                    prevCritical = count;
                    lastCritical = count;
                }
            }
            prevValue = currentValue;
            helper(head.next, count + 1);
        }
    }
    helper(head);
    if (minDistance == Infinity) {
        minDistance = -1
    }
        if (lastCritical - firstCritical >= 1) {
            return [minDistance, lastCritical - firstCritical];
        }
    return [minDistance, -1];
};

console.log(nodesBetweenCriticalPoints(singlyLinkedList([5, 3, 1, 2, 5, 1, 2]).head)); //1,0
console.log(nodesBetweenCriticalPoints(singlyLinkedList([3, 1]).head)); //1,0
console.log(nodesBetweenCriticalPoints(singlyLinkedList([1, 3, 2, 2, 3, 2, 2, 2, 7]).head)); //1,0
