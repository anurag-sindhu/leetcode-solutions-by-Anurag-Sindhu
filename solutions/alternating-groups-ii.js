var numberOfAlternatingGroups = function (colors, k) {
    let count = 0;
    let lastElement = null;
    let isOkLen = 0;
    for (let index = 0; index < colors.length + k - 1; index++) {
        const element = colors[index % colors.length];
        if (isOkLen == 0) {
            isOkLen += 1;
        } else {
            if (lastElement == 0) {
                if (element == 1) {
                    isOkLen += 1;
                } else {
                    isOkLen = 1;
                }
            } else {
                if (element == 0) {
                    isOkLen += 1;
                } else {
                    isOkLen = 1;
                }
            }
        }
        if (isOkLen >= k) {
            count += 1;
        }
        lastElement = element;
    }
    return count;
};

console.log(numberOfAlternatingGroups((colors = [0, 1, 0, 1, 0]), (k = 3)));
console.log(numberOfAlternatingGroups((colors = [1, 1, 0, 1]), (k = 4)));
console.log(numberOfAlternatingGroups((colors = [0, 1, 0, 0, 1, 0, 1]), (k = 6)));
