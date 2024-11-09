var wateringPlants = function (plants, capacity) {
  const originalCapacity = capacity;
  let steps = 0;
  for (let index = 0; index < plants.length; index++) {
    if (capacity - plants[index] >= 0) {
      steps += 1;
    } else {
      steps += index * 2 + 1;
      capacity = originalCapacity;
    }
    capacity -= plants[index];
  }
  return steps;
};

console.log(wateringPlants((plants = [2, 2, 3, 3]), (capacity = 5)));
console.log(wateringPlants((plants = [1, 1, 1, 4, 2, 3]), (capacity = 4)));
console.log(wateringPlants((plants = [7, 7, 7, 7, 7, 7, 7]), (capacity = 8)));
