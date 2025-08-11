var pivotArrayOne = function (nums, pivot) {
    const leftArr = [];
    const midArr = [];
    const rightArr = [];
    for (const element of nums) {
        if (pivot === element) {
            midArr.push(element);
        } else if (pivot > element) {
            leftArr.push(element);
        } else {
            rightArr.push(element);
        }
    }
    return [...leftArr, ...midArr, ...rightArr];
};

var pivotArray = function (nums, pivot) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let leftPointerRes = 0;
    let rightPointerRes = nums.length - 1;
    const arr = [];
    for (; leftPointer < nums.length, rightPointer >= 0; leftPointer++, rightPointer--) {
        if (pivot > nums[leftPointer]) {
            arr[leftPointerRes++] = nums[leftPointer];
        }
        if (pivot < nums[rightPointer]) {
            arr[rightPointerRes--] = nums[rightPointer];
        }
    }
    for (let index = leftPointerRes; index <= rightPointerRes; index++) {
        arr[index] = pivot;
    }

    return arr;
};

console.log(pivotArray((nums = [9, 12, 5, 10, 14, 3, 10]), (pivot = 10)));
console.log(pivotArray((nums = [-3, 4, 3, 2]), (pivot = 2)));
