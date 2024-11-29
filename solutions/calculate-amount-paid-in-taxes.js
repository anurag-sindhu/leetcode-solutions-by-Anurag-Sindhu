var calculateTax = function (brackets, income) {
    let prevSlab = 0;
    let total = 0;
    for (let index = 0; index < brackets.length; index++) {
        const [slab, rate] = brackets[index];
        if (slab < income) {
            total += (slab - prevSlab) * rate * 0.01;
        } else {
            total += (Math.min(slab, income) - prevSlab) * rate * 0.01;
            break;
        }
        prevSlab = slab;
    }
    return total.toFixed(5);
};

console.log(
    calculateTax(
        (brackets = [
            [3, 50],
            [7, 10],
            [12, 25],
        ]),
        (income = 10),
    ),
);
console.log(
    calculateTax(
        (brackets = [
            [1, 0],
            [4, 25],
            [5, 50],
        ]),
        (income = 2),
    ),
);
console.log(calculateTax((brackets = [[2, 50]]), (income = 0)));
