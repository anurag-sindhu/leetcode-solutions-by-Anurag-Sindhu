var numberOfSubstrings = function (s) {
    const a = [];
    const b = [];
    const c = [];
    let aIndex = 0;
    let bIndex = 0;
    let cIndex = 0;
    let count = 0;

    for (let index = 0; index < s.length; index++) {
        if (s[index] === 'a') {
            a.push(index);
        } else if (s[index] === 'b') {
            b.push(index);
        } else {
            c.push(index);
        }
    }
    while (true) {
        const aa = a[aIndex];
        const bb = b[bIndex];
        const cc = c[cIndex];
        if (aa == undefined || bb == undefined || cc == undefined) {
            break;
        }
        const max = Math.max(aa, bb, cc);
        const min = Math.min(aa, bb, cc);
        count += 1;
        count += s.length - max - 1;
        if (min == aa) {
            aIndex += 1;
        } else if (min == bb) {
            bIndex += 1;
        } else {
            cIndex += 1;
        }
    }
    return count;
};

console.log(numberOfSubstrings((s = 'abcabc')));
console.log(numberOfSubstrings((s = 'aaacb')));
/**
 a:0,3
 b:1,4
 c:2,5
 */

/**
 a:0,1,2
 c:3
 b:4
 */
console.log(numberOfSubstrings((s = 'abc')));
