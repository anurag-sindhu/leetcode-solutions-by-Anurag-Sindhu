let accumulator = 0;
console.time("1");
for (let index = 0; index < 10000; index++) {
    index ? accumulator++ : accumulator
}
console.timeEnd("1");
console.log(accumulator);

console.time("2");
accumulator = 0;
for (let index = 0; index < 10000; index++) {
    !index ? accumulator : accumulator++
}
console.timeEnd("2");

console.time("3");
accumulator = 0;
for (let index = 0; index < 10000; index++) {
    if (index) {
        accumulator++
    } else {
    }
}
console.timeEnd("3");

console.time("4");
accumulator = 0;
for (let index = 0; index < 10000; index++) {
    if (!index) {
    } else {
        accumulator++
    }
}
console.timeEnd("4");
console.log(accumulator)