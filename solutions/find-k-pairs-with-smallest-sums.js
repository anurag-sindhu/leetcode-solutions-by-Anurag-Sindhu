class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }

        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[parent][0] <= this.heap[index][0]) {
                break;
            }

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }

            if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

function kSmallestPairs(nums1, nums2, k) {
    const resV = [];
    const pq = new MinHeap();

    // Push initial pairs
    for (const x of nums1) {
        pq.push([x + nums2[0], 0]);
    }

    // Get k smallest pairs
    while (k > 0 && !pq.isEmpty()) {
        const [sum, nums2Pos] = pq.pop();

        const first = sum - nums2[nums2Pos];
        const second = nums2[nums2Pos];

        resV.push([first, second]);

        // Push next pair for this nums1 element
        if (nums2Pos + 1 < nums2.length) {
            pq.push([first + nums2[nums2Pos + 1], nums2Pos + 1]);
        }

        k--;
    }

    return resV;
}

console.log(kSmallestPairs((nums1 = [1, 7, 11]), (nums2 = [2, 4, 6]), (k = 9)));
console.log(kSmallestPairs((nums1 = [1, 7, 11]), (nums2 = [2, 4, 6]), (k = 3)));
console.log(kSmallestPairs((nums1 = [1, 1, 2]), (nums2 = [1, 2, 3]), (k = 2)));
console.log(kSmallestPairs((nums1 = [1, 2]), (nums2 = [3]), (k = 3)));
