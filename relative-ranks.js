var findRelativeRanks = function (score) {
  const bucketSort = (function (arr = score) {
    const maxNumber = Math.max(...arr)
    const response = new Array(maxNumber)
    for (let index = 0; index < arr.length; index++) {
      if (response[arr[index]] === undefined) {
        response[arr[index]] = 0
      }
      response[arr[index]] += 1
    }
    return response
  })()

  const rankMapping = {
    1: `Gold Medal`,
    2: `Silver Medal`,
    3: `Bronze Medal`,
  }
  let rank = 1
  let output = {}
  for (let index = bucketSort.length - 1; index >= 0; index--) {
    const element = bucketSort[index]
    if (element) {
      if (rankMapping[rank] != undefined) {
        output[index] = rankMapping[rank]
      } else {
        output[index] = String(rank)
      }
      rank++
    }
  }
  return score.map((value) => output[value])
}

console.log(findRelativeRanks((score = [10, 3, 8, 9, 4])))
console.log(findRelativeRanks((score = [5, 4, 3, 2, 1])))
