var fractionAddition = function (expression) {
    const minus = [];
    const plus = [];
    for (let index = 0; index < expression.length; index++) {
        const element = expression[index];
        if (index === 0) {
            if (element === '-') {
                minus.push(`${expression[(index += 1)]}/${expression[(index += 2)]}`);
            } else {
                plus.push(`${expression[index]}/${expression[(index += 2)]}`);
            }
        } else {
            if (element === '-') {
                minus.push(`${expression[(index += 1)]}/${expression[(index += 2)]}`);
            } else {
                plus.push(`${expression[(index += 1)]}/${expression[(index += 2)]}`);
            }
        }
    }

    const totalPlusSum = plus.reduce((acc, curr) => {
        const [num, deno] = curr.split('/');
        return acc + Number(num) / Number(deno);
    }, 0);
    const totalMinusSum = minus.reduce((acc, curr) => {
        const [num, deno] = curr.split('/');
        return acc + Number(num) / Number(deno);
    }, 0);
    let ss = 0;
    if (totalPlusSum - totalMinusSum > 1) {
        ss = Math.round(1 / (totalPlusSum - totalMinusSum), 1);
    } else {
        ss = 1 / (totalPlusSum - totalMinusSum);
    }
    if (ss === Infinity) {
        return '0/1';
    }
    if (ss.toString()[0] === '-') {
        return `-1/${ss * -1}`;
    }
    return `1/${ss}`;
};
console.log(fractionAddition((expression = '-5/2+1/2')));
console.log(fractionAddition((expression = '1/3-1/2')));
console.log(fractionAddition((expression = '-1/2+1/2+1/3-1/3+1/3')));
console.log(fractionAddition((expression = '-1/2+1/2+1/3')));
console.log(fractionAddition((expression = '-1/2+1/2')));
