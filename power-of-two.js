function isPowerOfTwoLoop(n, start = 0, num = 2) {
  const power = Math.pow(num, start);
  if (power === n) {
    return true;
  } else if (power > n) {
    return false;
  } else {
    return isPowerOfTwoLoop(n, ++start, num);
  }
}
console.log(isPowerOfTwoLoop(1));
console.log(isPowerOfTwoLoop(16));
console.log(isPowerOfTwoLoop(3));

function isPowerOfTwoRecursive(n, start = 0, num = 2) {
  const power = Math.pow(num, start);
  if (power === n) {
    return true;
  } else if (power > n) {
    return false;
  } else {
    return isPowerOfTwoRecursive(n, ++start, num);
  }
}
console.log(isPowerOfTwoRecursive(1));
console.log(isPowerOfTwoRecursive(16));
console.log(isPowerOfTwoRecursive(3));
