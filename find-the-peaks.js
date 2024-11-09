var findPeaks = function (mountain) {
    const out = [];
    for (let index = 1; index < mountain.length - 1; index++) {
        if (mountain[index - 1] < mountain[index] && mountain[index] > mountain[index + 1]) {
            out.push(index);
        }
    }
    return out;
};

console.log(findPeaks((mountain = [2, 4, 4])));
console.log(findPeaks((mountain = [1, 4, 3, 8, 5])));
