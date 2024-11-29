var totalSteps = function (nums) {
    let max = nums[0];
    let tempMax = null;
    let postTempMax = null;
    let down = 0;
    let tempUpside = 0;
    let count = 0;
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if (max > element) {
            if (tempMax === null) {
                down = 1;
                tempMax = element;
            } else if (tempMax <= element) {
                tempMax = element;
                tempUpside++;
            } else {
                if (tempMax >= postTempMax) {
                    postTempMax = tempMax;
                } else {
                    tempMax = element;
                }
            }
        } else {
            max = element;
            count = Math.max(count, down + tempUpside);
            tempUpside = 0;
            down = 0;
            tempMax = null;
        }
    }
    count = Math.max(count, down + tempUpside);
    return count;
};

console.log(totalSteps((nums = [10, 1, 2, 3, 4, 5, 6, 1, 2, 3, 7])) === 7);

console.log(totalSteps((nums = [7, 5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11])) === 3);
console.log(totalSteps((nums = [10, 8, 13, 5, 12, 15, 2, 3, 13])) === 3);
console.log(totalSteps((nums = [4, 5, 7, 7, 13])) === 0);
console.log(totalSteps((nums = [7, 14, 4, 14, 13, 2, 6, 13])) === 3);
console.log(totalSteps((nums = [10, 8, 6])) === 1);
console.log(totalSteps((nums = [5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11])) === 3);
console.log(totalSteps((nums = [10, 1, 2, 3, 4, 5, 6, 1, 2, 3])) === 6);
