var asteroidCollision = function (asteroids) {
    const stack = [];
    let index = 0;
    while (index < asteroids.length) {
        stack.push(asteroids[index]);
        while (stack[stack.length - 1] < 0 && stack[stack.length - 2] > 0) {
            const firstPoppedStack = stack.pop();
            const secondPoppedStack = stack.pop();
            if (Math.abs(firstPoppedStack) === Math.abs(secondPoppedStack)) {
                continue;
            } else if (Math.abs(firstPoppedStack) > Math.abs(secondPoppedStack)) {
                stack.push(firstPoppedStack);
            } else {
                stack.push(secondPoppedStack);
            }
        }
        index++;
    }
    return stack;
};

console.log(asteroidCollision((asteroids = [5, 10, -5]))); // [5, 10]
console.log(asteroidCollision((asteroids = [10, 2, -5]))); // [5, 10]
console.log(asteroidCollision((asteroids = [8, -8])));
