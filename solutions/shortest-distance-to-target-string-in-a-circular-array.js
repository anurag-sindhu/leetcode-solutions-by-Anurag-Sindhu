var closetTarget = function (words, target, startIndex) {
    let smallestDistance = Infinity
    for (let index = 0; index < words.length; index++) {
        const iterator = words[index]
        if (iterator === target) {
            const straightDistance = Math.abs(startIndex - index)
            let roundClockWiseDistance = (words.length - startIndex + index)
            let roundAntiClockWiseDistance = startIndex + words.length - index
            const minDistance = Math.min(roundClockWiseDistance, straightDistance, roundAntiClockWiseDistance)
            if (minDistance < smallestDistance) {
                smallestDistance = minDistance
            }
        }
    }
    if (smallestDistance == Infinity) {
        return -1
    }
    return smallestDistance
};

console.log(closetTarget(words = ["hello", "i", "am", "leetcode", "hell"], target = "hell", startIndex = 0));
console.log(closetTarget(words = ["hello", "i", "am", "leetcode", "hello"], target = "hello", startIndex = 2));
console.log(closetTarget(words = ["hello", "i", "am", "leetcode", "hello"], target = "hello", startIndex = 1));
console.log(closetTarget(words = ["a", "b", "leetcode"], target = "leetcode", startIndex = 0));
console.log(closetTarget(words = ["i", "eat", "leetcode"], target = "ate", startIndex = 0));