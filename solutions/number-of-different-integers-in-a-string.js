function removeLeadingZero(num) {
    let isBreak = true;
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        if (element === '0') {
            continue;
        } else {
            isBreak = false;
            break;
        }
    }
    if (isBreak) {
        return 0;
    }
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        if (element === '0') {
            continue;
        }
        return num.substring(index);
    }
}
var numDifferentIntegers = function (word) {
    const integers = {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
    };
    const obj = {};
    let prevContent = '';
    for (let index = 0; index < word.length; index++) {
        const element = word[index];
        if (integers[element] !== undefined) {
            prevContent += element;
        } else {
            if (prevContent.length) {
                obj[removeLeadingZero(prevContent)] = true;
            }
            prevContent = '';
        }
    }
    if (prevContent.length) {
        obj[removeLeadingZero(prevContent)] = true;
    }
    return Object.keys(obj).length;
};
//'0i00e',
//'0a0'
console.log(
    numDifferentIntegers(
        (word =
            `239370688023611040705962469696782876275265198273011522169043782150822941941077` +
            `15415323940065974637155137417258524325590572244788151165573802603904322112275796635710468` +
            `458422817042817495711100769742649719898936071371404562543469556334554460578237387573231498568581` +
            `54529105301197388177242583658641529908583934918768953462557716z9743802042995294464628808417333470` +
            `1047574188936201324845149110176716130267041674438237608038734431519439828191344238609567530399189316` +
            `846359766256507371240530620697102864238792350289978450509162697068948604722646739174590530336510475061` +
            `521094503850598453536706982695212493902968251702853203929616930291257062173c79487281900662343830648295410`),
    ) === 3,
);
console.log(numDifferentIntegers((word = '0i00e')));
console.log(numDifferentIntegers((word = '0a0')));

console.log(numDifferentIntegers((word = 'leet1234code234')));
console.log(numDifferentIntegers((word = 'a123bc34d8ef34')));
console.log(numDifferentIntegers((word = 'a1b01c001')));
