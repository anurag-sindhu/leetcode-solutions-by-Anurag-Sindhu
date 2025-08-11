var numberOfAlternatingGroups = function (colors) {
    let count = 0;
    for (let index = 0; index < colors.length; index++) {
        const element = colors[index];
        const nextElement = colors[(index + 1) % colors.length];
        const nextNextElement = colors[(index + 1 + 1) % colors.length];
        if (element == 0) {
            if (nextElement == 1) {
                if (nextNextElement === 0) {
                    count += 1;
                }
            }
        } else {
            if (nextElement == 0) {
                if (nextNextElement === 1) {
                    count += 1;
                }
            }
        }
    }
    return count;
};

console.log(numberOfAlternatingGroups((colors = [1, 1, 1])));
console.log(numberOfAlternatingGroups((colors = [0, 1, 0, 0, 1])));
