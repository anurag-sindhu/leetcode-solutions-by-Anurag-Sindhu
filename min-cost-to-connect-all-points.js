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
    insertMinHeap(element, source, mapper) {
        this.heap.push(element);
        mapper.push(source);
        const length = this.heap.length;
        if (length > 1) {
            let currentIndex = length - 1;
            while (currentIndex) {
                const findParentIndex = this.findParentIndex(currentIndex);
                if (this.heap[findParentIndex] > this.heap[currentIndex]) {
                    this.swapElements(currentIndex, findParentIndex);
                    const store = mapper[currentIndex];
                    mapper[currentIndex] = mapper[findParentIndex];
                    mapper[findParentIndex] = store;
                }
                currentIndex = findParentIndex;
            }
        }
    }
    getMinimumElement() {
        return this.heap[0];
    }
}

var minCostConnectPoints = function (points = []) {
    if (!points.length || points.length === 1) {
        return 0;
    }
    function getCost(fromPoint, toPoint) {
        return (
            Math.abs(fromPoint[0] - toPoint[0]) +
            Math.abs(fromPoint[1] - toPoint[1])
        );
    }
    let heapMapper = {};
    let heapIndexMapper = {};
    for (let index = 0; index < points.length; index++) {
        heapMapper[index] = new Heap();
        heapIndexMapper[index] = [];
        for (let childIndex = 0; childIndex < points.length; childIndex++) {
            if (index !== childIndex) {
                const cost = getCost(points[index], points[childIndex]);
                heapMapper[index].insertMinHeap(
                    cost,
                    childIndex,
                    heapIndexMapper[index]
                );
            }
        }
    }
    const exploredPoints = {};
    let totalCost = 0;
    for (let index = 0; index < points.length; index++) {
        if (!exploredPoints[index]) {
            totalCost += heapMapper[index].getMinimumElement();
            exploredPoints[index] = true;
            exploredPoints[heapIndexMapper[index][0]] = true;
        }
    }

    return totalCost;
};

console.log(
    minCostConnectPoints(
        (points = [
            [2, -3],
            [-17, -8],
            [13, 8],
            [-17, -15]
        ])
    ) === 53
);
console.log(minCostConnectPoints((points = [[0, 0]])) === 0);
console.log(
    minCostConnectPoints(
        (points = [
            [0, 0],
            [2, 2],
            [3, 10],
            [5, 2],
            [7, 0]
        ])
    ) === 20
);

console.log(
    minCostConnectPoints(
        (points = [
            [0, 0],
            [1, 1],
            [1, 0],
            [-1, 1]
        ])
    ) === 4
);

console.log(
    minCostConnectPoints(
        (points = [
            [3, 12],
            [-2, 5],
            [-4, 1]
        ])
    ) === 18
);
