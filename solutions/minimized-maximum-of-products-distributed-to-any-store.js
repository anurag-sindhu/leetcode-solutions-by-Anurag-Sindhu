var minimizedMaximum = function (n, quantities) {
    let minCnt = Infinity;
    const maxQuantity = Math.max(...quantities);
    const minPossibility = Math.ceil(Math.min(...quantities) / n);
    const startPoint = minPossibility;
    const endPoint = maxQuantity;
    function isPossibleWith(withh) {
        let consumes = 0;
        for (const element of quantities) {
            consumes += Math.ceil(element / withh);
        }
        if (consumes <= n) {
            return true;
        }
        return false;
    }
    function binarySearch(startPoint, endPoint) {
        if (endPoint - startPoint <= 1) {
            if (isPossibleWith(startPoint)) {
                minCnt = Math.min(minCnt, startPoint);
                return true;
            }
            minCnt = Math.min(minCnt, endPoint);
            return true;
        }
        if (endPoint - startPoint <= 2) {
            if (isPossibleWith(startPoint)) {
                minCnt = Math.min(minCnt, startPoint);
                return true;
            }
            if (isPossibleWith(startPoint + 1)) {
                minCnt = Math.min(minCnt, startPoint + 1);
                return true;
            }
            minCnt = Math.min(minCnt, endPoint);
            return true;
        }
        const totalElement = Math.ceil((endPoint - startPoint + 1) / 2);
        const newStart = startPoint + totalElement;
        const poss = isPossibleWith(newStart);
        if (poss) {
            return binarySearch(startPoint, newStart);
        }
        return binarySearch(newStart, endPoint);
    }
    binarySearch(startPoint, endPoint);
    return minCnt;
};

console.log(minimizedMaximum((n = 6), (quantities = [11, 6])));
console.log(minimizedMaximum((n = 7), (quantities = [15, 10, 10])));
console.log(minimizedMaximum((n = 1), (quantities = [100000])));
