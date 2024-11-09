var simplifiedFractions = function (n) {
  const output = {};
  for (let index = 1; index < n; index++) {
    for (let fraction = index + 1; fraction <= n; fraction++) {
      if (!output[index / fraction]) {
        output[index / fraction] = String(`${index}/${fraction}`);
      }
    }
  }
  return Object.values(output);
};
console.log(simplifiedFractions((n = 3)));
console.log(simplifiedFractions((n = 4)));
console.log(simplifiedFractions((n = 2)));
