function maxAlternatingSum(A) {
    let odd = 0;
    let even = 0;

    for (let index = 0; index < A.length; index++) {
        const element = A[index];
        odd = Math.max(odd, even - element);
        even = Math.max(even, odd + element);
    }

    return even;
}

console.log(maxAlternatingSum((nums = [4, 2, 5, 3])));
console.log(maxAlternatingSum((nums = [6, 2, 1, 2, 4, 5])));
