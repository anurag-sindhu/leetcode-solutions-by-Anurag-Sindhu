var minimumRecolors = function (blocks, k) {
    let finalChangeRequire = '';
    let tempStore = '';
    let changeRequire = (function () {
        let tempK = k;
        let count = 0;
        let index = 0;
        while (tempK--) {
            if (blocks[index] === 'W') {
                count++;
            }
            tempStore += blocks[index++];
        }
        return count;
    })();
    let tempChangeRequire = changeRequire;
    for (let index = k; index < blocks.length; index++) {
        if (blocks[index - k] === 'W') {
            tempChangeRequire -= 1;
        }
        if (blocks[index] === 'W') {
            tempChangeRequire += 1;
        }
        if (tempChangeRequire < changeRequire) {
            changeRequire = tempChangeRequire;
        }
    }
    return changeRequire;
};

console.log(minimumRecolors('BWBBWWBBBWBWWWBWWBBWBWBBWBB', 11));
console.log(minimumRecolors((blocks = 'WBWBBBW'), (k = 2)));
console.log(minimumRecolors((blocks = 'WBBWWBBWBW'), (k = 7)));
