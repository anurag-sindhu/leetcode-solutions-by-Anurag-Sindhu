var minimumRemoval = function(beans) {
    beans.sort(function(a, b) {
        return b - a;
    });
    let totalBeans = beans.reduce(function(sum, current) {
        return sum + current;
    });
    let beansToConsider = 0;
    for (let index = 0; index < beans.length; index++) {
        if (index === 0) {
            beansToConsider = beans[index];
        } else {
            const TempBeansToConsider = beans[index] * (index + 1);
            if (beansToConsider > TempBeansToConsider) {
                break;
            }
            beansToConsider = TempBeansToConsider;
        }
    }
    return totalBeans - beansToConsider;
};

console.log(minimumRemoval((beans = [4, 1, 6, 5])));
console.log(minimumRemoval((beans = [2, 10, 3, 2])));
