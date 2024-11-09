var minNonZeroProduct = function (p) {
    const totalPossibilities = Math.pow(2, p) - 1;
    const qqq = Math.pow(2, p - 1) - 1;
    const diffByOne = totalPossibilities - 1;
    let prod = 1;
    for (let index = 0; index < qqq; index++) {
        if (diffByOne) {
            prod = (prod * diffByOne) % (Math.pow(10, 9) + 7);
        }
    }
    prod = (prod * totalPossibilities) % (Math.pow(10, 9) + 7);
    return prod;
};

console.log(minNonZeroProduct(5) === 202795991);
console.log(minNonZeroProduct(25) === 513022074);
console.log(minNonZeroProduct(2) === 6);
console.log(minNonZeroProduct(3) === 1512);
console.log(minNonZeroProduct(1) === 1);
console.log(minNonZeroProduct(5) === 202795991);
