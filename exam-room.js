var ExamRoom = function (n) {
    this.n = n;
    this.list = new Array(n);
};

ExamRoom.prototype.seat = function () {
    let indexFitting = null;
    let distance = -Infinity;
    let prevDistance = -Infinity;
    let previousFoundIndex = null;
    for (let index = 0; index < this.list.length; index++) {
        if (this.list[index]) {
            if (this.list[0] === null) {
                distance = Math.max(distance, index - 1);
                indexFitting = index - distance - 1;
                this.list[0] = false;
            } else {
                if (previousFoundIndex !== null) {
                    distance = Math.max(distance, index - previousFoundIndex - 1);
                    if (indexFitting === null) {
                        indexFitting = previousFoundIndex + Math.ceil(distance / 2);
                    } else {
                        const curDistance = Math.ceil(distance / 2);
                        if (prevDistance < curDistance) {
                            indexFitting = previousFoundIndex + curDistance;
                        }
                    }
                    prevDistance = Math.ceil(distance / 2);
                }
                previousFoundIndex = index;
            }
        }
    }
    if (distance === -Infinity) {
        if (previousFoundIndex === null) {
            indexFitting = 0;
        } else {
            if (previousFoundIndex === 0) {
                indexFitting = this.list.length - 1;
            } else if (previousFoundIndex === this.list.length - 1) {
                indexFitting = 0;
            }
        }
    }
    this.list[indexFitting] = true;
    return indexFitting;
};

ExamRoom.prototype.leave = function (p) {
    this.list[p] = null;
    return null;
};

let obj;
let operations;
let values;

obj = new ExamRoom(10);
operations = [
    'ExamRoom',
    'seat',
    'seat',
    'seat',
    'leave',
    'leave',
    'seat',
    'seat',
    'seat',
    'seat',
    'seat',
    'seat',
    'seat',
    'seat',
    'seat',
    'leave',
    'leave',
    'seat',
    'seat',
    'leave',
    'seat',
    'leave',
    'seat',
    'leave',
    'seat',
    'leave',
    'seat',
    'leave',
    'leave',
    'seat',
    'seat',
    'leave',
    'leave',
    'seat',
    'seat',
    'leave',
];

/**
 * ['ExamRoom''seat''seat''seat''leave''leave''seat''seat''seat''seat''seat''seat''seat''seat''seat''leave', ]
 */
values = [
    [10],
    [],
    [],
    [],
    [0],
    [4],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [0],
    [4],
    [],
    [],
    [7],
    [],
    [3],
    [],
    [3],
    [],
    [9],
    [],
    [0],
    [8],
    [],
    [],
    [0],
    [8],
    [],
    [],
    [2],
];

for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    //[null,0,9,4,null,null,0,4,2,6,1,3,5,7,8,null]
}

obj = new ExamRoom(10);
operations = [
    'ExamRoom',
    'seat',
    'seat',
    'seat',
    'leave',
    'leave',
    'seat',
    'seat',
    'seat',
    'seat',
    'seat',
    'seat',
    'seat',
    'seat',
    'seat',
    'leave',
];
/**
 * ['ExamRoom''seat''seat''seat''leave''leave''seat''seat''seat''seat''seat''seat''seat''seat''seat''leave', ]
 */
values = [[10], [], [], [], [0], [4], [], [], [], [], [], [], [], [], [], [0]];

for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    //[null,0,9,4,null,null,0,4,2,6,1,3,5,7,8,null]
}

obj = new ExamRoom(10);
operations = ['ExamRoom', 'seat', 'seat', 'seat', 'seat', 'leave', 'seat'];
values = [[10], [], [], [], [], [4], []];

for (let index = 1; index < operations.length; index++) {
    console.log(obj[operations[index]](...values[index]));
    // [null, 0, 9, 4, 2, null, 5];
}
