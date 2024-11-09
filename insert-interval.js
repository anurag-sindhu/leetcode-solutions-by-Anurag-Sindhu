var insert = function(intervals, newInterval) {
    const output = [];
    const obj = [];
    for (const [start, end] of intervals) {
        for (let index = start; index <= end; index++) {
            obj[index] = end;
        }
    }
    const [start, end] = newInterval;
    for (let index = start; index <= end; index++) {
        if (obj[index] !== undefined) {
            if (obj[index] < end) {
                obj[index] = end;
            }
        } else {
            obj[index] = end;
        }
    }
    let startKey = Math.min((intervals[0] && intervals[0][0]) || Infinity, newInterval[0]);
    if (intervals[0] && intervals[0][0] === 0) {
        startKey = 0;
    }
    for (let index = startKey; index <= obj.length; index++) {
        if (obj[index] === undefined) {
            continue;
        }
        const startKey = index;
        while (index !== obj[index]) {
            index = obj[index];
        }
        output.push([startKey, index]);
    }
    return output;
};
console.log(insert((intervals = []), (newInterval = [2, 5])));
console.log(insert([[0, 2], [3, 5], [6, 8], [10, 12], [13, 15]], [4, 7]));

console.log(
    insert((intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]), (newInterval = [4, 8]))
);
console.log(insert((intervals = [[1, 3], [6, 9]]), (newInterval = [2, 5])));
