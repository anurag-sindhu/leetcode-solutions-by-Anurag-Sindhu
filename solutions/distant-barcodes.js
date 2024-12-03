function swap(arr, fromIndex, toIndex) {
    const store = arr[fromIndex];
    arr[fromIndex] = arr[toIndex];
    arr[toIndex] = store;
    return;
}
var rearrangeBarcodes = function (barcodes) {
    const obj = (function () {
        const obj = {};
        for (const element of barcodes) {
            if (obj[element] === undefined) {
                obj[element] = 0;
            }
            obj[element] += 1;
        }
        return obj;
    })();
    const reverseObj = (function () {
        const obj1 = {};
        for (const element in obj) {
            if (obj1[obj[element]] === undefined) {
                obj1[obj[element]] = [];
            }
            obj1[obj[element]].push(element);
        }
        return obj1;
    })();

    const restore = [];
    const sorted = Object.keys(reverseObj)
        .map((value) => Number(value))
        .sort((a, b) => b - a);
    for (const element of sorted) {
        for (const childElement of reverseObj[element]) {
            for (let index = 0; index < element; index++) {
                restore.push(Number(childElement));
            }
        }
    }
    let firstIndex = 1;
    let secondIndex =
        (function () {
            let index = 0;
            const first = restore[0];
            for (; index < restore.length; index++) {
                if (first !== restore[index]) {
                    break;
                }
            }
            return index;
        })() + 1;
    while (firstIndex < barcodes.length) {
        if (restore[firstIndex] === restore[firstIndex + 1]) {
            while (restore[firstIndex] === restore[secondIndex]) {
                secondIndex++;
            }
            swap(restore, firstIndex, secondIndex++);
        }
        firstIndex++;
    }
    return restore;
};

console.log(rearrangeBarcodes((barcodes = [5, 5, 5, 5, 7, 7, 7, 7, 8, 8]))); //[5,7,5,7,5,7,5,8,7,8]
console.log(rearrangeBarcodes((barcodes = [7, 7, 7, 8, 5, 7, 5, 5, 5, 8]))); //[5,7,5,7,5,7,5,8,7,8]
console.log(rearrangeBarcodes((barcodes = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3])));
console.log(rearrangeBarcodes((barcodes = [1, 1, 2, 2, 3, 3, 3, 3, 3])));
console.log(
    rearrangeBarcodes((barcodes = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3])),
);
console.log(rearrangeBarcodes((barcodes = [1, 1, 1, 1, 2, 2, 3, 3])));
