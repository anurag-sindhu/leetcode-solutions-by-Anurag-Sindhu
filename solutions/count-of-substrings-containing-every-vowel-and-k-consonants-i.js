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
    let rightIndex = 0;
    const arr = [];
    for (let index = 0; index < word.length; index++) {
        const element = word[index];
        if (vowel[element] !== undefined) {
            vowel[element] += 1;
        } else {
            consonantCount += 1;
        }
        arr.push({ vowel: { ...vowel }, consonantCount });
    }
    const isValid = function (obj) {
        if (
            obj.vowel.a > 0 &&
            obj.vowel.e > 0 &&
            obj.vowel.i > 0 &&
            obj.vowel.o > 0 &&
            obj.vowel.u > 0
        ) {
            if (k == obj.consonantCount) {
                return true;
            }
        }
        return false;
    };
    while (rightIndex < word.length) {
        if (isValid(arr[rightIndex])) {
            output++;
        }
        let leftIndex = 0;
        while (leftIndex < rightIndex) {
            const newObj = {
                vowel: {
                    a: arr[rightIndex].vowel.a - arr[leftIndex].vowel.a,
                    e: arr[rightIndex].vowel.e - arr[leftIndex].vowel.e,
                    i: arr[rightIndex].vowel.i - arr[leftIndex].vowel.i,
                    o: arr[rightIndex].vowel.o - arr[leftIndex].vowel.o,
                    u: arr[rightIndex].vowel.u - arr[leftIndex].vowel.u,
                },
                consonantCount: arr[rightIndex].consonantCount - arr[leftIndex].consonantCount,
            };
            if (isValid(newObj)) {
                output++;
            }
            leftIndex++;
        }
        rightIndex++;
    }

    return output;
};

console.log(countOfSubstrings((word = 'ieaouqqieaouqq'), (k = 1)) == 3);
console.log(countOfSubstrings((word = 'aaeuoiouee'), (k = 0)) == 10);
console.log(countOfSubstrings((word = 'ieiaoud'), (k = 0)) == 2);
console.log(countOfSubstrings((word = 'iqeaouqi'), (k = 2)) == 3);
console.log(countOfSubstrings((word = 'aeioqq'), (k = 1)) == 0);
console.log(countOfSubstrings((word = 'aeiou'), (k = 0)) == 1);
