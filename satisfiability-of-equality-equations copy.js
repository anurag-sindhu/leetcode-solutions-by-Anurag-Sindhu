var equationsPossible = function (equations) {
    let counter = 1;
    const obj = {};
    for (const iterator of equations) {
        const variableOne = iterator[0];
        const variableComparator = iterator[1];
        const variableTwo = iterator[3];
        if (obj[variableOne] && obj[variableTwo]) {
            const variableOneValue = obj[variableOne];
            const variableTwoValue = obj[variableTwo];
            if (variableComparator === '=') {
                if (variableOneValue !== variableTwoValue) {
                    return false;
                }
            } else {
                if (variableOneValue === variableTwoValue) {
                    return false;
                }
            }
        } else {
            if (variableOne === variableTwo) {
                if (variableComparator !== '=') {
                    return false;
                }
            } else {
                if (!obj[variableOne] && !obj[variableTwo]) {
                    if (variableComparator === '=') {
                        const newValue = counter++;
                        obj[variableOne] = newValue;
                        obj[variableTwo] = newValue;
                    } else {
                        obj[variableOne] = counter++;
                        obj[variableTwo] = counter++;
                    }
                } else if (!obj[variableTwo]) {
                    const variableOneValue = obj[variableOne];
                    if (variableComparator === '=') {
                        obj[variableTwo] = variableOneValue;
                    } else {
                        obj[variableTwo] = counter++;
                    }
                } else if (!obj[variableOne]) {
                    const variableTwoValue = obj[variableTwo];
                    if (variableComparator === '=') {
                        obj[variableOne] = variableTwoValue;
                    } else {
                        obj[variableOne] = counter++;
                    }
                }
            }
        }
    }
    return true;
};

console.log(
    equationsPossible(
        (equations = ['e==d', 'e==a', 'f!=d', 'b!=c', 'a==b'])
    ) === true
);

console.log(equationsPossible((equations = ['a!=a'])) === false);

console.log(equationsPossible((equations = ['a==b', 'b==c', 'a==c'])) === true);

console.log(equationsPossible((equations = ['a==b', 'b!=a'])) === false);

console.log(equationsPossible((equations = ['b==a', 'a==b'])) === true);
