var jump = function (nums) {
    let currentEnd = 0,
        maxReach = 0,
        jump = 0;
    for (let index = 0; index < nums.length - 1; index++) {
        maxReach = Math.max(maxReach, index + nums[index]);
        if (index === currentEnd) {
            jump++;
            currentEnd = maxReach;
        }
        if (currentEnd >= nums.length - 1) {
            return jump;
        }
    }
    return jump;
};



console.log(4 == jump([2, 9, 3, 1, 4, 2, 1, 3, 1, 4]));
console.log(4 == jump([2, 1, 3, 1, 4, 2, 1, 3, 1, 4]));
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([0]));
console.log(jump([2, 2, 2, 0, 4]));
console.log(jump([2, 3, 0, 1, 4]));
