function isMatchByIgnore(str, strIndex, pattern, patternIndex) {
    let localPatternIndex = patternIndex;
    let localStrIndex = strIndex;
    for (; localStrIndex < str.length; ) {
        if (localPatternIndex === pattern.length - 1 && pattern[localPatternIndex] === '*') {
            localPatternIndex++;
            return true;
        }
        if (pattern[localPatternIndex] === '?') {
            localPatternIndex++;
            localStrIndex++;
        } else if (pattern[localPatternIndex] === '*') {
            const resp = isMatchByIgnore(str, localStrIndex, pattern, (localPatternIndex += 1));
            if (resp === true) {
                return true;
            }
        } else {
            if (str[localStrIndex] === pattern[localPatternIndex]) {
                localPatternIndex++;
            } else {
                localPatternIndex = patternIndex;
            }
            localStrIndex++;
        }
    }
    if (localPatternIndex === pattern.length - 1 && pattern[localPatternIndex] === '*') {
        return true;
    }
    if (str[strIndex + 1] === undefined) {
        return false;
    }
    if (pattern[localPatternIndex] !== undefined) {
        return isMatchByIgnore(str, (strIndex += 1), pattern, patternIndex);
    }
    return true;
}

var isMatch = function(str, pattern) {
    pattern = pattern.replace(/\*+/g, '*');
    if (str && !pattern) {
        return false;
    }
    let patternIndex = 0;
    if (patternIndex === pattern.length - 1 && pattern[patternIndex] === '*') {
        return true;
    }
    if (!str && !pattern) {
        return true;
    }
    if (!str || !pattern) {
        return false;
    }
    for (let strIndex = 0; strIndex < str.length; strIndex++) {
        if (patternIndex === pattern.length - 1 && pattern[patternIndex] === '*') {
            return true;
        }
        if (pattern[patternIndex] === undefined) {
            return false;
        }
        if (pattern[patternIndex] === '?') {
            patternIndex++;
        } else if (pattern[patternIndex] === '*') {
            return isMatchByIgnore(str, strIndex, pattern, (patternIndex += 1));
        } else {
            if (str[strIndex] !== pattern[patternIndex]) {
                return false;
            }
            patternIndex++;
        }
    }
    if (pattern[patternIndex] !== undefined) {
        if (patternIndex === pattern.length - 1 && pattern[patternIndex] === '*') {
            return true;
        }
        return false;
    }
    return true;
};
console.log(isMatch((s = 'hi'), (p = '*?')) === true);
console.log(isMatch((s = 'a'), (p = 'a*')) === true);
console.log(isMatch((s = 'b'), (p = '?*?')) === false);
console.log(isMatch((s = 'aa'), (p = 'a*')) === true);
console.log(isMatch('acdcb', 'a*c?b') === false);
console.log(isMatch('abcabczzzde', '*abc???de*') === true);
console.log(isMatch('', '******') === true);
console.log(isMatch((s = 'cb'), (p = '?a')) === false);
console.log(isMatch((s = 'aa'), (p = 'a')) === false);
console.log(isMatch((s = 'aa'), (p = '*')) === true);
console.log(isMatch('abldefghdfghdfghdhellablgabl', 'ab?de*fg*hd*ab?') === true);
console.log(isMatch('abdef', 'a?*de?') === true);
console.log(isMatch('abdef', 'a?*de??') === false);
