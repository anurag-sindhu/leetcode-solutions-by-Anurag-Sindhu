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
console.log(binarySearch({ arr: [1, 2, 3, 4, 5, 6, 7], search: 6 }));
