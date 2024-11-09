function buildArray(array) {
    const multiplier = 100000;
    for (let index = 0; index < array.length; index++) {
        const currentNumber = array[index];
        let numberToPut = array[array[index]];
        if (numberToPut > 999) {
            numberToPut = numberToPut % multiplier;
        }
        array[index] = multiplier * numberToPut + currentNumber;
    }
    for (let index = 0; index < array.length; index++) {
        if (array[index] <= 999) {
            array[index] = 0;
        } else {
            array[index] = parseInt(array[index] / multiplier);
        }
    }
    return array;
}

console.log(buildArray((nums = [5, 0, 1, 2, 3, 4]))); //[4,5,0,1,2,3]
console.log(buildArray((nums = [0, 2, 1, 5, 3, 4]))); //[0,1,2,4,5,3]
console.log(buildArray([2, 3, 4, 5, 1, 0])); //[4,5,1,0,3,2]
