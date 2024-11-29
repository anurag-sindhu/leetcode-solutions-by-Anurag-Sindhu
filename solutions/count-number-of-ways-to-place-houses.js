var countHousePlacements = function (n) {
    const mod = Math.pow(10, 9) + 7;
    let first = 2 % mod;
    let second = 3 % mod;
    if (n === 1) {
        return first * first;
    }
    if (n === 2) {
        return second * second;
    }
    for (let index = 3; index < n; index++) {
        const store = (first + second) % mod;
        first = second % mod;
        second = store % mod;
    }
    const resp = ((first + second) * (first + second)) % mod;
    return resp;
};

console.log(countHousePlacements(50) == 245481867);
console.log(countHousePlacements(100) == 20522904);
console.log(countHousePlacements(1000) == 500478595);
console.log(countHousePlacements(10) == 20736);
console.log(countHousePlacements(9) == 7921);
console.log(countHousePlacements(8) == 3025);
console.log(countHousePlacements(7) == 1156);
console.log(countHousePlacements(4) == 64);
console.log(countHousePlacements(10));
console.log(countHousePlacements(1));
console.log(countHousePlacements(2));
console.log(countHousePlacements(3));
/*
1->4     2
2->9     3
3->25     5
4->64     8
5->169     13
6->441     21
7->1156    34
8->3025    55
9->7921    89
10->20736  144
*/
