function isPrime(num) {
    for (let index = 2; index < parseInt(num / 2); index++) {
        if (num % index === 0) {
            return false;
        }
    }
    return true;
}

var diagonalPrime = function(nums) {
    let maxPrimeNumber = 0;
    for (let index = 0; index < nums.length; index++) {
        const currentNum = nums[index][index];
        if (currentNum === 1) {
            continue;
        }
        if (isPrime(currentNum)) {
            if (maxPrimeNumber < currentNum) {
                maxPrimeNumber = currentNum;
            }
        }
    }

    for (let index = 0; index < nums.length; index++) {
        const columnIndex = nums.length - 1 - index;
        const currentNum = nums[index][columnIndex];
        if (currentNum === 1) {
            continue;
        }
        if (nums.length % 2 !== 0) {
            if (index !== columnIndex) {
                if (isPrime(currentNum)) {
                    if (maxPrimeNumber < currentNum) {
                        maxPrimeNumber = currentNum;
                    }
                }
            }
        } else {
            if (isPrime(currentNum)) {
                if (maxPrimeNumber < currentNum) {
                    maxPrimeNumber = currentNum;
                }
            }
        }
    }
    return maxPrimeNumber;
};

console.log(diagonalPrime((nums = [[1, 1, 1], [1, 1, 1], [1, 1, 1]])));
console.log(diagonalPrime((nums = [[1, 2, 3], [5, 6, 7], [9, 10, 11]])));
console.log(diagonalPrime((nums = [[1, 2, 3], [5, 17, 7], [9, 11, 10]])));
