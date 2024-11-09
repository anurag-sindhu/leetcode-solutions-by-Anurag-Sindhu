var subsets = function (nums) {
    let output = [];
    let index = 0;
    while (index < nums.length) {
        const tempArr = [];
        if (index === 0) {
            output.push([]);
        }
        for (let outputIndex = 0; outputIndex < output.length; outputIndex++) {
            let res = [...output[outputIndex], nums[index]];
            tempArr.push(res);
        }
        output = [...output, ...tempArr];
        index++;
    }
    return output;
};
var maxProduct = function (s) {
    const { subset, subsetReverse } = (function () {
        const arr = [];
        const arrReverse = [];
        for (const element of subsets(s)) {
            arr.push(element.join(''));
            arrReverse.push(element.reverse().join(''));
        }
        return { subset: arr, subsetReverse: arrReverse };
    })();
    const subsetIndex = subsets(
        (function () {
            const arr = [];
            for (let index = 0; index < s.length; index++) {
                arr.push(index);
            }
            return arr;
        })(),
    );
    const palindrome = [];
    const palindromeIndexUsed = [];
    let prod = 1;
    for (let index = 0; index < subset.length; index++) {
        if (subset[index].length && subset[index] === subsetReverse[index]) {
            palindrome.push(subset[index]);
            palindromeIndexUsed.push(subsetIndex[index]);
        }
    }
    for (let palindromeIndex = 0; palindromeIndex < palindrome.length; palindromeIndex++) {
        const selectedIndex = palindromeIndexUsed[palindromeIndex];
        if (parseInt(prod / 12) >= selectedIndex.length) {
            continue;
        }
        let maxLength = 1;
        if (selectedIndex.length === s.length) {
            continue;
        }
        for (let index = 0; index < palindromeIndexUsed.length; index++) {
            let elementTwo = false;
            let hasBroke = false;
            for (const element of selectedIndex) {
                for (const element2 of palindromeIndexUsed[index]) {
                    elementTwo = palindromeIndexUsed[index];
                    if (element === element2) {
                        hasBroke = true;
                        break;
                    }
                }
            }
            if (!hasBroke) {
                maxLength = Math.max(elementTwo.length, maxLength);
            }
        }
        prod = Math.max(maxLength * selectedIndex.length, prod);
    }
    return prod;
};
console.log(maxProduct((s = 'aaaaaaaaaaaa')));
console.log(maxProduct((s = 'jee')) === 2);
console.log(maxProduct((s = 'zqz')) === 2);
console.log(maxProduct((s = 'bb')) === 1);
console.log(maxProduct((s = 'accbcaxxcxx')) === 25);
console.log(maxProduct((s = 'leetcodecomo')) === 9);
console.log(maxProduct((s = 'leetcodecom')) === 9);
