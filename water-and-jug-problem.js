const canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  if (jug1Capacity + jug2Capacity < targetCapacity) {
    return false
  }

  const minus = Math.abs(jug1Capacity - jug2Capacity)
  const plus = Math.abs(jug1Capacity + jug2Capacity)
  const division = parseInt(jug1Capacity / jug2Capacity)
  const reminder = jug1Capacity % jug2Capacity

  if (targetCapacity % division === 0) {
    return true
  }
  if (targetCapacity % reminder === 0) {
    return true
  }

  if (targetCapacity % minus === 0) {
    return true
  }

  if (targetCapacity % plus === 0) {
    return true
  }
  return false
}

console.log(
  canMeasureWater(
    (jug1Capacity = 11),
    (jug2Capacity = 3),
    (targetCapacity = 13),
  ) === true,
)
console.log(
  canMeasureWater(
    (jug1Capacity = 1),
    (jug2Capacity = 1),
    (targetCapacity = 12),
  ) === false,
)
console.log(
  canMeasureWater(
    (jug1Capacity = 6),
    (jug2Capacity = 9),
    (targetCapacity = 1),
  ) === false,
)
console.log(
  canMeasureWater(
    (jug1Capacity = 34),
    (jug2Capacity = 5),
    (targetCapacity = 6),
  ) === true,
)

console.log(
  canMeasureWater(
    (jug1Capacity = 3),
    (jug2Capacity = 5),
    (targetCapacity = 4),
  ) === true,
)

console.log(
  canMeasureWater(
    (jug1Capacity = 2),
    (jug2Capacity = 6),
    (targetCapacity = 5),
  ) === false,
)
console.log(
  canMeasureWater(
    (jug1Capacity = 1),
    (jug2Capacity = 2),
    (targetCapacity = 3),
  ) === true,
)
