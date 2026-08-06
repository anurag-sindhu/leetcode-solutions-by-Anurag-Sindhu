var maxSlidingWindow = function (nums, k) {
    const q = []; // stores *indices*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;
};

console.log(maxSlidingWindow((nums = [1, 3, -1, -3, 5, 3, 6, 7]), (k = 3)));
console.log(maxSlidingWindow((nums = [1, 3, 1, 2, 0, 5]), (k = 3))); //[3,3,2,5]
console.log(maxSlidingWindow((nums = [4, 2, 3, 7, 8, 9]), (k = 2)));
console.log(maxSlidingWindow((nums = [1, 3, 4, -3, 5, 3, 6, 7]), (k = 2)));
console.log(maxSlidingWindow((nums = [4, 2, 1, 7, 8, 9]), (k = 2)));
console.log(maxSlidingWindow((nums = [2, 7, 8, 9]), (k = 2)));
console.log(maxSlidingWindow((nums = [7, 2, 4]), (k = 2)));
console.log(maxSlidingWindow((nums = [8, 7, 6, 9]), (k = 2)));
console.log(maxSlidingWindow((nums = [1]), (k = 1)));
