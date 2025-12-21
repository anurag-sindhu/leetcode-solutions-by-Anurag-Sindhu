var calcEquation = function (equations, values, queries) {
    const out = [];
    const store = {};
    const config = {};
    for (let index = 0; index < equations.length; index++) {
        const [a, b] = equations[index];
        if (config[a] == undefined) {
            config[a] = {};
        }
        config[a][b] = values[index];
        if (config[b] == undefined) {
            config[b] = {};
        }
        config[b][a] = 1 / values[index];
    }
    for (const [a, b] of queries) {
        const inProgress = {};
        function evaluate(fromA, initA, out = 1) {
            inProgress[fromA] = -1;
            let minValue = Infinity;
            for (const key in config[fromA]) {
                if (inProgress[key] !== -1) {
                    const temp = out * config[fromA][key];
                    if (!store[initA]) {
                        store[initA] = {};
                    }
                    store[initA][key] = temp;
                    if (key === b) {
                        return temp;
                    }
                    minValue = Math.min(minValue, evaluate(key, initA, temp));
                }
            }
            inProgress[fromA] = 1;
            return minValue;
        }
        const resp = evaluate(a, a, 1);
        if (config[a] === undefined || config[b] === undefined) {
            out.push(-1);
        } else if (a === b) {
            if (config[a] !== undefined) {
                out.push(1);
            } else {
                out.push(-1);
            }
        } else if (resp === Infinity) {
            out.push(-1);
        } else {
            out.push(Number((resp && resp.toFixed(5)) || '-1.00000'));
        }
    }
    return out;
};

console.log(
    calcEquation(
        (equations = [
            ['a', 'b'],
            ['b', 'c'],
        ]),
        (values = [2.0, 3.0]),
        (queries = [
            ['a', 'a'],
            ['a', 'c'],
            ['b', 'a'],
            ['a', 'e'],
            ['x', 'x'],
        ]),
    ),
);

console.log(
    calcEquation(
        (equations = [
            ['a', 'b'],
            ['c', 'd'],
        ]),
        (values = [1.0, 1.0]),
        (queries = [
            ['a', 'c'],
            ['b', 'd'],
            ['b', 'a'],
            ['d', 'c'],
        ]),
    ),
);

console.log(
    calcEquation(
        (equations = [
            ['x1', 'x2'],
            ['x2', 'x3'],
            ['x3', 'x4'],
            ['x4', 'x5'],
        ]),
        (values = [3.0, 4.0, 5.0, 6.0]),
        (queries = [
            ['x1', 'x5'],
            ['x5', 'x2'],
            ['x2', 'x4'],
            ['x2', 'x2'],
            ['x2', 'x9'],
            ['x9', 'x9'],
        ]),
    ),
);

console.log(
    calcEquation(
        (equations = [
            ['x1', 'x2'],
            ['x2', 'x3'],
            ['x3', 'x4'],
            ['x4', 'x5'],
        ]),
        (values = [3.0, 4.0, 5.0, 6.0]),
        (queries = [
            ['x1', 'x5'],
            ['x5', 'x2'],
            ['x2', 'x4'],
            ['x2', 'x2'],
            ['x2', 'x9'],
            ['x9', 'x9'],
        ]),
    ),
);
console.log(
    calcEquation(
        (equations = [['a', 'b']]),
        (values = [0.5]),
        (queries = [
            ['a', 'b'],
            ['b', 'a'],
            ['a', 'c'],
            ['x', 'y'],
        ]),
    ),
);

console.log(
    calcEquation(
        (equations = [
            ['a', 'b'],
            ['b', 'c'],
            ['bc', 'cd'],
        ]),
        (values = [1.5, 2.5, 5.0]),
        (queries = [
            ['c', 'b'],
            ['a', 'c'],
            ['bc', 'cd'],
            ['cd', 'bc'],
        ]),
    ),
);

console.log(
    calcEquation(
        (equations = [
            ['a', 'b'],
            ['b', 'c'],
            ['bc', 'cd'],
        ]),
        (values = [1.5, 2.5, 5.0]),
        (queries = [
            ['a', 'c'],
            ['c', 'b'],
            ['bc', 'cd'],
            ['cd', 'bc'],
        ]),
    ),
);
