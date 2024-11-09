var bitwiseComplement = function (n) {
  const inBitWise = n.toString(2);
  let str = ``;
  for (let index = 0; index < inBitWise.length; index++) {
    if (inBitWise[index] === `1`) {
      str += 0;
    } else {
      str += 1;
    }
  }
  return parseInt(str, 2);
};

console.log(bitwiseComplement(10));
console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));
