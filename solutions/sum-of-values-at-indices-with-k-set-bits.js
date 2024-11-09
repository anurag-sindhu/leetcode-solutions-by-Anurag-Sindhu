function generateBitsBinarySeries(upto) {
    let count = 1;
    let defaultBlockSize = 2;
    let currentBlockIndex = 1;
    const start = 1;
    const arr = [0, start];
    while (count <= upto) {
        if (currentBlockIndex < defaultBlockSize) {
            arr.push(arr[currentBlockIndex++]);
        } else {
            arr.push(arr[currentBlockIndex++] + 1);
        }
        count++;
        if (defaultBlockSize * 2 === count + 1) {
            currentBlockIndex = defaultBlockSize;
            defaultBlockSize = defaultBlockSize * 2;
        }
    }
    return arr;
}

var sumIndicesWithKSetBits = function (nums, k) {
    const series = generateBitsBinarySeries(nums.length);
    let sum = 0;
    for (let index = 0; index < nums.length; index++) {
        if (series[index] === k) {
            sum += nums[index];
        }
    }
    return sum;
};
console.log(sumIndicesWithKSetBits((nums = [5, 10, 1, 5, 2]), (k = 1)));
console.log(sumIndicesWithKSetBits((nums = [4, 3, 2, 1]), (k = 2)));
