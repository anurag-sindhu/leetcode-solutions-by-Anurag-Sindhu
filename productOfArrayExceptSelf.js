/**
 * space complexity O(n)
 * time complexity O(n^2)
 */
function product1(array) {
    let output = [], prod = 1;
    for (let index = 0; index < array.length; index++) {
        prod = 1;
        for (let index1 = 0; index1 < array.length; index1++) {
            if (index !== index1) {
                prod *= array[index1]
            }
        }
        output.push(prod);
    }
    return output;
}

function product2(array) {
    let left = [1], prod = 1, right = [1], output = [];
    for (let index = 1; index < array.length; index++) {
        prod *= array[index - 1];
        left.push(prod)
    }
    prod = 1;
    for (let index = array.length - 1; index > 0; index--) {
        prod *= array[index];
        right.unshift(prod)
    }
    for (let index = 0; index < left.length; index++) {
        output.push(left[index] * right[index])
    }
    return output;
}


function product3(array) {
    let left = [1], prod = 1, right = [1], output = [];
    for (let index = 1; index < array.length; index++) {
        prod *= array[index - 1];
        left.push(prod)
    }
    prod = 1;
    for (let index = array.length - 1; index > 0; index--) {
        prod *= array[index];
        right.push(prod)
    }
    right.reverse();
    for (let index = 0; index < left.length; index++) {
        output.push(left[index] * right[index])
    }
    return output;

}

console.log(product3([1, 2, 3, 4]));
console.log(product2([1, 2, 3, 4]));
console.log(product1([1, 2, 3, 4]));