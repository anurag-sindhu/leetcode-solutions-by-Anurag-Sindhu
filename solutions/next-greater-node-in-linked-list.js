const singlyLinkedList = require('../javascript/singlyLinkedList');

class Heap {
    constructor() {
        this.heap = [];
    }
    swapElements(from, to) {
        const save = this.heap[to];
        this.heap[to] = this.heap[from];
        this.heap[from] = save;
        return;
    }
    findParentIndex(childIndex) {
        const indexFind = (childIndex - 1) / 2;
        if (indexFind !== parseInt(indexFind)) {
            return (childIndex - 2) / 2;
        }
        return indexFind;
    }
    findChildIndex(parentIndex) {
        return { leftChild: 2 * parentIndex + 1, rightChild: 2 * parentIndex + 2 };
    }
    insertMinHeap(element, index) {
        this.heap.push({ value: element, index });
        const length = this.heap.length;
        if (length > 1) {
            let currentIndex = length - 1;
            while (currentIndex) {
                const findParentIndex = this.findParentIndex(currentIndex);
                if (this.heap[findParentIndex].value > this.heap[currentIndex].value) {
                    this.swapElements(currentIndex, findParentIndex);
                }
                currentIndex = findParentIndex;
            }
        }
    }
    getMinimumElement() {
        return this.heap[0];
    }
    getMaximumElement() {
        return this.heap[0];
    }
    extractMinimumElement() {
        const length = this.heap.length;
        let indexOfToBeRemovedElement = 0;
        this.heap[indexOfToBeRemovedElement] = this.heap[length - 1];
        this.heap = this.heap.splice(indexOfToBeRemovedElement, length - 1);
        while (indexOfToBeRemovedElement < length) {
            let { leftChild, rightChild } = this.findChildIndex(indexOfToBeRemovedElement);
            let findIndexOfSmallChildElement = leftChild;
            if (this.heap[rightChild]) {
                findIndexOfSmallChildElement =
                    this.heap[leftChild].value > this.heap[rightChild].value
                        ? rightChild
                        : leftChild;
            }
            if (
                this.heap[findIndexOfSmallChildElement] &&
                this.heap[indexOfToBeRemovedElement] &&
                this.heap[findIndexOfSmallChildElement].value <
                    this.heap[indexOfToBeRemovedElement].value
            ) {
                this.swapElements(indexOfToBeRemovedElement, findIndexOfSmallChildElement);
                indexOfToBeRemovedElement = findIndexOfSmallChildElement;
            } else {
                return;
            }
        }
    }
    extractMaximumElement() {
        const length = this.heap.length;
        let indexOfToBeRemovedElement = 0;
        this.heap[indexOfToBeRemovedElement] = this.heap[length - 1];
        this.heap = this.heap.splice(indexOfToBeRemovedElement, length - 1);
        while (indexOfToBeRemovedElement < length) {
            let { leftChild, rightChild } = this.findChildIndex(indexOfToBeRemovedElement);
            const findLargestIndex =
                this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
            if (this.heap[findLargestIndex] > this.heap[indexOfToBeRemovedElement]) {
                this.swapElements(indexOfToBeRemovedElement, findLargestIndex);
                indexOfToBeRemovedElement = findLargestIndex;
            } else {
                return;
            }
        }
    }
    getHeap() {
        return this.heap;
    }
}

var nextLargerNodes = function (head) {
    const output = [];
    const heap = new Heap();
    function nextLargerNodesHelper(head, index = 0) {
        if (!head) {
            return;
        }
        const value = head.val;
        let minimumElementFromHeap = heap.getMinimumElement();
        while (minimumElementFromHeap && minimumElementFromHeap.value < value) {
            output[minimumElementFromHeap.index] = value;
            heap.extractMinimumElement();
            minimumElementFromHeap = heap.getMinimumElement();
            console.log({ minimumElementFromHeap });
        }
        output[index] = 0;
        heap.insertMinHeap(value, index);
        return nextLargerNodesHelper(head.next, index + 1);
    }
    nextLargerNodesHelper(head);
    return output;
};

console.log(nextLargerNodes(singlyLinkedList([9, 8, 1, 4, 2, 5, 7, 5]).head));
//[0,0,4,5,5,7,0,0]
//[0,0,4,7,5,7,0,0]
console.log(nextLargerNodes(singlyLinkedList([9, 7, 6, 7, 6, 9]).head));
//[0,9,7,9,9,0]
//[0,0,7,0,9,0]
console.log(nextLargerNodes(singlyLinkedList([2, 7, 4, 3, 5]).head));
//[7,0,5,5,0]
console.log(nextLargerNodes(singlyLinkedList((head = [2, 1, 5])).head));
