var findPrefixScore = function (nums) {
    let high = null
    let output = []
    let sum = 0
    for (const iterator of nums) {
        if (high === null || high < iterator) {
            high = iterator
        }
        sum += high + iterator
        output.push(sum)
    }
    return output
};

console.log(findPrefixScore(nums = [2, 3, 7, 5, 10]));
console.log(findPrefixScore(nums = [1, 1, 2, 4, 8, 16]));
console.log(findPrefixScore(nums = [9, 7, 4, 5, 2]));