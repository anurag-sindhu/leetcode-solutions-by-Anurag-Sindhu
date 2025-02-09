function isPrime(num) {
    for (let index = 2; index < num / 2; index++) {
        if (num % index === 0) {
            return false;
        }
    }
    return true;
}

var minSteps = function (n) {
    if (n == 1) {
        return 0;
    }
    if (isPrime(n)) {
        return n;
    }
    function start(num, sum = 0) {
        if (isPrime(num)) {
            return sum + num;
        }
        for (let index = 2; index < num / 2; index++) {
            if (num % index === 0) {
                return start(num / index, sum + index);
            }
        }
    }
    const resp = start(n);
    return resp;
};

console.log(minSteps(6) === 5);
console.log(minSteps(7) === 7);
console.log(minSteps(8) === 6);
console.log(minSteps(9) === 6);
console.log(minSteps(10) === 7);
console.log(minSteps(1) === 1);
console.log(minSteps(2) === 2);
console.log(minSteps(3) === 3);
console.log(minSteps(4) === 4);
console.log(minSteps(5) === 5);
