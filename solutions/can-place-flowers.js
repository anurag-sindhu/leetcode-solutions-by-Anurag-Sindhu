var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) {
        return true;
    }

    for (let index = 0; index < flowerbed.length; index++) {
        if (
            flowerbed[index] === 0 &&
            (flowerbed[index + 1] === 0 || flowerbed[index + 1] === undefined) &&
            (flowerbed[index - 1] === 0 || flowerbed[index - 1] === undefined)
        ) {
            flowerbed[index] = 1;
            n--;
        }
        if (n <= 0) {
            return true;
        }
    }
    return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2) === false);
console.log(canPlaceFlowers((flowerbed = [1, 0, 0, 0, 1]), (n = 1)) === true);
console.log(canPlaceFlowers((flowerbed = [1, 0, 0, 0, 1]), (n = 2)) == false);
