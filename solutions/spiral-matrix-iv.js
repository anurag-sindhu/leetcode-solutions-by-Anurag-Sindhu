const singlyLinkedList = require('../javascript/singlyLinkedList');

var spiralMatrix = function (m, n, head) {
    const getMatrix = spiralMatrixHelper(m, n, head);
    for (let rowIndex = 0; rowIndex < m; rowIndex++) {
        if (!getMatrix[rowIndex]) {
            getMatrix[rowIndex] = [];
        }
        for (let columnIndex = 0; columnIndex < n; columnIndex++) {
            if (getMatrix[rowIndex][columnIndex] === undefined) {
                getMatrix[rowIndex][columnIndex] = -1;
            }
        }
    }
    return getMatrix;
};

var spiralMatrixHelper = function (
    m,
    n,
    head,
    nextRowIndex = 0,
    nextColumnIndex = 0,
    movement = 'right',
    ma = [],
) {
    if (!head) {
        return ma;
    }
    if (!ma[nextRowIndex]) {
        ma[nextRowIndex] = [];
        ma[nextRowIndex][nextColumnIndex] = head.val;
    } else {
        ma[nextRowIndex][nextColumnIndex] = head.val;
    }
    if (movement === 'right') {
        if (nextColumnIndex + 1 < n && ma[nextRowIndex][nextColumnIndex + 1] === undefined) {
            nextColumnIndex += 1;
        } else {
            movement = 'bottom';
            nextRowIndex++;
        }
    } else if (movement === 'bottom') {
        if (nextRowIndex + 1 < m) {
            if (!ma[nextRowIndex + 1]) {
                ma[nextRowIndex + 1] = [];
                nextRowIndex += 1;
            } else if (ma[nextRowIndex + 1][nextColumnIndex] !== undefined) {
                movement = 'left';
                nextColumnIndex -= 1;
            } else {
                nextRowIndex += 1;
            }
        } else {
            movement = 'left';
            nextColumnIndex -= 1;
        }
    } else if (movement === 'left') {
        if (nextColumnIndex - 1 >= 0 && ma[nextRowIndex][nextColumnIndex - 1] === undefined) {
            nextColumnIndex -= 1;
        } else {
            movement = 'up';
            nextRowIndex--;
        }
    } else if (movement === 'up') {
        if (nextRowIndex - 1 >= 0) {
            if (!ma[nextRowIndex - 1]) {
                ma[nextRowIndex - 1] = [];
                nextRowIndex -= 1;
            } else if (ma[nextRowIndex - 1][nextColumnIndex] !== undefined) {
                movement = 'right';
                nextColumnIndex += 1;
            } else {
                nextRowIndex -= 1;
            }
        } else {
            movement = 'right';
            nextColumnIndex += 1;
        }
    }
    return spiralMatrixHelper(m, n, head.next, nextRowIndex, nextColumnIndex, movement, ma);
};
let resp = spiralMatrix(
    (m = 10),
    (n = 8),
    singlyLinkedList([483, 100, 904, 632, 267, 352, 386, 887, 753]).head,
);
console.log(resp);
resp = spiralMatrix(
    (m = 4),
    (n = 5),
    singlyLinkedList([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0, 0, 0, 0]).head,
);
console.log(resp);
resp = spiralMatrix(
    (m = 3),
    (n = 5),
    singlyLinkedList([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]).head,
);
console.log(resp);
// 9369
console.log(spiralMatrix((m = 1), (n = 4), singlyLinkedList([0, 1, 2]).head));
