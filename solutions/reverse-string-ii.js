var reverseStr = function (s, k) {
    if (k == 1) {
        return s;
    }
    if (s.length < k) {
        k = s.length;
    }
    let permanentK = k;
    let output = ``;
    let reversalStartIndex = 0;
    let reversalEndIndex = k;
    let blockStartIndex = k;
    let blockEndIndex = 2 * k;
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (index >= reversalStartIndex && index < reversalEndIndex) {
            output += s[reversalEndIndex - 1 - index + reversalStartIndex] || element;
        } else if (index >= blockStartIndex && index < blockEndIndex) {
            output += element;
        } else {
            k = 2 * k;
            reversalStartIndex = k;
            reversalEndIndex = Math.min(k + permanentK, s.length);
            blockStartIndex = permanentK + k;
            blockEndIndex = k + k;
            index -= 1;
        }
    }
    return output;
};

console.log(
    reverseStr(
        (s =
            'krmyfshbspcgtesxnnljhfursyissjnsocgdhgfxubewllxzqhpasguvlrxtkgatzfybprfmmfithphckksnvjkcvnsqgsgosfxc'),
        (k = 20),
    ) ===
        'jlnnxsetgcpsbhsfymrkhfursyissjnsocgdhgfxtxrlvugsaphqzxllwebukgatzfybprfmmfithphccxfsogsgqsnvckjvnskk',
); //agfedcb
console.log(
    reverseStr(
        (s =
            'hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl'),
        (k = 39),
    ) ===
        'fdcqkmxwholhytmhafpesaentdvxginrjlyqzyhehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqllgsqddebemjanqcqnfkjmi',
); //agfedcb
console.log(reverseStr((s = 'abcdefg'), (k = 8)) === 'gfedcba'); //agfedcb
console.log(reverseStr((s = 'abcdefg'), (k = 1)) === 'abcdefg');
console.log(reverseStr((s = 'abcdefg'), (k = 3)) === 'cbadefg');
console.log(reverseStr((s = 'abcd'), (k = 2)) === 'bacd');
