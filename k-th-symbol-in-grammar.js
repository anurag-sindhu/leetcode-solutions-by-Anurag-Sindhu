const config = { 1: `0`, 2: `01`, 3: `0110`, 4: `01101001` };
let spareConfig = { highest: 4 };

function getMirror(str) {
  let out = '';
  for (let index = str.length - 1; index >= 0; index--) {
    out += str[index];
  }
  return out;
}

function getExistingConfig(n) {
  const configExists = config[n];
  if (configExists) {
    return configExists;
  } else {
    const highestConfig = config[spareConfig.highest];
    const firstHalfOfHighestConfig = highestConfig.substring(
      0,
      config[spareConfig.highest].length / 2
    );
    const secondHalfOfHighestConfig = highestConfig.substring(
      config[spareConfig.highest].length / 2
    );
    spareConfig.highest += 1;
    config[spareConfig.highest] =
      highestConfig + secondHalfOfHighestConfig + firstHalfOfHighestConfig;
    return getExistingConfig(n);
  }
}

var kthGrammar = function (n, k) {
  return getExistingConfig(n)[k - 1];
};

console.log(kthGrammar((n = 30), (k = 1)));
console.log(kthGrammar((n = 9), (k = 1)));
console.log(kthGrammar((n = 6), (k = 1)));
console.log(kthGrammar((n = 1), (k = 1)));
console.log(kthGrammar((n = 2), (k = 1)));
console.log(kthGrammar((n = 2), (k = 2)));
