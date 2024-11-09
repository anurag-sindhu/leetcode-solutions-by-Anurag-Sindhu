var makeFancyString = function (s) {
    let st = ``;
    let isSkippingInProgress = false;
    let prev = null;
    let previousToPrevious = null;
    for (let index = 0; index < s.length; index++) {
        if (prev === null) {
            prev = s[index];
            st += s[index];
        } else if (previousToPrevious === null) {
            st += s[index];
            prev = s[index];
            previousToPrevious = s[index - 1];
        } else {
            if (
                !(
                    s[index] === previousToPrevious &&
                    s[index] === prev &&
                    prev === previousToPrevious
                )
            ) {
                if (isSkippingInProgress) {
                    isSkippingInProgress = false;
                    previousToPrevious = null;
                } else {
                    previousToPrevious = prev;
                }
                prev = s[index];
                st += s[index];
            } else {
                if (
                    s[index] === previousToPrevious &&
                    s[index] === prev &&
                    prev === previousToPrevious
                ) {
                    isSkippingInProgress = true;
                }
            }
        }
    }
    return st;
};

console.log(makeFancyString((s = 'aaabaaaa')));
console.log(makeFancyString((s = 'leeetcode')));
console.log(makeFancyString((s = 'aab')));
