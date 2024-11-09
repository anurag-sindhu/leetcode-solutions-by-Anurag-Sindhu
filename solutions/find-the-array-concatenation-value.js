var findTheArrayConcVal = function(nums) {
    let store = 0;
    if (nums.length % 2 === 0) {
        for (let index = 0; index < nums.length / 2; index++) {
            store += parseInt(`${nums[index]}${nums[nums.length - index - 1]}`);
        }
    } else {
        for (let index = 0; index < parseInt(nums.length / 2); index++) {
            store += parseInt(`${nums[index]}${nums[nums.length - index - 1]}`);
        }
        store += nums[Math.floor(nums.length / 2)];
    }
    return store;
};

console.log(findTheArrayConcVal((nums = [7, 52, 2, 4])));
console.log(findTheArrayConcVal((nums = [5, 14, 13, 8, 12])));
