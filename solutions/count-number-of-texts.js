var countTexts = function (pressedKeys) {
    const MOD = 1e9 + 7;
    let prod = 1;
    let consecutiveCount = 0;
    let tempProd = 1;
    let firstForThree = 1;
    let secondForThree = 2;
    let thirdForThree = 4;
    let firstForFour = 1;
    let secondForFour = 2;
    let thirdForFour = 4;
    let fourForFour = 8;
    for (let index = 0; index < pressedKeys.length; index++) {
        const element = pressedKeys[index];
        if (element === pressedKeys[index - 1]) {
            consecutiveCount += 1;
            if (element === '7' || element === '9') {
                if (consecutiveCount >= 5) {
                    tempProd = (firstForFour + secondForFour + thirdForFour + fourForFour) % MOD;
                    firstForFour = secondForFour;
                    secondForFour = thirdForFour;
                    thirdForFour = fourForFour;
                    fourForFour = tempProd;
                } else if (consecutiveCount === 2) {
                    tempProd = secondForFour;
                } else if (consecutiveCount === 3) {
                    tempProd = thirdForFour;
                } else if (consecutiveCount === 4) {
                    tempProd = fourForFour;
                }
            } else {
                if (consecutiveCount >= 4) {
                    tempProd = (firstForThree + secondForThree + thirdForThree) % MOD;
                    firstForThree = secondForThree;
                    secondForThree = thirdForThree;
                    thirdForThree = tempProd;
                } else if (consecutiveCount === 2) {
                    tempProd = secondForThree;
                } else if (consecutiveCount === 3) {
                    tempProd = thirdForThree;
                }
            }
        } else {
            prod = (prod * tempProd) % MOD;
            consecutiveCount = 1;
            if (element === '7' || element === '9') {
                firstForFour = 1;
                secondForFour = 2;
                thirdForFour = 4;
                fourForFour = 8;
            } else {
                firstForThree = 1;
                secondForThree = 2;
                thirdForThree = 4;
            }
        }
    }
    prod = (prod * tempProd) % MOD;
    return prod;
};

console.log(countTexts((pressedKeys = '22222433335555')) === 637);
console.log(countTexts((pressedKeys = '23')) === 1);
console.log(countTexts((pressedKeys = '222222222222222222222222222222222222')) === 82876089);
console.log(countTexts((pressedKeys = '444479999555588866')) === 3136);
console.log(countTexts((pressedKeys = '2222243333')) === 91);
console.log(countTexts((pressedKeys = '2222233')) === 14);
console.log(countTexts((pressedKeys = '22233')) === 8);

/**
1-1         1-0
2-2         2-0
3-4         4-0
4-7         8-1         1
5-13        16-3        2
6-24        32-8        5
7-44        64-20       12
8-81        128-47      27
9-149       256-107     60
10-274      512-238     131
 */

/*
1: 1
2: 2
3: 4
4: 8
5: 15
6: 29
7: 56
8: 108
9: 208
10:401
*/
