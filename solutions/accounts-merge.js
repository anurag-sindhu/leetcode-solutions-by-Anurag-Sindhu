var accountsMerge = function (accounts) {
  const obj = {};

  for (let parentIndex = 0; parentIndex < accounts.length; parentIndex++) {
    if (!obj[parentIndex]) {
      obj[parentIndex] = {};
    }
    for (let childIndex = 1; childIndex < accounts[parentIndex].length; childIndex++) {
      obj[parentIndex][accounts[parentIndex][childIndex]] = accounts[parentIndex][0];
    }
  }
  const output = [];
  for (const iterator of accounts) {
    for (let index = 1; index < iterator.length; index++) {
      const element = array[index];
    }
  }

  for (const parentKey in obj) {
    for (const childKey in obj[parentKey]) {
      if (Object.hasOwnProperty.call(object, childKey)) {
        const element = object[childKey];
        key;
      }
    }
  }
  return output;
};

console.log(
  accountsMerge([
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['Mary', 'mary@mail.com'],
    ['John', 'johnnybravo@mail.com']
  ])
);

console.log(
  accountsMerge([
    ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
    ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
    ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
    ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
    ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co']
  ])
);
