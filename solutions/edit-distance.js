var minDistance = function (word1, word2) {
    const arr = [];
    for (let indexWord2 = 0; indexWord2 <= word2.length; indexWord2++) {
        arr[indexWord2] = [];
        for (let indexWord1 = 0; indexWord1 <= word1.length; indexWord1++) {
            if (indexWord1 == 0) {
                arr[indexWord2].push(indexWord2);
                continue;
            }
            if (indexWord2 == 0) {
                arr[indexWord2].push(indexWord1);
                continue;
            }
            if (word1[indexWord1 - 1] == word2[indexWord2 - 1]) {
                arr[indexWord2][indexWord1] = Math.min(
                    arr[indexWord2 - 1][indexWord1 - 1],
                    arr[indexWord2 - 1][indexWord1],
                    arr[indexWord2][indexWord1 - 1],
                );
            } else {
                arr[indexWord2][indexWord1] =
                    1 +
                    Math.min(
                        arr[indexWord2 - 1][indexWord1 - 1],
                        arr[indexWord2 - 1][indexWord1],
                        arr[indexWord2][indexWord1 - 1],
                    );
            }
        }
    }
    return arr[arr.length - 1][arr[0].length - 1];
};

console.log(minDistance((word1 = 'zoologicoarchaeologist'), (word2 = 'zoogeologist')));
console.log(minDistance((word1 = 'intention'), (word2 = 'execution')));
console.log(minDistance((word1 = 'horse'), (word2 = 'ros')));
