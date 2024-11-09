var getLongestSubsequence = function (words, groups) {
    const zeroGroup = [];
    const oneGroup = [];
    for (let index = 0; index < groups.length; index++) {
        groups[index] ? oneGroup.push(index) : zeroGroup.push(index);
    }
    //0
    const zeroOut = [];
    const oneOut = [];
    for (let index = 0; index < groups.length; index++) {
        if (!groups[index]) {
            zeroOut.push(words[index]);
        }
    }
    //1
    return;
};

console.log(getLongestSubsequence((words = ['e', 'a', 'b']), (groups = [0, 0, 1])));
console.log(getLongestSubsequence((words = ['a', 'b', 'c', 'd']), (groups = [1, 0, 1, 1])));
