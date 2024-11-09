var RandomizedSet = function () {
  this.map = new Map()
  this.list = []
}

RandomizedSet.prototype.insert = function (val) {
  if (!this.map.has(val)) {
    this.map.set(val, this.list.length)
    this.list.push(val)
    return true
  }
  return false
}

RandomizedSet.prototype.swapIndex = function (index) {
  if (index === this.list.length - 1) {
    this.list = []
  } else {
    const lastElement = this.list.pop()
    this.list[index] = lastElement
  }
}

RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    const index = this.map.get(val)
    this.swapIndex(index)
    this.map.delete(val)
    if (this.list[index] || this.list[index] === 0) {
      this.map.set(this.list[index], index)
    }
    return true
  }
  return false
}

RandomizedSet.prototype.getRandom = function () {
  function getRandomArbitrary(min, max) {
    console.log({ min, max })
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const getRandomIndex = getRandomArbitrary(0, this.list.length - 1)
  console.log({ getRandomIndex })
  return this.list[getRandomIndex]
}

let obj
let operations
let values

operations = [
  'RandomizedSet',
  'insert',
  'remove',
  'insert',
  'getRandom',
  'remove',
  'insert',
  'getRandom',
]
values = [[], [1], [2], [2], [], [1], [2], []]
obj = new RandomizedSet()

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]))
  //[null, true, false, true, 2, true, false, 2]
}

operations = [
  'RandomizedSet',
  'remove',
  'remove',
  'insert',
  'getRandom',
  'remove',
  'insert',
]
values = [[], [0], [0], [0], [], [0], [0]]
obj = new RandomizedSet()

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]))
  //[null,false,false,true,0,true,true]
}

operations = [
  'RandomizedSet',
  'insert',
  'insert',
  'remove',
  'insert',
  'remove',
  'getRandom',
]
values = [[], [0], [1], [0], [2], [1], []]
obj = new RandomizedSet()

for (let index = 1; index < operations.length; index++) {
  console.log(obj[operations[index]](...values[index]))
  //[null, true, false, true, 2, true, false, 2]
}
