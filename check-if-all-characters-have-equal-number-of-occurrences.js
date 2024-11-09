var areOccurrencesEqual = function (s) {
    const obj = {};
    for (let index = 0; index < s.length; index++) {
        if (!obj[s[index]]) {
            obj[s[index]] = 0;
        }
        obj[s[index]] += 1;
    }
    let quantity = null;
    for (const key in obj) {
        if (quantity === null) {
            quantity = obj[key];
        } else {
            if (quantity !== obj[key]) {
                return false;
            }
        }
    }
    return true;
};

console.log(areOccurrencesEqual((s = 'abacbc')));
console.log(areOccurrencesEqual((s = 'aaabb')));
