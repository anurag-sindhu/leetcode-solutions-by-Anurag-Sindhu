var p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('one'), 1000);
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('two'), 1000);
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('three'), 1000);
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('four'), 1000);
});
var p5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('four'), 1000);
});


// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
    .then(values => {
        console.log(values);
        console.log(values.join(""));
        console.log(...values.join(""));
        console.log(...values);
    })
    .catch(error => {
        console.error(error.message)
    });