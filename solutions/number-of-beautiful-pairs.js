function __gcd(a, b) {
    // Everything divides 0
    if (a == 0 || b == 0) return 0;

    // Base case
    if (a == b) return a;

    // a is greater
    if (a > b) return __gcd(a - b, b);

    return __gcd(a, b - a);
}

var countBeautifulPairs = function (nums) {
    let count = 0;
    for (let index = 0; index < nums.length - 1; index++) {
        for (let secondaryIndex = index + 1; secondaryIndex < nums.length; secondaryIndex++) {
            const firstStr = nums[index].toString()[0];
            let secondStr = nums[secondaryIndex].toString();
            secondStr = secondStr[secondStr.length-1];
            let [bigNum, smallNum] =
                firstStr > secondStr
                    ? [Number(firstStr), Number(secondStr)]
                    : [Number(secondStr), Number(firstStr)];
            if (__gcd(bigNum, smallNum) === 1) {
                count += 1;
            }
        }
    }
    return count;
};

console.log(countBeautifulPairs((nums = [11, 21, 12])) == 2);
console.log(countBeautifulPairs((nums = [2, 5, 1, 4])) === 5);
console.log(countBeautifulPairs((nums = [31, 25, 72, 79, 74])) === 7);
