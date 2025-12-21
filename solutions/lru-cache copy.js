var LRUCache = function (cap) {
    this.capacity = cap;
    this.cache = {};
    this.head = { prev: null, next: null };
    this.tail = { prev: null, next: null };
    this.nextHead = this.head;
};

LRUCache.prototype.addNode = function (node) {
    node.prev = this.nextHead;
    this.nextHead.next = node;
    this.nextHead = this.nextHead.next;
    return this.nextHead;
};

LRUCache.prototype.removeNode = function (reference) {
    if (reference == undefined) {
        return -1;
    }
    reference.prev.next = reference.next;
};

LRUCache.prototype.get = function (key) {
    const temp = this.cache[key];
    if (temp == undefined) {
        return -1;
    }
    this.removeNode(temp.reference);
    const reference = this.addNode({ key, temp, prev: null, next: null });
    this.cache[key] = { value: temp.value, reference };
    return key;
};

LRUCache.prototype.put = function (key, value) {
    const sizeCache = Object.keys(this.cache).length;
    if (this.capacity <= sizeCache) {
        const temp = this.cache[this.head.next.value];
        if (temp == undefined) {
            return -1;
        }
        this.removeNode(temp.reference);
        this.cache[this.head.next.value] = undefined;
    }
    const reference = this.addNode({ key, value, prev: null, next: null });
    this.cache[key] = { value: value, reference };
};
let keys, values;
let cache;

keys = ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'];
values = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];

for (let i = 0; i < keys.length; i++) {
    if (i == 7) {
        console.log('object');
    }
    if (keys[i] === 'LRUCache') {
        cache = new LRUCache(values[i][0]);
        console.log(null);
    } else if (keys[i] === 'put') {
        cache.put(values[i][0], values[i][1]);
        console.log(null);
    } else {
        console.log(cache.get(values[i][0]));
    }
}

keys = ['LRUCache', 'get', 'put', 'put', 'get', 'put', 'put', 'get', 'get'];
values = [[2], [2], [2, 6], [6, 9], [1], [1, 5], [1, 2], [1], [2]];

for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 'LRUCache') {
        cache = new LRUCache(values[i][0]);
        console.log(null);
    } else if (keys[i] === 'put') {
        cache.put(values[i][0], values[i][1]);
        console.log(null);
    } else {
        console.log(cache.get(values[i][0]));
    }
}

keys = ['LRUCache', 'get', 'put', 'get', 'put', 'put', 'get', 'get'];
values = [[2], [2], [2, 6], [1], [1, 5], [1, 2], [1], [2]];

for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 'LRUCache') {
        cache = new LRUCache(values[i][0]);
        console.log(null);
    } else if (keys[i] === 'put') {
        cache.put(values[i][0], values[i][1]);
        console.log(null);
    } else {
        console.log(cache.get(values[i][0]));
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
