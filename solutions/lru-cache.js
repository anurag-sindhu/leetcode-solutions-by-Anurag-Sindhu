var LRUCache = function(cap) {
	LRUCache.prototype.capacity = cap;
	LRUCache.prototype.obj = new Map();
	return null;
};

LRUCache.prototype.get = function(key) {
	if (!this.cache.has(key)) return -1;
	const v = this.cache.get(key);
	this.cache.delete(key);
	this.cache.set(key, v);
	return this.cache.get(key);
};

LRUCache.prototype.put = function(key, value) {
	if (this.cache.has(key)) {
		this.cache.delete(key);
	}
	this.cache.set(key, value);
	if (this.cache.size > this.capacity) {
		this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
	}
};
let keys;
let values;
keys = [ 'LRUCache', 'get', 'put', 'get', 'put', 'put', 'get', 'get' ];
values = [ [ 2 ], [ 2 ], [ 2, 6 ], [ 1 ], [ 1, 5 ], [ 1, 2 ], [ 1 ], [ 2 ] ];
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
