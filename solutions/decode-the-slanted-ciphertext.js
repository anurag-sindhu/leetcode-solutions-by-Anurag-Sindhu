var decodeCiphertext = function (encodedText, rows) {
    let out = '';
    const column = encodedText.length / rows;
    let startingColumn = 0;
    let stringIndex = 0;
    let tempColumn = startingColumn;
    while (true) {
        let hasFound = false;
        stringIndex = startingColumn;
        for (let index = 0; index < rows; index++) {
            if (rows > index && column > tempColumn) {
                hasFound = true;
                tempColumn++;
                if (encodedText[stringIndex]) {
                    out += encodedText[stringIndex] || '';
                }
                stringIndex += column + 1;
            }
        }
        tempColumn = ++startingColumn;
        if (!hasFound) {
            break;
        }
    }
    out.trim();
    let index = out.length - 1;
    for (; index >= 0; index--) {
        const element = out[index];
        if (element !== ' ') {
            break;
        }
    }
    return out.substring(0, index + 1);
};

console.log(decodeCiphertext((encodedText = 'ch   ie   pr'), (rows = 3)));
console.log(decodeCiphertext((encodedText = 'coding'), (rows = 1)));
console.log(decodeCiphertext((encodedText = 'iveo    eed   l te   olc'), (rows = 4)));
