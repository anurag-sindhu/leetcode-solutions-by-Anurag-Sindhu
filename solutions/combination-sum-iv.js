var combinationSum4 = function (nums, target) {
  let count = 0
  function start(nums, target, sum = 0) {
    if (sum === target) {
      count += 1
      sum += 1
      return
    } else if (sum > target) {
      return
    }
    for (const iterator of nums) {
      start(nums, target, iterator + sum)
    }
  }
  start(nums, target)
  return count
}
let res = 0
res = combinationSum4((nums = [1, 2, 3]), (target = 32))
res = combinationSum4((nums = [1, 2, 3]), (target = 4))
res = combinationSum4((nums = [9]), (target = 3))
console.log(res)
