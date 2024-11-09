var countOperations = function(num1, num2) {
    let operations = 0;
    let reminder = null;
    let factorial = null;
    while (num1 !== 0 && num2 !== 0) {
        if (num1 < num2) {
            reminder = num2 % num1;
            factorial = parseInt(num2 / num1);
            operations += factorial;
            num2 = reminder;
        } else {
            reminder = num1 % num2;
            factorial = parseInt(num1 / num2);
            operations += factorial;
            num1 = reminder;
        }
    }
    return operations;
};

console.log(countOperations((num1 = 25), (num2 = 39)));
console.log(countOperations((num1 = 2), (num2 = 3)));
console.log(countOperations((num1 = 10), (num2 = 10)));
