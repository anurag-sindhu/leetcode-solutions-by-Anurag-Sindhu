var splitString = function (s) {
    let primaryIndex = 0;
    let secondaryIndex = 1;
    let primaryString = s[primaryIndex];
    let secondaryString = s[secondaryIndex];
    while (primaryIndex < s.length) {
        if (Number(primaryString) > Number(secondaryString)) {
            if (Math.abs(Number(primaryString) - Number(secondaryString)) === 1) {
                continue;
            } else {
                if (Math.abs(Number(primaryString) - Number(secondaryString)) > 1) {
                    secondaryString += s[++secondaryIndex];
                    continue;
                }
            }
        }
        primaryString += s[++primaryIndex];
        secondaryIndex = primaryIndex + 1;
        secondaryString = s[secondaryIndex];
    }
};

console.log(splitString((s = '1234')));
console.log(splitString((s = '050043')));
console.log(splitString((s = '9080701')));
