class MaxHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    getParentIndex(index) {
        return parseInt(index / 2);
    }
    swap(from, to) {
        const store = this.heap[from];
        this.heap[from] = this.heap[to];
        this.heap[to] = store;
    }
    getChildIndexes(index) {
        return {
            left: index * 2 + 1,
            right: index * 2 + 2,
        };
    }
    add(element) {
        this.heap.push(element);
        let currentWorkingIndex = this.heap.length - 1;
        while (this.heap.length > 1) {
            const parentIndex = this.getParentIndex(currentWorkingIndex);
            if (this.heap[parentIndex] < this.heap[currentWorkingIndex]) {
                this.swap(parentIndex, currentWorkingIndex);
                currentWorkingIndex = parentIndex;
                if (parentIndex === 0) {
                    break;
                }
            } else {
                break;
            }
        }
        return;
    }
    remove() {
        const biggestElement = this.heap[0];
        if (this.heap.length === 1) {
            this.heap = [];
            return biggestElement;
        }
        const lastElement = this.heap.pop();
        this.heap[0] = lastElement;
        let currentWorkingIndex = 0;
        while (this.heap.length > 1) {
            const childIndexes = this.getChildIndexes(currentWorkingIndex);
            if (
                this.heap[childIndexes.left] !== undefined &&
                this.heap[childIndexes.right] !== undefined
            ) {
            }
            const biggestIndex =
                this.heap[childIndexes.left] < this.heap[childIndexes.right]
                    ? childIndexes.right
                    : childIndexes.left;
            if (this.heap[biggestIndex] > this.heap[currentWorkingIndex]) {
                this.swap(biggestIndex, currentWorkingIndex);
                currentWorkingIndex = biggestIndex;
                if (currentWorkingIndex === this.heap.length - 1) {
                    break;
                }
            } else {
                break;
            }
        }
        return biggestElement;
    }
    max() {
        return this.heap[0];
    }
}

function getSum(from, times) {
    const totalTillOne = (from * (from + 1)) / 2;
    const totalTillOne1 = ((from - times) * (from - times + 1)) / 2;
    return totalTillOne - totalTillOne1;
}

var maxProfit = function (inventory, orders) {
    let sum = 0;
    if (inventory.length === 1) {
        const res = getSum(inventory[0], orders);
        return res % (Math.pow(10, 9) + 7);
    }
    const maxHeap = new MaxHeap();
    for (const iterator of inventory) {
        maxHeap.add(iterator);
    }
    let index = 0;
    while (orders > 0 && maxHeap.size()) {
        index += 1;
        let removeTopElement = maxHeap.remove();
        let topElement = maxHeap.max();
        if (topElement === undefined) {
            topElement = 0;
        }
        while (orders > 0 && removeTopElement > topElement) {
            if (orders >= index) {
                sum += removeTopElement * index;
                removeTopElement--;
                orders -= index;
            } else {
                sum += removeTopElement * orders;
                orders = 0;
                break;
            }
        }
    }
    return sum % 1000000007;
};
var res;
res = maxProfit((inventory = [773160767]), (orders = 252264991));
console.log(res === 70267492);
console.log(maxProfit((inventory = [16, 14, 9, 6, 4, 2, 1]), (orders = 40)) === 304);
console.log(maxProfit((inventory = [2, 5]), (orders = 4)) === 14);
console.log(maxProfit((inventory = [10]), (orders = 2)) === 19);
console.log(maxProfit((inventory = [1000000000]), (orders = 1000000000)) === 21);
console.log(maxProfit((inventory = [3, 5]), (orders = 6)) === 19);
