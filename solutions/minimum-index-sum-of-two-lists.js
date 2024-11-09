var findRestaurant = function (list1, list2) {
  let outputDish = [];
  let output = Infinity;
  const list1Config = {};
  const list2Config = {};
  for (let index = 0; index < list1.length; index++) {
    if (!list1Config[list1[index]]) {
      list1Config[list1[index]] = index;
    }
  }
  for (let index = 0; index < list2.length; index++) {
    if (!list2Config[list2[index]]) {
      list2Config[list2[index]] = index;
    }
  }
  const leastIndexObj = {};
  for (const key in list1Config) {
    if (list2Config[key] !== undefined) {
      let indexSum = list1Config[key] + list2Config[key];
      if (!leastIndexObj[indexSum]) {
        leastIndexObj[indexSum] = [];
      }
      leastIndexObj[indexSum].push(key);
      if (output > indexSum) {
        output = indexSum;
      }
    }
  }
  return leastIndexObj[output];
};

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Burger King', 'Tapioca Express', 'Shogun']
  )
);

console.log(
  findRestaurant(
    (list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']),
    (list2 = ['KFC', 'Shogun', 'Burger King'])
  )
);

console.log(
  findRestaurant(
    (list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']),
    (list2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'])
  )
);
