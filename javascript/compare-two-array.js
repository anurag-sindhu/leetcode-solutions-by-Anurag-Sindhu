function areTwoArrayEqual(expected, output) {
    for (let index = 0; index < expected.length; index++) {
        if (expected[index] !== output[index]) {
            return false;
        }
    }
    return true;
}

module.exports = { areTwoArrayEqual };
