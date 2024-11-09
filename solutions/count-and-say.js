var countAndSay = function (n) {
    let start = "1"
    while (--n) {
        let tempStart = ""
        let frequency = 1
        for (let index = 0; index < start.length; index++) {
            if (start[index] !== start[index + 1]) {
                tempStart += `${frequency}${start[index]}`
                frequency = 1
            } else {
                frequency += 1
            }
        }
        start = tempStart
    }
    return start
};

console.log(countAndSay(30));
console.log(countAndSay(10));
console.log(countAndSay(1));
console.log(countAndSay(4));