var sumGame = function (num) {
    let bobSum = 0;
    let aliceQuestionMark = 0;
    let aliceSum = 0;
    let bobQuestionMark = 0;
    let previouslyAddedToAlice = false;
    for (let index = 0; index < num.length / 2; index++) {
        if (num[index] !== '?') {
            bobSum += Number(num[index]);
        }
    }
    for (let index = num.length / 2; index < num.length; index++) {
        if (num[index] !== '?') {
            aliceSum += Number(num[index]);
        }
    }
    for (let index = 0; index < num.length / 2; index++) {
        if (num[index] === '?') {
            if (previouslyAddedToAlice === true) {
                bobQuestionMark += 1;
            }
            previouslyAddedToAlice = !previouslyAddedToAlice;
        }
    }
    previouslyAddedToAlice = false;
    for (let index = num.length / 2; index < num.length; index++) {
        if (num[index] === '?') {
            if (previouslyAddedToAlice === false) {
                aliceQuestionMark += 1;
            }
            previouslyAddedToAlice = !previouslyAddedToAlice;
        }
    }
    const absoluteDifferenceOfQuestionMark = Math.abs(aliceQuestionMark - bobQuestionMark);
    if (aliceSum >= bobSum && aliceQuestionMark >= bobQuestionMark) {
        return false;
    }
    const absoluteDifferenceOfSum = Math.abs(bobSum - aliceSum);
    
    return true;
    // if (absoluteDifferenceOfQuestionMark * 9 <= absoluteDifferenceOfSum) {
    //     return false;
    // }
    // if (aliceQuestionMark > bobQuestionMark) {
    //     if (absoluteDifferenceOfSum > absoluteDifferenceOfQuestionMark * 9) {
    //         return false;
    //     }
    //     return true;
    // }
    // return false;
};

console.log(sumGame((num = '?3295???')) === false);
console.log(sumGame((num = '5023')) === false);
console.log(sumGame((num = '9?')) === true);
console.log(sumGame((num = '25??')) === true);
