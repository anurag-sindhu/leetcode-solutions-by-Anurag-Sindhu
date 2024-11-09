var numRescueBoats = function (people, limit) {
    const sortedPeople = people.sort((a, b) => a - b);
    let persons = 0;
    let boats = 0;
    let caringWeight = 0;
    let leftIndex = 0;
    let rightIndex = people.length - 1;
    while (leftIndex <= rightIndex) {
        if (
            persons === 0 &&
            caringWeight + sortedPeople[rightIndex] + sortedPeople[leftIndex] <= limit
        ) {
            caringWeight += sortedPeople[rightIndex--] + sortedPeople[leftIndex++];
            persons += 2;
        } else if (persons <= 1 && caringWeight + sortedPeople[rightIndex] <= limit) {
            caringWeight += sortedPeople[rightIndex--];
            persons += 1;
        } else if (persons <= 1 && caringWeight + sortedPeople[leftIndex] <= limit) {
            caringWeight += sortedPeople[leftIndex++];
            persons += 1;
        } else {
            boats += 1;
            caringWeight = 0;
            persons = 0;
        }
    }
    if (caringWeight) {
        boats += 1;
    }
    return boats;
};

console.log(
    numRescueBoats(
        [2, 2, 2, 6, 6, 7, 10, 10, 10, 11, 12, 13, 18, 22, 26, 33, 41, 47, 49, 50],
        50,
    ) === 11,
);
console.log(numRescueBoats((people = [1, 2, 2, 3]), (limit = 3)) === 3);
console.log(numRescueBoats([5, 1, 4, 2], 6) === 2);
console.log(numRescueBoats((people = [1, 2]), (limit = 3)) === 1);
console.log(numRescueBoats((people = [3, 3, 4, 5]), (limit = 5)) === 4);
