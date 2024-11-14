let obj = {"first" : "anurag", "second" : "sandhu"};
let obj2 = {"first" : "anu", "second" : "singh"};

console.log({...obj});
console.log({...obj2});
const hello  = {...obj, ...obj2};
console.log(hello);
