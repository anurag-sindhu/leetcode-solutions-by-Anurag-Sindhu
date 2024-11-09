var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  if (!(cheeseSlices * 2 <= tomatoSlices)) {
    return [];
  }
  if (tomatoSlices % 2 !== 0) {
    return [];
  }
  let halfTomatoSlices = tomatoSlices / 2;
  let jumbo = halfTomatoSlices - cheeseSlices;
  if (jumbo > cheeseSlices) {
    return [];
  }
  return [jumbo, cheeseSlices - jumbo];
};

console.log(numOfBurgers(2385088, 164763));
console.log(numOfBurgers((tomatoSlices = 17), (cheeseSlices = 4)));
console.log(numOfBurgers((tomatoSlices = 16), (cheeseSlices = 7)));
console.log(numOfBurgers((tomatoSlices = 4), (cheeseSlices = 17)));
