var maximumNumber = function (num, change) {
    const splittedNum = num.split('');
    let hasReplacingStart = false;
    for (let index = 0; index < splittedNum.length; index++) {
        const iterator = splittedNum[index];
        if (Number(iterator) < change[Number(iterator)]) {
            splittedNum[index] = change[Number(iterator)];
            hasReplacingStart = true;
        } else if (Number(iterator) === change[Number(iterator)] && hasReplacingStart) {
            continue;
        } else {
            if (hasReplacingStart) {
                break;
            }
        }
    }
    return splittedNum.join('');
};

console.log(maximumNumber((num = '132'), (change = [9, 8, 5, 0, 3, 6, 4, 2, 6, 8])) === '832');
console.log(maximumNumber((num = '021'), (change = [9, 4, 3, 5, 7, 2, 1, 9, 0, 6])) === '934');
console.log(maximumNumber((num = '5'), (change = [1, 4, 7, 5, 3, 2, 5, 6, 9, 4])) === '5');
