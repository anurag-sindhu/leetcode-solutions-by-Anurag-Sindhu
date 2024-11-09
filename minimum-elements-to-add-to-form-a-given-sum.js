var minElements = function (nums, limit, goal) {
    const sum = (function () {
        let sum = 0;
        for (const iterator of nums) {
            sum += iterator;
        }
        return sum;
    })();
    let diff = 0;
    if ((sum < 0 && goal < 0) || (sum >= 0 && goal >= 0)) {
        diff += Math.abs(sum - goal);
    } else if (sum < 0 && goal > 0) {
        diff += Math.abs(sum) + goal;
    } else if (sum >= 0 && goal < 0) {
        diff += Math.abs(goal) + sum;
    }
    return Math.ceil(diff / Math.abs(limit));
};

console.log(minElements((nums = [0]), (limit = 1), (goal = -1000000000)) === 1000000000);
console.log(minElements((nums = [1, -1, 1]), (limit = 3), (goal = -4)) === 2);
console.log(minElements((nums = [1, -10, 9, 1]), (limit = 100), (goal = 0)) === 1);
