var minMoves = function (nums) {
    let count = 0;
    const minElement = Math.min(...nums);
    for (const iterator of nums) {
        count += iterator - minElement;
    }
    return count;
};

console.log(minMoves([0, 0, 1, 6, 8]) === 999999999);
console.log(minMoves([1, 1, 1000000000]) === 999999999);
console.log(minMoves((nums = [1, 2, 3])) == 3);
console.log(minMoves((nums = [1, 1, 1])) === 0);
