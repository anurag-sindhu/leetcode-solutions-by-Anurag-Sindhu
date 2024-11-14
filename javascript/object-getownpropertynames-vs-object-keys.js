var a = {};
Object.defineProperties(a, {
    one: { enumerable: true, value: 'one' },
    two: { enumerable: false, value: 'two' },
});

console.log(a["one"]);
console.log(a["two"]);

let b = {
    one: 'one',
    two: 'two'
}

console.log(Object.keys(a)); // ["one"]
console.log(Object.getOwnPropertyNames(a));
console.log(Object.keys(b)); // ["one"]
console.log(Object.getOwnPropertyNames(b)); 