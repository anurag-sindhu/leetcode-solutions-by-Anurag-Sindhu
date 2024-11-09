var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    if (k <= numOnes) {
        return k;
    }
    let sum = 0;
    if (numOnes) {
        sum += numOnes;
        k -= numOnes;
    }
    if (k > 0 && numZeros) {
        k -= numZeros;
    }

    if (k > 0 && numNegOnes) {
        sum += k * -1;
    }
    return sum;
};

console.log(kItemsWithMaximumSum((numOnes = 6), (numZeros = 6), (numNegOnes = 6), (k = 13)) === 5);
console.log(kItemsWithMaximumSum((numOnes = 3), (numZeros = 2), (numNegOnes = 0), (k = 2)) === 2);
console.log(kItemsWithMaximumSum((numOnes = 3), (numZeros = 2), (numNegOnes = 0), (k = 4)) === 3);
