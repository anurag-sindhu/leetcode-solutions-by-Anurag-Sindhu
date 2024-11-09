var minimumOperations = function (nums) {
    const memo = {};
    function helper(nums) {
        let key = '';
        for (const iterator of nums) {
            key += `${iterator}`;
        }
        if (memo[key] != undefined) {
            return memo[key];
        }
        if (nums.length === 1) {
            return 0;
        }
        if (nums.length === 2) {
            if (nums[0] <= nums[1]) {
                return 0;
            }
            return 1;
        }
        if (nums.length === 3) {
            if (nums[0] <= nums[1] && nums[1] <= nums[2]) {
                return 0;
            }
            if (nums[0] <= nums[1]) {
                return 1;
            }
            if (nums[0] <= nums[2]) {
                return 1;
            }
            if (nums[1] <= nums[2]) {
                return 1;
            }
            return 2;
        }
        for (let index = 1; index < nums.length; index++) {
            if (nums[index] < nums[index - 1]) {
                if (index === nums.length - 1) {
                    return 1;
                } else {
                    const res =
                        1 +
                        Math.min(
                            //what if we skip the left num
                            helper([...nums.slice(0, index - 1), ...nums.slice(index)]),
                            //what if we skip the current num
                            helper([...nums.slice(0, index), ...nums.slice(index + 1)]),
                            //what if we skip the right num
                            helper([...nums.slice(0, index + 1), ...nums.slice(index + 1 + 1)]),
                        );
                    memo[key] = res;
                    return res;
                }
            }
        }
        return 0;
    }
    return helper(nums);
};
let res;
res = minimumOperations(
    (nums = [
        3, 1, 3, 3, 2, 1, 2, 3, 2, 1, 3, 2, 2, 3, 2, 1, 3, 1, 2, 1, 1, 1, 1, 3, 2, 3, 3, 2, 2, 3, 2,
        1, 1, 2, 2, 1, 1, 1, 3, 3, 3, 3, 2, 1, 1, 3,
    ]),
);
console.log(res === 26);
res = minimumOperations((nums = [2, 3, 2, 1, 3, 2, 3, 2, 3, 3, 1, 1, 2, 3, 1, 2, 1, 3]));
console.log(res === 10);
res = minimumOperations((nums = [2, 1, 3, 2, 1]));
console.log(res === 3);
res = minimumOperations((nums = [2, 1, 2, 2, 2, 3, 3, 2, 1, 1, 2, 2, 3, 3, 1, 2, 2, 1]));
console.log(res === 9);
res = minimumOperations((nums = [1, 1, 3, 2]));
console.log(res === 1);
res = minimumOperations((nums = [3, 2]));
console.log(res === 1);
res = minimumOperations((nums = [2, 2, 2, 2, 3, 3]));
console.log(res === 0);
res = minimumOperations((nums = [1, 3, 2, 1, 3, 3]));
console.log(res === 2);
console.log(minimumOperations((nums = [1, 2, 3, 3, 3])) === 0);
console.log(minimumOperations((nums = [3, 2, 3])) === 1);
