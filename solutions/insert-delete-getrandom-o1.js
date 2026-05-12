class RandomizedSet {
    constructor() {
        this.array = []; // ArrayList<Integer>
        this.object = {}; // HashMap<Integer, Set<Integer>> → { val: { index: true } }
    }

    // Inserts a value. Returns true if it did NOT already exist.
    insert(val) {
        const contain = this.object[val] !== undefined;

        if (!contain) {
            this.object[val] = {};
        }

        this.object[val][this.array.length] = true;
        this.array.push(val);

        return !contain;
    }

    // Removes one occurrence of a value.
    remove(val) {
        if (this.object[val] === undefined) {
            return false;
        }

        // get any index from the "set"
        const loc = Number(Object.keys(this.object[val])[0]);
        delete this.object[val][loc];

        const lastIndex = this.array.length - 1;
        const lastVal = this.array[lastIndex];

        // make sure to swap only with last element: (it will give you O(1)) time complexity
        // save last element by putting with the element which we want to remove(overwrite)
        if (loc !== lastIndex) {
            // move last element to loc
            this.array[loc] = lastVal;

            // update indices for lastVal
            delete this.object[lastVal][lastIndex];
            this.object[lastVal][loc] = true;
        }

        this.array.pop();

        // clean up if no indices left
        if (Object.keys(this.object[val]).length === 0) {
            delete this.object[val];
        }

        return true;
    }

    // Get random element
    getRandom() {
        const idx = Math.floor(Math.random() * this.array.length);
        return this.array[idx];
    }
}

// var RandomizedSet = function () {
//     this.arr = []; // like ArrayList
//     this.object = {};
// };

// RandomizedSet.prototype.insert = function (val) {
//     if (this.object[val] !== undefined) {
//         return false;
//     }

//     this.object[val] = this.arr.length;
//     this.arr.push(val);
//     return true;
// };

// RandomizedSet.prototype.remove = function (val) {
//     if (this.object[val] === undefined) {
//         return false;
//     }

//     const indexOfElementToBeRemoved = this.object[val];
//     const lastIndex = this.arr.length - 1;

//     // make sure to swap only with last element: (it will give you O(1)) time complexity
//     //save last element by putting with the element which we want to remove(duplicate)
//     if (indexOfElementToBeRemoved !== lastIndex) {
//         const lastVal = this.arr[lastIndex];
//         this.arr[indexOfElementToBeRemoved] = lastVal;
//         this.object[lastVal] = indexOfElementToBeRemoved;
//     }

//     delete this.object[val];
//     this.arr.pop();
//     return true;
// };

// RandomizedSet.prototype.getRandom = function () {
//     const mathRandom = Math.random();
//     const randIndex = Math.floor(mathRandom * this.arr.length);
//     return this.arr[randIndex];
// };

let obj;
let operations;
let values;

operations = [
    'RandomizedSet',
    'insert',
    'remove',
    'insert',
    'getRandom',
    'remove',
    'insert',
    'getRandom',
];
values = [[], [1], [2], [2], [], [1], [2], []];
obj = new RandomizedSet();

for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    //[null, true, false, true, 2, true, false, 2]
}

operations = ['RandomizedSet', 'remove', 'remove', 'insert', 'getRandom', 'remove', 'insert'];
values = [[], [0], [0], [0], [], [0], [0]];
obj = new RandomizedSet();

for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    //[null,false,false,true,0,true,true]
}

operations = ['RandomizedSet', 'insert', 'insert', 'remove', 'insert', 'remove', 'getRandom'];
values = [[], [0], [1], [0], [2], [1], []];
obj = new RandomizedSet();

for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    //[null, true, false, true, 2, true, false, 2]
}
