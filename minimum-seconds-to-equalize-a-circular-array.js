var minimumSeconds = function (nums) {
    const distMapping = {};
    const lastIndexMapping = {};
    for (let index = 0; index < nums.length; index++) {
        if (!lastIndexMapping[nums[index]]) {
            lastIndexMapping[nums[index]] = { start: index };
        } else {
            const dist = Math.max(
                index - lastIndexMapping[nums[index]].start,
                index - (lastIndexMapping[nums[index]].last || Infinity),
                nums.length - index + lastIndexMapping[nums[index]].start,
            );
            lastIndexMapping[nums[index]].last = index;
            distMapping[nums[index]] = dist;
        }
    }
    if (Object.values(distMapping).length === 0) {
        return Math.floor(nums.length / 2);
    }

    if (Object.values(lastIndexMapping).length === 1) {
        return 0;
    }
    return Math.floor(Math.max(...Object.values(distMapping)) / 2);
};

console.log(minimumSeconds((nums = [8, 8, 9, 10, 9])) === 1);
console.log(minimumSeconds((nums = [4, 3, 3])) === 1);
console.log(minimumSeconds((nums = [4, 18])) === 1);
console.log(minimumSeconds((nums = [5, 5, 5, 5])) === 0);
console.log(minimumSeconds((nums = [2, 1, 3, 3, 2])) === 2);
console.log(minimumSeconds((nums = [1, 2, 1, 2])) === 1);
console.log(minimumSeconds((nums = [2, 1, 3, 2, 3])) === 1);
