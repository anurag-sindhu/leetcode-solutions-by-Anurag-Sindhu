var mirrorReflection = function (p, q) {
    let reflector = 0;
    let counter = null;
    while (true) {
        counter += q;
        if (counter === p) {
            console.log('object');
            break;
        }
        reflector = (reflector + 1) % 2;
    }
    return reflector;
};

console.log(mirrorReflection((p = 3), (q = 1)));
console.log(mirrorReflection((p = 2), (q = 1)));
