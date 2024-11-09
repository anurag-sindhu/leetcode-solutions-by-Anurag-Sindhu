function isStringValid(str, change, frequency) {
    const totalChars = str.length;
    let maxFrequency = -Infinity;
    for (const key in frequency) {
        if (frequency[key] > maxFrequency) {
            maxFrequency = frequency[key];
        }
    }
    if (totalChars - change <= maxFrequency) {
        return true;
    }
    return false;
}

var characterReplacement = function(str, change) {
    let maxLength = -Infinity;
    let substring;
    let slowIndex = 0,
        fastIndex = 0;
    const frequency = { [str[slowIndex]]: 1 };

    while (fastIndex < str.length && slowIndex <= fastIndex) {
        substring = str.substring(slowIndex, fastIndex + 1);
        while (!isStringValid(substring, change, frequency) && slowIndex <= fastIndex) {
            frequency[str[slowIndex]] -= 1;
            slowIndex++;
            substring = str.substring(slowIndex, fastIndex + 1);
        }
        if (substring.length >= maxLength) {
            maxLength = substring.length;
        }

        fastIndex++;
        if (!frequency[str[fastIndex]]) {
            frequency[str[fastIndex]] = 0;
        }
        frequency[str[fastIndex]] += 1;
    }
    return maxLength;
};

console.log(characterReplacement((s = 'AABABBA'), (k = 1)) === 4);
console.log(characterReplacement((s = 'ABAB'), (k = 2)) === 4);
