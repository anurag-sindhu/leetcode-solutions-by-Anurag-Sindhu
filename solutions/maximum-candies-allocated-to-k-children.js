var maximumCandies = function (candies, k) {
    let min = 1,
        max = Math.max(...candies);
    let count = 0;
    while (max >= min) {
        const mid = Math.floor((max + min) / 2);
        const totalPossible = candies.reduce((acc, curr) => acc + Math.floor(curr / mid), 0);
        if (totalPossible >= k) {
            min = mid + 1;
            count = Math.max(count, mid);
        } else {
            max = mid - 1;
        }
    }
    return count;
};

console.log(maximumCandies((candies = [100, 99, 7, 6]), (k = 4)));
console.log(maximumCandies((candies = [4, 7, 5]), (k = 4)));
console.log(maximumCandies((candies = [2, 5, 15]), (k = 11)));
console.log(maximumCandies((candies = [2, 5, 4]), (k = 11)) === 1);
console.log(maximumCandies((candies = [5, 8, 6, 5, 8, 6]), (k = 3)));
console.log(maximumCandies((candies = [5, 8, 6]), (k = 3)));
console.log(maximumCandies((candies = [2, 5]), (k = 11)));
