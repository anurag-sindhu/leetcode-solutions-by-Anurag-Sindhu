function areTwoArrayEqual(expected, output) {
    for (let index = 0; index < expected.length; index++) {
        if (expected[index] !== output[index]) {
            console.log('index', index);
            console.log('expected', expected[index]);
            console.log('output', output[index]);
            return false;
        }
    }
    return true;
}

module.exports = { areTwoArrayEqual };
