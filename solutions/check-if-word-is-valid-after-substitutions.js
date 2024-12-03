var isValid = function (s) {
    const store = [];
    let storeIndex = 0;
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element === 'c') {
            const lastElement = store[storeIndex - 1];
            const secondLastElement = store[storeIndex - 1 - 1];
            if (lastElement === 'b' && secondLastElement === 'a') {
                storeIndex -= 2;
            } else {
                store[storeIndex++] = element;
            }
        } else {
            store[storeIndex++] = element;
        }
    }
    return storeIndex === 0 ? true : false;
};

console.log(isValid((s = 'abacbcabcc')) == false);
console.log(isValid((s = 'aabcbc')) == true);
console.log(isValid((s = 'abcabcababcc')) == true);
console.log(isValid((s = 'abccba')) == false);
