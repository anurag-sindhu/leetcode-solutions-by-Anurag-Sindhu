var checkValidString1 = function (s) {
    let lo = 0;
    let hi = 0;

    for (let char of s) {
        if (char === '(') {
            hi++;
            lo++;
            continue;
        }

        if (char === ')') {
            if (hi === 0) {
                return false;
            }
            hi--;
            lo = Math.max(0, lo - 1);
            continue;
        }

        hi++;
        lo = Math.max(0, lo - 1);
    }

    return lo === 0;
};
var checkValidString = function (s) {
    let open = 0;
    let close = 0;
    let star = 0;
    const arr = [];

    for (let char of s) {
        if (char === '(') {
            open += 1;
        } else if (char === ')') {
            close += 1;
        } else {
            star += 1;
        }
        arr.push({ open, close, star });
        if (star == 0) {
            if (close > open) {
                return false;
            }
        } else {
            if (close > open) {
                if (!(star >= close - open)) {
                    return false;
                }
            }
        }
    }
    if (open !== close) {
        if (Math.abs(open - close) > star) {
            return false;
        }
    }
    return true;
};

console.log(checkValidString('(((((*(((((*((**(((*)*((((**))*)*)))))))))((*(((((**(**)') == false);
console.log(checkValidString('(((((*(((((*((**(((*)*((((**))*)*)))))))))((*(((((**(**)') == false);
console.log(
    checkValidString(
        '(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())',
    ) == false,
);
console.log(checkValidString('())**') == false);
console.log(checkValidString('(*))') == true);
console.log(checkValidString('(*)') == true);
console.log(checkValidString('()') == true);
console.log(checkValidString('((((**)') == false);
console.log(checkValidString('*())') == false);
console.log(checkValidString('(*))') == true);
