const singlyLinkedList = require('../javascript/singlyLinkedList');

var mergeInBetween = function (list1, a, b, list2, count = 1) {
    if (!list1) {
        return;
    }
    if (count >= a) {
        let restList = null;
        let store1 = list1;
        while (list1 && count <= b) {
            count++;
            store1 = store1.next;
        }
        restList = store1.next;
        list1.next = list2;
        let current = list1;
        while (current.next) {
            current = current.next;
        }
        current.next = restList;
        return list1;
    }
    mergeInBetween(list1.next, a, b, list2, (count += 1));
    return list1;
};

let res = null;
res = mergeInBetween(
    singlyLinkedList([0, 1, 2]).head,
    1,
    1,
    singlyLinkedList([1000000, 1000001, 1000002, 1000003]).head,
);
console.log(res);
res = mergeInBetween(
    singlyLinkedList((list1 = [10, 1, 13, 6, 9, 5])).head,
    (a = 3),
    (b = 4),
    singlyLinkedList([1000000, 1000001, 1000002]).head,
);
console.log(res);

console.log(
    mergeInBetween(
        (list1 = [0, 1, 2, 3, 4, 5, 6]),
        (a = 2),
        (b = 5),
        (list2 = [1000000, 1000001, 1000002, 1000003, 1000004]),
    ),
);
