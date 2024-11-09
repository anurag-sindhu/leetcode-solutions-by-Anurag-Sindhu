var maxProductDifference = function (data) {
    let biggestNumber = -Infinity;
    let secondBiggestNumber = -Infinity;
    for (let index = 0; index < data.length; index++) {
        if (data[index] >= biggestNumber) {
            secondBiggestNumber = biggestNumber;
            biggestNumber = data[index];
        } else if (data[index] > secondBiggestNumber && data[index] !== biggestNumber) {
            secondBiggestNumber = data[index];
        }
    }
    let smallestNumber = Infinity;
    let secondSmallestNumber = Infinity;
    for (let index = 0; index < data.length; index++) {
        if (data[index] <= smallestNumber) {
            secondSmallestNumber = smallestNumber;
            smallestNumber = data[index];
        } else if (data[index] < secondSmallestNumber && data[index] !== smallestNumber) {
            secondSmallestNumber = data[index];
        }
    }
    return secondBiggestNumber * biggestNumber - smallestNumber * secondSmallestNumber;
};

console.log(maxProductDifference((nums = [10, 10, 10, 10])));
console.log(maxProductDifference((nums = [5, 6, 2, 7, 4])));
console.log(maxProductDifference((nums = [4, 2, 5, 9, 7, 4, 8])));
