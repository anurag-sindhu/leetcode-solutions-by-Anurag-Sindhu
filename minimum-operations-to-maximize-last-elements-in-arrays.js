function minOperations(num1, num2) {
    let hasBrokeAsItIs = true;
    let hasBrokePostReplacement = true;
    // For As it is Case
    let replacementCountForAsItIs = 0;
    let runIndex = num1.length - 1 - 1;
    let lastOfNum1AsItIs = num1[num1.length - 1];
    let lastOfNum2AsItIs = num2[num2.length - 1];
    while (runIndex >= 0) {
        if (num1[runIndex] <= lastOfNum1AsItIs && num2[runIndex] <= lastOfNum2AsItIs) {
            runIndex -= 1;
            continue;
        }
        if (num2[runIndex] <= lastOfNum1AsItIs && num1[runIndex] <= lastOfNum2AsItIs) {
            runIndex -= 1;
            replacementCountForAsItIs += 1;
            continue;
        }
        hasBrokeAsItIs = false;
        break;
    }

    //For Post Replacing last element case
    let replacementCountForPostReplacement = 1;
    let runIndexPostReplacement = num1.length - 1 - 1;
    let lastOfNum1PostReplacement = num2[num2.length - 1];
    let lastOfNum2PostReplacement = num1[num1.length - 1];
    while (runIndexPostReplacement >= 0) {
        if (
            num1[runIndexPostReplacement] <= lastOfNum1PostReplacement &&
            num2[runIndexPostReplacement] <= lastOfNum2PostReplacement
        ) {
            runIndexPostReplacement -= 1;
            continue;
        }
        if (
            num2[runIndexPostReplacement] <= lastOfNum1PostReplacement &&
            num1[runIndexPostReplacement] <= lastOfNum2PostReplacement
        ) {
            runIndexPostReplacement -= 1;
            replacementCountForPostReplacement += 1;
            continue;
        }
        hasBrokePostReplacement = false;
        break;
    }
    if (hasBrokeAsItIs && hasBrokePostReplacement) {
        return Math.min(replacementCountForAsItIs, replacementCountForPostReplacement);
    } else if (hasBrokeAsItIs) {
        return replacementCountForAsItIs;
    } else if (hasBrokePostReplacement) {
        return replacementCountForPostReplacement;
    }
    return -1;
}

console.log(minOperations([1, 2, 7], [4, 5, 3]));
console.log(minOperations([1, 5, 4], [2, 5, 3]));
console.log(minOperations([2, 3, 4, 5, 9], [8, 8, 4, 4, 4]));
/**
 * 
[2,3,4,5,9] -> [2,3,4,5,4] -> [2,3,4,4,4] 
[8,8,4,4,4] -> [8,8,4,4,9] -> [8,8,4,5,9] 

[1,5,4] -> [1,5,4] 
[2,5,3] -> [2,5,3]
 */
