var invalidTransactions = function (array) {
  const output = [];
  const obj = {};

  for (let index = 0; index < array.length; index++) {
    const [name, time, amount, city] = array[index].split(',');
    if (!obj[name]) {
      obj[name] = { time, city, index };
      if (parseInt(amount) > 1000) {
        output.push(array[index]);
      }
    } else {
      const detail = obj[name];
      if (city !== detail.city && parseInt(time) <= parseInt(detail.time) + 60) {
        output.push(array[index]);
        output.push(array[detail.index]);
      } else {
        if (parseInt(amount) > 1000) {
          output.push(array[index]);
        }
      }
    }
  }
  return output;
};

console.log(
  invalidTransactions(
    (transactions = ['alice,20,800,mtv', 'alice,50,100,mtv', 'alice,51,100,frankfurt'])
  )
);
//["alice,20,800,mtv","alice,50,100,mtv","alice,51,100,frankfurt"]
console.log(invalidTransactions((transactions = ['alice,20,800,mtv', 'alice,50,100,beijing'])));
console.log(invalidTransactions((transactions = ['alice,20,800,mtv', 'alice,50,1200,mtv'])));
console.log(invalidTransactions((transactions = ['alice,20,800,mtv', 'bob,50,1200,mtv'])));
