var countQuadruplets = function (nums) {
    let ways = 0;
    const twoNumbersCombination = [{}, {}];
    for (let index = 2; index < nums.length; index++) {
        for (let parentIndex = 0; parentIndex < index - 1; parentIndex++) {
            for (let childIndex = parentIndex + 1; childIndex < index; childIndex++) {
                const temp = nums[childIndex] + nums[parentIndex];
                if (!twoNumbersCombination[index]) {
                    twoNumbersCombination[index] = {};
                }
                if (twoNumbersCombination[index][temp] == undefined) {
                    twoNumbersCombination[index][temp] = 0;
                }
                twoNumbersCombination[index][temp] += 1;
            }
        }
    }
    for (let index = 3; index < nums.length; index++) {
        for (let prevIndex = 2; prevIndex < index; prevIndex++) {
            const prevSum = nums[prevIndex];
            const requiredSum = nums[index];
            if (twoNumbersCombination[prevIndex][requiredSum - prevSum]) {
                ways += twoNumbersCombination[prevIndex][requiredSum - prevSum];
            }
        }
    }

    return ways;
};

console.log(countQuadruplets((nums = [1, 1, 1, 3, 5])));
console.log(countQuadruplets((nums = [1, 2, 3, 6])));
console.log(countQuadruplets((nums = [3, 3, 6, 4, 5])));
