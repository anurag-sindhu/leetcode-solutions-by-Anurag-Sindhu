function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

var maxGoodNumber = function (nums) {
    const numberOfOneInZero = (function () {
        const store = dec2bin(nums[0]);
        let count = 0;
        for (let index = 0; index < store.length; index++) {
            const element = store[index];
            if (element == '1') {
                count += 1;
            }
        }
        return { count, len: store.length, percent: (store.length - count) / store.length, store };
    })();
    const numberOfOneInOne = (function () {
        const store = dec2bin(nums[1]);
        let count = 0;
        for (let index = 0; index < store.length; index++) {
            const element = store[index];
            if (element == '1') {
                count += 1;
            }
        }
        return { count, len: store.length, percent: (store.length - count) / store.length, store };
    })();
    const numberOfOneInTwo = (function () {
        const store = dec2bin(nums[2]);
        let count = 0;
        for (let index = 0; index < store.length; index++) {
            const element = store[index];
            if (element == '1') {
                count += 1;
            }
        }
        return { count, len: store.length, percent: (store.length - count) / store.length, store };
    })();
    const arr = [numberOfOneInZero, numberOfOneInOne, numberOfOneInTwo];
    const maxNum = Math.max(
        Number(parseInt(`${arr[0].store}${arr[1].store}${arr[2].store}`, 2).toString(10)),
        Number(parseInt(`${arr[0].store}${arr[2].store}${arr[1].store}`, 2).toString(10)),
        Number(parseInt(`${arr[1].store}${arr[0].store}${arr[2].store}`, 2).toString(10)),
        Number(parseInt(`${arr[1].store}${arr[2].store}${arr[0].store}`, 2).toString(10)),
        Number(parseInt(`${arr[2].store}${arr[0].store}${arr[1].store}`, 2).toString(10)),
        Number(parseInt(`${arr[2].store}${arr[1].store}${arr[0].store}`, 2).toString(10)),
    );
    return maxNum;
};

console.log(maxGoodNumber((nums = [2, 8, 16])));
console.log(maxGoodNumber((nums = [1, 2, 3])));
