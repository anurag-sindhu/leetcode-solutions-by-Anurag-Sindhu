const binarySearch = (arr, target) => {
    let l = 0,
        r = arr.length - 1;
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (arr[mid] >= target) {
            r = mid - 1;
        } else if (arr[mid] < target) {
            l = mid + 1;
        }
    }
    return l;
};

var successfulPairs = function (spells, potions, success) {
    const arr = [];
    potions.sort((a, b) => a - b);
    for (const element of spells) {
        const target = Math.ceil(success / element);
        let aa = binarySearch(potions, target);
        while (potions[aa - 1] === target) {
            aa -= 1;
        }
        arr.push(potions.length - aa);
    }
    return arr;
};

console.log(
    successfulPairs(
        [
            15, 39, 38, 35, 33, 25, 31, 12, 40, 27, 29, 16, 22, 24, 7, 36, 29, 34, 24, 9, 11, 35,
            21, 3, 33, 10, 9, 27, 35, 17, 14, 3, 35, 35, 39, 23, 35, 14, 31, 7,
        ],
        [
            25, 19, 30, 37, 14, 30, 38, 22, 38, 38, 26, 33, 34, 23, 40, 28, 15, 29, 36, 39, 39, 37,
            32, 38, 8, 17, 39, 20, 4, 39, 39, 7, 30, 35, 29, 23,
        ],
        317,
    ),
);
console.log(successfulPairs((spells = [5, 1, 3]), (potions = [1, 2, 3, 4, 5]), (success = 7)));
console.log(successfulPairs((spells = [3, 1, 2]), (potions = [8, 5, 8]), (success = 16)));
