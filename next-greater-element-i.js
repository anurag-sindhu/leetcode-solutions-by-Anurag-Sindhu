var nextGreaterElement = function (nums1, nums2) {
  const store = [nums2[nums2.length - 1]]
  const nums2ElementIndexMapping = {
    [nums2[nums2.length - 1]]: nums2.length - 1,
  }
  const nextGreatElements = [-1]
  for (let index = nums2.length - 1 - 1; index >= 0; index--) {
    nums2ElementIndexMapping[nums2[index]] = index
    const tempStore = store[store.length - 1] > nums2[index]
    if (tempStore) {
      nextGreatElements.push(store[store.length - 1])
    } else {
      while (store[store.length - 1] < nums2[index]) {
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
    store.push(nums2[index])
  }
  nextGreatElements.reverse()
  const output = []
  for (const iterator of nums1) {
    output.push(nextGreatElements[nums2ElementIndexMapping[iterator]])
  }
  return output
}

console.log(nextGreaterElement((nums1 = [4, 1, 2]), (nums2 = [1, 3, 4, 2])))
//[-1,3,-1]
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))
//[7,7,7,7,7]
console.log(nextGreaterElement((nums1 = [2, 4]), (nums2 = [1, 2, 3, 4])))
//[3,-1]
