var minimumDifference = function (nums) {
    nums.sort((a, b) => a - b);
    let firstPointer = 0;
    let lastPointer = nums.length - 1;
    let firstArraySum = -Infinity;
    let secondArraySum = -Infinity;
    while (firstPointer < lastPointer) {
        if (firstArraySum >= secondArraySum) {
            if (firstArraySum === -Infinity) {
                firstArraySum = nums[firstPointer++];
            } else {
                console.log('object');
            }
        } else {
            if (secondArraySum === -Infinity) {
                console.log('object');
            } else {
                console.log('object');
            }
        }
    }
    return;
};

console.log(minimumDifference((nums = [-9, -2, -1, 0, 2, 4])));
console.log(minimumDifference((nums = [2, -1, 0, 4, -2, -9])));
console.log(minimumDifference((nums = [3, 9, 7, 3])));
console.log(minimumDifference((nums = [-36, 36])));
