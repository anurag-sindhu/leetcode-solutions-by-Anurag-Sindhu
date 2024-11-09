const { areTwoArrayEqual } = require('../../js/compare-two-array.js')

var nextGreaterElements = function (nums2) {
  const slicedArrayButLast = nums2.slice(0, nums2.length - 1)
  const updatedArray = [...nums2, ...slicedArrayButLast]
  const store = [updatedArray[updatedArray.length - 1]]
  const nextGreatElements = [-1]
  for (let index = updatedArray.length - 1 - 1; index >= 0; index--) {
    const tempStore = store[store.length - 1] > updatedArray[index]
    if (tempStore) {
      nextGreatElements.push(store[store.length - 1])
    } else {
      while (store[store.length - 1] <= updatedArray[index]) {
        store.pop()
        if (!store.length) {
          break
        }
      }
      if (!store.length) {
        nextGreatElements.push(-1)
      } else {
        nextGreatElements.push(store[store.length - 1])
      }
    }
    store.push(updatedArray[index])
  }
  nextGreatElements.reverse()
  return nextGreatElements.slice(0, nums2.length)
}

console.log(
  areTwoArrayEqual(nextGreaterElements([1, 2, 3, 4, 5]), [2, 3, 4, 5, -1]),
)
console.log(
  areTwoArrayEqual(nextGreaterElements([1, 2, 3, 4, 3]), [2, 3, 4, -1, 4]),
)
console.log(areTwoArrayEqual(nextGreaterElements([1, 2, 1]), [2, -1, 2]))
