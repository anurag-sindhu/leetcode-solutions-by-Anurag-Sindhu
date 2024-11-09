var fairCandySwap = function (aliceSizes, bobSizes) {
    const aliceSizesConfig = (function () {
        const config = {};
        let sum = 0;
        for (const iterator of aliceSizes) {
            sum += iterator;
            if (!config[iterator]) {
                config[iterator] = 0;
            }
            config[iterator] += 1;
        }
        return { config, sum };
    })();

    const bobSizesConfig = (function () {
        const config = {};
        let sum = 0;
        for (const iterator of bobSizes) {
            sum += iterator;
            if (!config[iterator]) {
                config[iterator] = 0;
            }
            config[iterator] += 1;
        }
        return { config, sum };
    })();
    const requiredSum = (aliceSizesConfig.sum + bobSizesConfig.sum) / 2;
    if (aliceSizesConfig.sum === bobSizesConfig.sum) {
        return [0, 0];
    }
    const difference = Math.abs(aliceSizesConfig.sum - bobSizesConfig.sum);

    if (aliceSizesConfig.sum < bobSizesConfig.sum) {
        for (const iterator of aliceSizes) {
            const requiredFigure =
                requiredSum - aliceSizesConfig.sum + iterator;
            if (bobSizesConfig.config[requiredFigure]) {
                return [iterator, requiredFigure];
            }
        }
    } else {
        for (const iterator of bobSizes) {
            const requiredFigure = requiredSum - bobSizesConfig.sum + iterator;
            if (aliceSizesConfig.config[requiredFigure]) {
                return [requiredFigure, iterator];
            }
        }
    }
};

console.log(fairCandySwap([1, 2, 5], [2, 4])); //[5,4]
console.log(fairCandySwap((aliceSizes = [1, 2]), (bobSizes = [2, 3]))); //[1,2]
console.log(fairCandySwap((aliceSizes = [1, 1]), (bobSizes = [2, 2]))); //[1,2]
console.log(fairCandySwap((aliceSizes = [2]), (bobSizes = [1, 3]))); //[2,3]
