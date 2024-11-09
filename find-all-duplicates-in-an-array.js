var findDuplicates = function(nums) {
    let start = 0;
    const range = Math.pow(10, 5);
    const duplicate = [];
    while (start < range) {
        function set(tempIndex, canSet = false) {
            if (tempIndex == undefined) {
                return;
            }
            if (nums[tempIndex] === tempIndex) {
                duplicate.push(tempIndex);
                return;
            }
            const save = nums[tempIndex];
            if (canSet) {
                nums[tempIndex] = tempIndex;
            } else {
                nums[tempIndex] = undefined;
            }
            set(save, true);
        }
        if (start !== nums[start]) {
            set(start);
        }
        start++;
    }
    return duplicate;
};

console.log(findDuplicates((nums = [4, 3, 2, 7, 8, 2, 3, 1])));
console.log(findDuplicates((nums = [1, 1, 2])));
console.log(findDuplicates((nums = [1])));
