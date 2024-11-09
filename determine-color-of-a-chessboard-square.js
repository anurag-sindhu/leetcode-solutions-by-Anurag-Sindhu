var squareIsWhite = function (coordinates) {
    const [row, column] = coordinates.split('');
    const isRowOdd = Number(row.charCodeAt(0)) % 2 !== 0;
    const isColumnOdd = Number(column) % 2 !== 0;
    if (
        (isRowOdd === true && isColumnOdd === true) ||
        (isRowOdd === false && isColumnOdd === false)
    ) {
        return false;
    }
    return true;
};

console.log(squareIsWhite((coordinates = 'b2')) === false);
console.log(squareIsWhite((coordinates = 'a1')) === false);
console.log(squareIsWhite((coordinates = 'h3')) === true);
console.log(squareIsWhite((coordinates = 'c7')) === false);
