var compose = function (functions = []) {
    return function (x) {
        if (!functions.length) { return x }
        for (let index = functions.length - 1; index >= 0; index--) {
            x = functions[index](x)
        }
        return x
    }
};

let response = 0
let fn = compose([x => x + 1, x => 2 * x])
response = fn(4) // 9
console.log({ response });
fn = compose(functions = [x => x + 1, x => x * x, x => 2 * x])
response = fn(4) // 65
console.log({ response });
fn = compose([x => 10 * x, x => 10 * x, x => 10 * x])
response = fn(1) // 65
console.log({ response });
fn = compose([])
response = fn(42) // 42
console.log({ response });