var passThePillow = function(n, time) {
    const updatedN = n - 1;
    const rotation = parseInt(time / updatedN);
    const left = time % updatedN;
    if (rotation % 2) {
        return n - left;
    } else {
        return 1 + left;
    }
};

console.log(passThePillow((n = 4), (time = 7)) === 2);
console.log(passThePillow((n = 4), (time = 6)) === 1);
console.log(passThePillow((n = 4), (time = 3)) === 4);
console.log(passThePillow((n = 4), (time = 5)) === 2);
console.log(passThePillow((n = 3), (time = 2)) === 3);
