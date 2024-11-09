var addStrings = function (num1, num2) {
  let resp = '';
  const addNumber = (nu1, nu2, rem = 0) => {
    const add = String(parseInt(nu1, 10) + parseInt(nu2, 10) + parseInt(rem, 10));
    if (add.length > 1) {
      return { prod: add[1], reminder: add[0] };
    }
    return { prod: add[0], reminder: 0 };
  };

  const reverseStringChars = (str) => {
    let resp = '';
    if (str.length) {
      for (let index = str.length - 1; index >= 0; index--) {
        resp += str[index];
      }
    }
    return resp;
  };
  let num1Index = num1.length - 1;
  let num2Index = num2.length - 1;
  let tempNum1 = 0;
  let tempNum2 = 0;
  let rem = 0;
  while (num1Index >= 0 || num2Index >= 0) {
    tempNum1 = 0;
    tempNum2 = 0;
    if (num1Index >= 0) {
      tempNum1 = num1[num1Index];
    }
    if (num2Index >= 0) {
      tempNum2 = num2[num2Index];
    }
    const getAdd = addNumber(tempNum1, tempNum2, rem);
    rem = getAdd.reminder;
    resp += getAdd.prod;
    num1Index--;
    num2Index--;
    if (!(num1Index >= 0 || num2Index >= 0) && getAdd.reminder) {
      resp += getAdd.reminder;
    }
  }
  return reverseStringChars(resp);
};
console.log(addStrings((num1 = '1'), (num2 = '9')));
console.log(addStrings((num1 = '11'), (num2 = '124')));
console.log(addStrings((num1 = '456'), (num2 = '77')));
console.log(addStrings((num1 = '11'), (num2 = '123')));
console.log(addStrings((num1 = '0'), (num2 = '0')));
