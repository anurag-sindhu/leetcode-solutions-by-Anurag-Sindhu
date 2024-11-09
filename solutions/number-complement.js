var findComplement = function (num) {
  const convert = (dec) => (dec >>> 0).toString(2);
  const invert = (dec) => {
    const tempNum = String(dec);
    let resp = '';
    for (let index = 0; index < tempNum.length; index++) {
      resp += tempNum[index] === '1' ? 0 : 1;
    }
    return resp;
  };
  const getConverted = convert(num);
  const getInverted = invert(getConverted);
  const res = parseInt(getInverted, 2);
  return res;
};

console.log(findComplement(2));
console.log(findComplement(5));
console.log(findComplement(1));
