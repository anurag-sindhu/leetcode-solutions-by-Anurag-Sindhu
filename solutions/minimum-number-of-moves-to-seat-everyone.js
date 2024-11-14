var minMovesToSeat = function (seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let res = 0;
    for (let index = 0; index < students.length; index++) {
        res += Math.abs(students[index] - seats[index]);
    }
    return res;
};

console.log(
    minMovesToSeat([3, 20, 17, 2, 12, 15, 17, 4, 15, 20], [10, 13, 14, 15, 5, 2, 3, 14, 3, 18]),
);
console.log(minMovesToSeat((seats = [3, 1, 5]), (students = [2, 7, 4])));
console.log(minMovesToSeat((seats = [4, 1, 5, 9]), (students = [1, 3, 2, 6])));
console.log(minMovesToSeat((seats = [2, 2, 6, 6]), (students = [1, 3, 2, 6])));
