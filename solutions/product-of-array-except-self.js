var productExceptSelf = function (nums) {
    let isZeroPresent = false;
    let zeroCount = false;
    const total = nums.reduce((acc, curr) => {
        if (curr != 0) {
            return curr * acc;
        }
        zeroCount += 1;
        isZeroPresent = true;
        return acc;
    }, 1);
    console.log(total);
    for (let index = 0; index < nums.length; index++) {
        if (zeroCount > 1) {
            nums[index] = 0;
        } else {
            if (isZeroPresent) {
                if (nums[index] == 0) {
                    nums[index] = total;
                } else {
                    nums[index] = 0;
                }
            } else {
                nums[index] = total / nums[index];
            }
        }
    }
    return nums;
};

console.log(productExceptSelf([0, 2, 3, 4])); //[24,0,0,0]
console.log(productExceptSelf([2, 3, 0, 0])); //[0,0,0,0]
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(0, 2));
console.log(arr.splice(0, 2));
