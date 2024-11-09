var maximumStrongPairXor = function (nums) {
    let max = 0;
    const array = nums.sort((a, b) => a - b);
    for (let firstPointer = 0; firstPointer < array.length - 1; firstPointer++) {
        for (let secondPointer = firstPointer + 1; secondPointer < array.length; secondPointer++) {
            const min = Math.min(array[secondPointer], array[firstPointer]);
            const diff = Math.abs(array[secondPointer] - array[firstPointer]);
            if (min >= diff) {
                max = Math.max(array[secondPointer] ^ array[firstPointer], max);
            } else {
                break;
            }
        }
    }
    return max;
};

console.log(maximumStrongPairXor((nums = [5, 15, 25, 35, 50])));
console.log(maximumStrongPairXor((nums = [10, 100])));
console.log(maximumStrongPairXor((nums = [1, 2, 3, 4, 5])));
console.log(maximumStrongPairXor((nums = [5, 6, 25, 30])));
