function getMax(operations) {
  const maxStack = [-Infinity];
  const output = [];
  let currentNum = null;
  let maxNumSoFar = null;
  for (let index = 0; index < operations.length; index++) {
    maxNumSoFar = maxStack[maxStack.length - 1];
    if (operations[index][0] === `1`) {
      currentNum = parseInt(operations[index].substring(2));
      if (maxNumSoFar < currentNum) {
        maxStack.push(currentNum);
      } else {
        maxStack.push(maxNumSoFar);
      }
    } else if (operations[index][0] === '2') {
      maxStack.pop();
    } else {
      output.push(maxNumSoFar);
    }
  }
  return output;
}

console.log(getMax(['1 10', '1 20', '1 15', '1 30', '2', '3', '1 40', '3']));
console.log(getMax(['1 97', '2', '1 20', '2', '1 26', '1 20', '2', '3', '1 91', '3']));
