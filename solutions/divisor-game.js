var divisorGame = function (n, alice = 0, bob = 0, from = 0) {
  function findDivisor() {
    for (let index = 1; index < Math.sqrt(n); index++) {
      if (n % index === 0) {
        n = n - index;
        return index;
      }
    }
    throw false;
  }
  try {
    from = findDivisor(from);
    if (alice === bob) {
      alice += 1;
    } else if (alice > bob) {
      bob += 1;
    }
    return divisorGame(n, alice, bob, from);
  } catch (e) {
    if (alice > bob) {
      return true;
    }
    return false;
  }
};

console.log(divisorGame(3));
console.log(divisorGame(2));
console.log(divisorGame(20));
