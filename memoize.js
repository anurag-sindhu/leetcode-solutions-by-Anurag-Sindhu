const memoizeConfig = {
    fib: {
    },
    factorial: {
    }
}

const functionConfig = {
    sum: (a, b) => {
        return a + b
    },
    fib: (n) => {
        if (memoizeConfig.fib[n] !== undefined) {
            return memoizeConfig.fib[n]
        }
        if (n <= 1) {
            return 1
        }
        const response = functionConfig.fib(n - 1) + functionConfig.fib(n - 2)
        console.log({ response });
        return response
    },
    factorial: (n) => {
        if (n <= 1) {
            return 1
        }
        const response = functionConfig.factorial(n - 1) * n
        console.log({ response });
        return response
    }
}

function memoize(fn) {
    return functionConfig[fn]
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 