const binarySearch = (arr, target) => {
    let l = 0,
        r = arr.length - 1;
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l;
};

function nextGreaterIndex(arr, target) {
    let left = 0,
        right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // target exists
        }
        if (arr[mid] > target) {
            ans = mid; // potential answer
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans; // -1 if no greater element
}

function getClosestIndices(arr, target) {
    let left = 0,
        right = arr.length - 1;
    let smaller = -1,
        greater = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return { target: mid, smaller: mid, greater: mid };
        }

        if (arr[mid] < target) {
            smaller = mid; // best smaller so far
            left = mid + 1;
        } else {
            greater = mid; // best greater so far
            right = mid - 1;
        }
    }

    return { smaller, greater };
}

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

function binarySearch(arr, search, index = 0) {
    if (!arr.length || !search) {
        return 0;
    }
    const middleIndex = parseInt(arr.length / 2);
    if (arr[middleIndex] === search) {
        return index + middleIndex;
    } else if (arr[middleIndex] < search) {
        return binarySearch(arr.slice(middleIndex), search, index + middleIndex);
    } else {
        return binarySearch(arr.slice(0, middleIndex), search, index);
    }
}

const binarySearchMinIndexGreaterThanSearch = (arr, search) => {
    let left = 0,
        right = arr.length - 1,
        ans = null;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= search) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};

const binarySearchMinIndexLessThanSearch = (arr, search) => {
    let left = 0,
        right = arr.length - 1,
        ans = null;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= search) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};

console.log(binarySearch({ arr: [1, 2, 3, 4, 5, 6, 7], search: 6 }));
