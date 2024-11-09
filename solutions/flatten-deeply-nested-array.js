var flat = function (arr, n, tempArray = [], currentCycle = 0) {
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index]) && currentCycle < n) {
            flat(arr[index], n, tempArray, currentCycle + 1)
        } else {
            tempArray.push(arr[index])
        }
    }
    return tempArray
};

let resp = null
resp = flat(arr = [[7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 1)
console.log(resp);
resp = flat(arr = [[4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 1)
console.log(resp);
resp = flat(arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 1)
console.log(resp);
resp = flat(arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 0)
console.log(resp);
resp = flat(arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 2)
console.log(resp);