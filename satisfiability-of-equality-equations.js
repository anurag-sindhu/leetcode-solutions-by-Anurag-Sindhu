var equationsPossible = function (equations) {
    const objEqual = {};
    for (const iterator of equations) {
        const variableOne = iterator[0];
        const variableComparator = iterator[1];
        const variableTwo = iterator[3];
        if (variableComparator === '=') {
            if (!objEqual[variableOne]) {
                objEqual[variableOne] = {};
            }
            objEqual[variableOne][variableTwo] = true;
            if (!objEqual[variableTwo]) {
                objEqual[variableTwo] = {};
            }
            objEqual[variableTwo][variableOne] = true;
        }
    }
    for (const iterator of equations) {
        const variableOne = iterator[0];
        const variableComparator = iterator[1];
        const variableTwo = iterator[3];
        if (variableComparator === '!') {
            if (variableOne === variableTwo) {
                return false;
            }
            if (objEqual[variableOne] && objEqual[variableOne][variableTwo]) {
                return false;
            }
            if (objEqual[variableTwo] && objEqual[variableTwo][variableOne]) {
                return false;
            }
        }
    }
    return true;
};

console.log(
    equationsPossible((equations = ['a==b', 'b!=c', 'c==a'])) === false
);
console.log(equationsPossible((equations = ['a!=a'])) === false);
console.log(
    equationsPossible(
        (equations = ['e==d', 'e==a', 'f!=d', 'b!=c', 'a==b'])
    ) === true
);

console.log(equationsPossible((equations = ['a==b', 'b==c', 'a==c'])) === true);

console.log(equationsPossible((equations = ['a==b', 'b!=a'])) === false);

console.log(equationsPossible((equations = ['b==a', 'a==b'])) === true);
