var lastVisitedIntegers = function (nums) {
    let seenIndex = -1;
    let seen = [];
    let ans = [];
    for (const iterator of nums) {
        if (iterator === -1) {
            ans.push(seen[seenIndex] || -1);
            seenIndex -= 1;
        } else {
            seen.push(iterator);
            seenIndex = seen.length - 1;
        }
    }
    return ans;
};

console.log(lastVisitedIntegers((nums = [1, -1, 2, -1, -1]))); // [1,2,1]
console.log(lastVisitedIntegers((nums = [1, 2, -1, -1, -1]))); // [2,1,-1]
