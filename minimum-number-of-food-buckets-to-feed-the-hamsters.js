var minimumBuckets = function (hamsters) {
    let foodBucket = 0;
    let previousFoodAvailableIndex = null;
    for (let index = 0; index < hamsters.length; index++) {
        if (hamsters[index] === 'H') {
            if (hamsters[index + 1] === '.' || hamsters[index - 1] === '.') {
                if (index - 1 === previousFoodAvailableIndex) {
                    continue;
                } else {
                    foodBucket += 1;
                    previousFoodAvailableIndex = index + 1;
                }
            } else {
                return -1;
            }
        }
    }
    return foodBucket;
};

console.log(minimumBuckets((hamsters = '.H...HH.')) === 3);
console.log(minimumBuckets((hamsters = 'H')) === -1);
console.log(minimumBuckets((hamsters = '.H.H.')) === 1);
console.log(minimumBuckets((hamsters = '.H.HH.')) === 2);
console.log(minimumBuckets((hamsters = '.H....HH....HH.HH.')) === 6);
console.log(minimumBuckets((hamsters = 'H..H')) === 2);
console.log(minimumBuckets((hamsters = '.HH.HHH')) === -1);
console.log(minimumBuckets((hamsters = '.HHH.')) === -1);
