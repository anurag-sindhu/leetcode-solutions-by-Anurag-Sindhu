var maximumTotalSum = function (maximumHeight) {
    maximumHeight.sort((a, b) => a - b);
    let prevNumber = null;
    let sum = 0;
    for (let index = maximumHeight.length - 1; index >= 0; index--) {
        const element = maximumHeight[index];
        if (prevNumber == null) {
            sum += element;
            prevNumber = element - 1;
        } else {
            if (prevNumber <= 0) {
                return -1;
            }
            if (element > prevNumber) {
                sum += prevNumber;
                prevNumber -= 1;
            } else if (element < prevNumber) {
                sum += element;
                prevNumber = element - 1;
            } else {
                sum += prevNumber;
                prevNumber -= 1;
            }
        }
    }
    return sum;
};

console.log(maximumTotalSum((maximumHeight = [6, 6, 6, 3, 7, 2, 6, 5])) == -1);
console.log(maximumTotalSum((maximumHeight = [2, 3, 4, 3])));
console.log(maximumTotalSum((maximumHeight = [15, 10])));
console.log(maximumTotalSum((maximumHeight = [2, 2, 1])));
