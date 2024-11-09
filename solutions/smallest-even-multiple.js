var smallestEvenMultiple = function (n) {
    if (n === 1 || n === 2) {
        return 2;
    }
    if (n % 2 === 0) {
        return n;
    }
    return n * 2;
};

console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(6));
console.log(smallestEvenMultiple(2));
