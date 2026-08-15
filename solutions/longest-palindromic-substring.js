function isPalindrome(str) {
    let length = str.length;
    let startIndex = 0;
    let endIndex = length - 1;
    while (startIndex < endIndex) {
        if (str[startIndex] !== str[endIndex]) {
            return false;
        } else {
            startIndex++;
            endIndex--;
        }
    }
    return true;
}

var longestPalindrome1 = function (str) {
    if (str.length === 1) {
        return str;
    }
    let output = ``;
    const characterFrequencyIndex = {};
    const characterFrequency = {};
    for (let index = 0; index < str.length; index++) {
        if (!characterFrequency[str[index]]) {
            characterFrequency[str[index]] = [];
            characterFrequencyIndex[str[index]] = 0;
        }
        characterFrequency[str[index]].push(index);
    }

    for (let index = 0; index < str.length; index++) {
        if (characterFrequency[str[index]].length > 1) {
            for (
                let characterFreqIndex = characterFrequency[str[index]].length - 1;
                characterFreqIndex > characterFrequencyIndex[str[index]];
                characterFreqIndex--
            ) {
                const startIndex =
                    characterFrequency[str[index]][characterFrequencyIndex[str[index]]];
                const endIndex = characterFrequency[str[index]][characterFreqIndex] + 1;
                if (endIndex - startIndex + 1 > output.length) {
                    const substring = str.substring(startIndex, endIndex);
                    const resp = isPalindrome(substring);
                    if (resp) {
                        if (output.length < substring.length) {
                            output = substring;
                        }
                    }
                } else {
                    break;
                }
            }
            characterFrequencyIndex[str[index]] += 1;
        }
    }
    if (!output.length) {
        return str[0];
    }
    return output;
};
/**
https://youtu.be/UflHuQj6MVA?t=461
 */
var longestPalindrome = function (s) {
    const n = s.length;
    if (n === 0) return '';

    let start = 0,
        maxLength = 1;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true; // Single chars are palindromes
    }

    for (let length = 2; length <= n; length++) {
        for (let startIndex = 0; startIndex <= n - length; startIndex++) {
            const endIndex = startIndex + length - 1;
            if (s[startIndex] === s[endIndex]) {
                if (length === 2) {
                    dp[startIndex][endIndex] = true;
                } else {
                    const helpStartIndex = startIndex + 1;
                    const helpEndIndex = endIndex - 1;
                    dp[startIndex][endIndex] = dp[helpStartIndex][helpEndIndex];
                }
                if (dp[startIndex][endIndex] && length > maxLength) {
                    start = startIndex;
                    maxLength = length;
                }
            }
        }
    }

    return s.substring(start, start + maxLength);
};

console.log(longestPalindrome('bbbab') === 'bbb');
console.log(
    longestPalindrome(
        'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
    ) ===
        'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
);
console.log(longestPalindrome('acbfsqa') === 'a');
console.log(longestPalindrome('ac') === 'a');
console.log(longestPalindrome('a') === 'a');
console.log(longestPalindrome('abreguieariwlbgrsaleieasgh') === 'eie');
console.log(longestPalindrome('caddac') === 'caddac');
console.log(longestPalindrome('babadbabad') === 'bab');
console.log(longestPalindrome('cbbd') === 'bb');
console.log(longestPalindrome('cbbd') === 'bb');

var longestPalindrome1 = function (str) {
    let max = ``;
    const total = str.length;
    function getMaxPalindrome(str) {
        //babad
        let totalLength = str.length;
        if (!totalLength) {
            return ``;
        }
        if (totalLength === 1) {
            return str;
        }
        let max = ``;
        let middle = Math.floor(totalLength / 2);
        if (totalLength % 2 !== 0) {
            max = str[middle];
            let leftIndex = middle - 1;
            let rightIndex = middle + 1;
            while (middle) {
                if (str[leftIndex] === str[rightIndex]) {
                    max = `${str[leftIndex]}${max}${str[rightIndex]}`;
                } else {
                    break;
                }
                leftIndex--;
                rightIndex++;
                middle--;
            }
        } else {
            let leftIndex = middle - 1;
            let rightIndex = middle;
            while (middle) {
                if (str[leftIndex] === str[rightIndex]) {
                    max = `${str[leftIndex]}${max}${str[rightIndex]}`;
                } else {
                    break;
                }
                leftIndex--;
                rightIndex++;
                middle--;
            }
        }
        return max;
    } //even
    for (let index = 0; index < total - 1; index++) {
        const startIndex = index;
        const endIndex = index + 1;
        const charactersLeftOnLeft = startIndex - 0;
        const charactersLeftOnRight = total - 1 - endIndex;
        const difference =
            charactersLeftOnLeft > charactersLeftOnRight
                ? charactersLeftOnRight
                : charactersLeftOnLeft;
        const fromIndex = startIndex - difference;
        const toIndex = endIndex + difference;
        const subString = str.substring(fromIndex, toIndex + 1);
        const palindromicString = getMaxPalindrome(subString);
        if (max.length < palindromicString.length) {
            max = palindromicString;
        }
    }

    for (let index = 0; index < total; index++) {
        //odd
        const charactersLeftOnLeft = index - 0;
        const charactersLeftOnRight = total - 1 - index;
        const difference =
            charactersLeftOnLeft > charactersLeftOnRight
                ? charactersLeftOnRight
                : charactersLeftOnLeft;
        const fromIndex = index - difference;
        const toIndex = index + difference;
        const subString = str.substring(fromIndex, toIndex + 1);
        const palindromicString = getMaxPalindrome(subString);
        if (max.length < palindromicString.length) {
            max = palindromicString;
        }
    }

    return max;
};
