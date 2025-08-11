var countOfSubstrings = function (word, k) {
    const vowel = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    };
    let output = 0;
    let consonantCount = 0;
    let leftIndex = 0;
    let extra = 0;
    let rightIndex = 0;
    const isValid = function (obj, consonantCount) {
        if (vowel.a > 0 && vowel.e > 0 && vowel.i > 0 && vowel.o > 0 && vowel.u > 0) {
            if (k == consonantCount) {
                return true;
            }
        }
        return false;
    };
    while (rightIndex < word.length) {
        const element = word[rightIndex];
        if (vowel[element] != undefined) {
            vowel[element] += 1;
        } else {
            consonantCount += 1;
        }
        while (consonantCount > k) {
            extra = 0;
            const prevElement = word[leftIndex++];
            if (vowel[prevElement] != undefined) {
                vowel[prevElement] -= 1;
            } else {
                consonantCount -= 1;
                break;
            }
        }
        if (isValid(vowel, consonantCount)) {
            while (leftIndex < rightIndex) {
                const prevElement = word[leftIndex];
                if (vowel[prevElement] == undefined) {
                    break;
                }
                vowel[prevElement] -= 1;
                if (isValid(vowel, consonantCount)) {
                    extra += 1;
                    leftIndex += 1;
                } else {
                    vowel[prevElement] += 1;
                    break;
                }
            }
            output = output + 1 + extra;
            while (true) {
                const element = word[rightIndex + 1];
                if (element == undefined) {
                    break;
                }
                if (vowel[element] != undefined) {
                    output = output + 1 + extra;
                    rightIndex++;
                    vowel[element] += 1;
                    while (leftIndex < rightIndex) {
                        const prevElement = word[leftIndex];
                        if (vowel[prevElement] == undefined) {
                            break;
                        }
                        vowel[prevElement] -= 1;
                        if (isValid(vowel, consonantCount)) {
                            extra += 1;
                            output = output + 1;
                            leftIndex += 1;
                        } else {
                            vowel[prevElement] += 1;
                            break;
                        }
                    }
                } else {
                    break;
                }
            }
        }
        rightIndex++;
    }

    return output;
};

console.log(countOfSubstrings((word = 'ieaouqqieaouqq'), (k = 1)) == 3);
console.log(countOfSubstrings((word = 'iqeaouqi'), (k = 2)) == 3);
console.log(countOfSubstrings((word = 'aaeuoiouee'), (k = 0)) == 10);
console.log(countOfSubstrings((word = 'aeioqq'), (k = 1)) == 0);
console.log(countOfSubstrings((word = 'ieiaoud'), (k = 0)) == 2);
console.log(countOfSubstrings((word = 'aeiou'), (k = 0)) == 1);
