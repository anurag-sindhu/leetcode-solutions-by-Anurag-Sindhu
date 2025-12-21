/**
 * Node class (converted from Python)
 */
class Node {
    constructor(k, v) {
        this.key = k;
        this.val = v;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this._remove(node);
    this._add(node);
    return node.val;
};

/**
 * Python used set(), but LeetCode uses put()
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this._remove(this.map.get(key));
    }

    const node = new Node(key, value);
    this._add(node);
    this.map.set(key, node);

    if (this.map.size > this.capacity) {
        const lru = this.head.next;
        this._remove(lru);
        this.map.delete(lru.key);
    }
};

LRUCache.prototype._remove = function (node) {
    const p = node.prev;
    const n = node.next;

    p.next = n;
    n.prev = p;
};

LRUCache.prototype._add = function (node) {
    const p = this.tail.prev;

    p.next = node;
    this.tail.prev = node;

    node.prev = p;
    node.next = this.tail;
};

let keys;
let values;
keys = ['LRUCache', 'get', 'put', 'get', 'put', 'put', 'get', 'get'];
values = [[2], [2], [2, 6], [1], [1, 5], [1, 2], [1], [2]];

for (let index = 0; index < keys.length; index++) {
    if (keys[index] === 'LRUCache') {
        console.log(LRUCache(values[index][0]));
    } else if (keys[index] === 'put') {
        console.log(LRUCache.prototype.put(values[index][0], values[index][1]));
    } else {
        console.log(LRUCache.prototype.get(values[index][0]));
    }
}
// const keys = ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'];
// const values = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];

// const keys = ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'];
// const values = [[2], [1, 0], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];

// const keys = ['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get'];
// const values = [[2], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2]];
//[null,null,null,null,null,-1,3]
// const keys = [
//   'LRUCache',
//   'put',
//   'put',
//   'put',
//   'put',
//   'get',
//   'get',
//   'get',
//   'get',
//   'put',
//   'get',
//   'get',
//   'get',
//   'get',
//   'get'
// ];
// const values = [
//   [3],
//   [1, 1],
//   [2, 2],
//   [3, 3],
//   [4, 4],
//   [4],
//   [3],
//   [2],
//   [1],
//   [5, 5],
//   [1],
//   [2],
//   [3],
//   [4],
//   [5]
// ];
