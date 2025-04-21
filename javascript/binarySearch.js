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
