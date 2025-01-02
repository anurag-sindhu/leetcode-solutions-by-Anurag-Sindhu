var deserialize = function (s) {
    let index = 0;
    var deserializeHelper = function (s, output) {
        if (index >= s.length) {
            return output;
        }
        const element = s[index++];
        if (element === '[') {
            if (output === null) {
                output = [];
                output.push(deserializeHelper(s, null));
            } else {
                output += element;
            }
            deserializeHelper(s, null);
        } else if (element === ']') {
            console.log('object');
        } else if (element === ',') {
            deserializeHelper(s, null);
        } else if (typeof element === 'string') {
            if (output == null) {
                output = element;
            } else {
                output += element;
            }
            deserializeHelper(s, output);
        } else if (!isNaN(element)) {
            if (output === null) {
                output = element;
            } else {
                output += element;
            }
        }
        return output;
    };
    const resp = deserializeHelper(s, null);
    return resp;
};
console.log(deserialize((s = '[123,[456,[789]]]')));
console.log(deserialize((s = '324')));
