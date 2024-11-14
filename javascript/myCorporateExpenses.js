
let months = monthDiff(
    new Date(2018, 3, 1), // November 4th, 2008
    new Date()  // March 12th, 2010
) + 2;
let totalEarning = ((24850 * 15) + 3000 + 5200) + (29850 * 6) + 50000 + 20000 + (71200 * 3) + (65150 * ((months - 25)));
let expenses = 0;
let deduction = {
    rent: (7000 * 21) + 3500 + (5500 * (months - 21)) + 3000,
    food: (200 * 4 * months),
    recharge: ((149 * months) + ((months - 12) * 50)),
    juice_n_med: 350 * months,
    almonds: 200 * months,
    otherExpenses: (10000 + 6 * 1500 + 7700 + 8200 + 3500 + 3200 + 300),
    delivered: 100000,
    // own: (57 + 104 + 12 + 30 + 30 + 1.5 + 1 + 1 + 5 + 131) * 1000,
    own: (449.1) * 1000,
    bangalore: 5300 + 1000 + 500 + 260 + 100 + 2500,
    lic: 11500,
    med: 10500,
    shopping: (5000 + 2000 + 1000 + 1300 + 2000 + 600 + 750)
};

for (let exp in deduction) {
    console.log(exp + " : " + deduction[exp])
    expenses += deduction[exp];
}

console.log("Total Earning :" + totalEarning);
console.log({ months });
console.log("Total where :" + ((totalEarning - expenses)));
console.log("Monthly not found yet, where? :" + ((totalEarning - expenses) / months));

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}