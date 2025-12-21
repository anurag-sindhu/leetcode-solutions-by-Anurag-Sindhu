var maxSlidingWindow = function (nums, k) {
    const output = [];
    const dequeue = [];
    let numsIndex = 0;
    let numsInDequeIndex = 0;
    while (numsIndex < nums.length) {
        if (numsInDequeIndex >= k) {
            dequeue.shift();
        } else {
            numsInDequeIndex += 1;
        }
        let lastElementOfDeque = nums[numsIndex];
        let lastToLastElementOfDeque = dequeue[dequeue.length - 1];
        while (lastElementOfDeque > lastToLastElementOfDeque) {
            dequeue.pop();
            numsInDequeIndex--;
            lastToLastElementOfDeque = dequeue[dequeue.length - 1];
        }
        dequeue.push(nums[numsIndex]);
        output.push(dequeue[0]);
        numsIndex += 1;
    }
    output.splice(0, k - 1);
    return output;
};

console.log(maxSlidingWindow((nums = [1, 3, 1, 2, 0, 5]), (k = 3))); //[3,3,2,5]
console.log(maxSlidingWindow((nums = [4, 2, 3, 7, 8, 9]), (k = 2)));
console.log(maxSlidingWindow((nums = [1, 3, 4, -3, 5, 3, 6, 7]), (k = 2)));
console.log(maxSlidingWindow((nums = [1, 3, -1, -3, 5, 3, 6, 7]), (k = 3)));
console.log(maxSlidingWindow((nums = [4, 2, 1, 7, 8, 9]), (k = 2)));
console.log(maxSlidingWindow((nums = [2, 7, 8, 9]), (k = 2)));
console.log(maxSlidingWindow((nums = [7, 2, 4]), (k = 2)));
console.log(maxSlidingWindow((nums = [8, 7, 6, 9]), (k = 2)));
console.log(maxSlidingWindow((nums = [1]), (k = 1)));
