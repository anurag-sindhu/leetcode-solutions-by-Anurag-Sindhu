const binarySearchChooseSmallerIndex = (arr, target) => {
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

var closestCost = function (baseCosts, toppingCosts, target) {
    function addToppingCosts(index, obj = []) {
        if (index >= toppingCosts.length) {
            return [];
        }
        const temp = addToppingCosts(index + 1);
        if (temp.length) {
            for (const element of [0, 1, 2]) {
                for (const key of temp) {
                    obj.push(toppingCosts[index] * element + key);
                }
            }
        } else {
            for (const element of [0, 1, 2]) {
                obj.push(toppingCosts[index] * element);
            }
        }
        return obj;
    }
    const re = addToppingCosts(0);
    const obj = {};
    let prevDiff = Infinity;
    let prevTarget = Infinity;
    for (const element of re) {
        obj[element] = element;
    }
    const sortedKey = Object.keys(obj)
        .map((value) => Number(value))
        .sort((a, b) => a - b);
    for (const element of baseCosts) {
        const aa = binarySearchChooseSmallerIndex(sortedKey, target - element);
        const temp11 =
            sortedKey[aa - 1] != undefined
                ? Math.abs(target - (sortedKey[aa - 1] + element))
                : Infinity;
        const temp1 =
            sortedKey[aa] !== undefined ? Math.abs(target - (sortedKey[aa] + element)) : Infinity;
        if (temp1 === temp11) {
            if (temp1 <= prevDiff) {
                prevTarget = sortedKey[aa - 1] + element;
                prevDiff = temp1;
            } else if (temp1 <= prevDiff) {
                prevTarget = Math.min(sortedKey[aa - 1] + element, prevTarget);
                prevDiff = temp1;
            }
        } else if (temp1 > temp11) {
            if (temp1 < prevDiff) {
                prevTarget = sortedKey[aa - 1] + element;
                prevDiff = temp11;
            } else if (temp11 <= prevDiff) {
                prevTarget = Math.min(sortedKey[aa - 1] + element, prevTarget);
                prevDiff = temp11;
            }
        } else {
            if (temp1 < prevDiff) {
                prevTarget = sortedKey[aa] + element;
                prevDiff = temp1;
            } else if (temp1 <= prevDiff) {
                prevTarget = Math.min(prevTarget, sortedKey[aa] + element);
                prevDiff = temp1;
            }
        }
    }
    return prevTarget;
};

console.log(closestCost((baseCosts = [2, 3]), (toppingCosts = [4, 5, 100]), (target = 18)) === 17);
console.log(closestCost((baseCosts = [1, 7]), (toppingCosts = [3, 4]), (target = 10)) === 10);
console.log(
    closestCost(
        (baseCosts = [8, 4, 4, 5, 8]),
        (toppingCosts = [3, 10, 9, 10, 8, 10, 10, 9, 3]),
        (target = 6),
    ) === 5,
);
console.log(closestCost((baseCosts = [3, 2]), (toppingCosts = [3]), (target = 10)) === 9);
console.log(closestCost((baseCosts = [3, 10]), (toppingCosts = [2, 5]), (target = 9)) === 8);
console.log(closestCost((baseCosts = [1, 7]), (toppingCosts = [3, 4]), (target = 10)) === 10);

console.log(
    closestCost(
        (baseCosts = [1, 7]),
        (toppingCosts = [3, 4, 5, 6, 7, 8, 6, 7, 8, 8]),
        (target = 10),
    ) === 10,
);
