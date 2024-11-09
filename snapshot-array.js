var SnapshotArray = function(length) {
	this.arr = new Array(length).fill(0);
	this.snaps = {};
	return null;
};

SnapshotArray.prototype.set = function(index, val) {
	this.arr[index] = val;
	return null;
};

SnapshotArray.prototype.snap = function() {
	const snapId = Object.values(this.snaps).length;
	this.snaps[snapId] = [ ...this.arr ];
	return snapId;
};

SnapshotArray.prototype.get = function(index, snap_id) {
	return this.snaps[snap_id][index] || null;
};

let obj;
let operations;
let values;

operations = [ 'SnapshotArray', 'snap', 'snap', 'get', 'set', 'snap', 'set' ];
values = [ [ 4 ], [], [], [ 3, 1 ], [ 2, 4 ], [], [ 1, 4 ] ];
obj = new SnapshotArray(...values[0]);

for (let index = 1; index < operations.length; index++) {
	console.log(obj[operations[index]](...values[index]));
}

operations = [ 'SnapshotArray', 'set', 'set', 'set', 'snap', 'get', 'snap' ];
values = [ [ 1 ], [ 0, 4 ], [ 0, 16 ], [ 0, 13 ], [], [ 0, 0 ], [] ];
obj = new SnapshotArray(...values[0]);

for (let index = 1; index < operations.length; index++) {
	console.log(obj[operations[index]](...values[index]));
}

operations = [ 'SnapshotArray', 'set', 'snap', 'set', 'get' ];
values = [ [ 3 ], [ 0, 5 ], [], [ 0, 6 ], [ 0, 0 ] ];
obj = new SnapshotArray(...values[0]);

for (let index = 1; index < operations.length; index++) {
	console.log(obj[operations[index]](...values[index]));
}
