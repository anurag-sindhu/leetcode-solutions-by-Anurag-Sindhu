var calcEquation = function(equations, values, queries) {
    const config = {
        numerator: {},
        denominator: {}
    };
    for (let index = 0; index < equations.length; index++) {
        const [ A, B ] = equations[index];
        if (!config.numerator[A]) {
            config.numerator[A] = [];
        }
        config.numerator[A].push(index);

        if (!config.denominator[B]) {
            config.denominator[B] = [];
        }
        config.denominator[B].push(index);
    }
    return config;
};

console.log(
    calcEquation(
        (equations = [ [ 'a', 'b' ], [ 'b', 'c' ] ]),
        (values = [ 2.0, 3.0 ]),
        (queries = [ [ 'a', 'c' ], [ 'b', 'a' ], [ 'a', 'e' ], [ 'a', 'a' ], [ 'x', 'x' ] ])
    )
);
