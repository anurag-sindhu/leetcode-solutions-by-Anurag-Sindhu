var checkOnesSegment = function (s) {
    let hasSegmentEncountered = true;
    let count = 1;
    for (let index = 1; index < s.length; index++) {
        if (s[index] !== `1`) {
            hasSegmentEncountered = false;
        }
        if (hasSegmentEncountered == false) {
            if (s[index] == `1`) {
                return false;
            }
        }
    }
    return true;
};

console.log(checkOnesSegment((s = '110')) === true);
console.log(checkOnesSegment((s = '10')) === true);
console.log(checkOnesSegment((s = '1')) === true);
console.log(checkOnesSegment((s = '1001')) === false);
console.log(checkOnesSegment((s = '1100111')) === false);
