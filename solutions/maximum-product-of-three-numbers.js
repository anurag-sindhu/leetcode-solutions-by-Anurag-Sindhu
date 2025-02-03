var maximumProduct = function (arr) {
    if (arr.length === 3) {
        return arr[0] * arr[1] * arr[2];
    }
    const negativeNumbers = [];
    const positiveNumbers = [];
    for (const element of arr) {
        if (element < 0) {
            negativeNumbers.push(element);
        } else {
            positiveNumbers.push(element);
        }
    }
    negativeNumbers.sort((a, b) => a - b);
    positiveNumbers.sort((a, b) => a - b);
    if (positiveNumbers.length && negativeNumbers.length) {
        if (positiveNumbers.length >= 3) {
            if (negativeNumbers.length >= 2) {
                return Math.max(
                    negativeNumbers[0] *
                        negativeNumbers[1] *
                        positiveNumbers[positiveNumbers.length - 1],
                    positiveNumbers[positiveNumbers.length - 1] *
                        positiveNumbers[positiveNumbers.length - 2] *
                        positiveNumbers[positiveNumbers.length - 3],
                );
            } else {
                return (
                    positiveNumbers[positiveNumbers.length - 1] *
                    positiveNumbers[positiveNumbers.length - 2] *
                    positiveNumbers[positiveNumbers.length - 3]
                );
            }
        } else {
            return (
                negativeNumbers[0] *
                negativeNumbers[1] *
                positiveNumbers[positiveNumbers.length - 1]
            );
        }
    } else {
        if (positiveNumbers.length) {
            return (
                positiveNumbers[positiveNumbers.length - 1] *
                positiveNumbers[positiveNumbers.length - 2] *
                positiveNumbers[positiveNumbers.length - 3]
            );
        }
        return (
            negativeNumbers[negativeNumbers.length - 1] *
            negativeNumbers[negativeNumbers.length - 2] *
            negativeNumbers[negativeNumbers.length - 3]
        );
    }
};
console.log(maximumProduct([-1, -2, -3, -4]) == -6);
console.log(maximumProduct([-100, -2, -3, 1]) === 300);
console.log(maximumProduct([1, 2, 3, 4]) == 24);
console.log(maximumProduct([1, 2, 3]) == 6);
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]) === 39200);
console.log(maximumProduct([-1, -2, -3]) == -6);
