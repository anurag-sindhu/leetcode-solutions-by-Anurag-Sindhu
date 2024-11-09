var takeCharacters = function (s, k) {
  if (k <= 0) {
    return 0
  }
  const forwardFrequencyConfig = (function () {
    const arr = []
    for (let index = 0; index < s.length; index++) {
      if (arr.length) {
        if (s[index] === `a`) {
          arr.push({
            a: arr[arr.length - 1].a + 1,
            b: arr[arr.length - 1].b,
            c: arr[arr.length - 1].c
          })
        } else if (s[index] === `b`) {
          arr.push({
            a: arr[arr.length - 1].a,
            b: arr[arr.length - 1].b + 1,
            c: arr[arr.length - 1].c
          })
        } else {
          arr.push({
            a: arr[arr.length - 1].a,
            b: arr[arr.length - 1].b,
            c: arr[arr.length - 1].c + 1
          })
        }
      } else {
        if (s[index] === `a`) {
          arr.push({
            a: 1,
            b: 0,
            c: 0
          })
        } else if (s[index] === `b`) {
          arr.push({
            a: 0,
            b: 1,
            c: 0
          })
        } else {
          arr.push({
            a: 0,
            b: 0,
            c: 1
          })
        }
      }
    }
    return arr
  })()
    
  const backwardFrequencyConfig = (function () {
    const arr = []
    for (let index = s.length - 1; index >= 0; index--) {
      if (arr.length) {
        if (s[index] === `a`) {
          arr.push({
            a: arr[arr.length - 1].a + 1,
            b: arr[arr.length - 1].b,
            c: arr[arr.length - 1].c
          })
        } else if (s[index] === `b`) {
          arr.push({
            a: arr[arr.length - 1].a,
            b: arr[arr.length - 1].b + 1,
            c: arr[arr.length - 1].c
          })
        } else {
          arr.push({
            a: arr[arr.length - 1].a,
            b: arr[arr.length - 1].b,
            c: arr[arr.length - 1].c + 1
          })
        }
      } else {
        if (s[index] === `a`) {
          arr.push({
            a: 1,
            b: 0,
            c: 0
          })
        } else if (s[index] === `b`) {
          arr.push({
            a: 0,
            b: 1,
            c: 0
          })
        } else {
          arr.push({
            a: 0,
            b: 0,
            c: 1
          })
        }
      }
    }
    return arr.reverse()
  })()
    
  let minDistance = Infinity
  let forwardFrequencyConfigIndex = -1
  let backwardFrequencyConfigIndex = 0
  while (
    s.length > forwardFrequencyConfigIndex &&
    backwardFrequencyConfigIndex !== forwardFrequencyConfigIndex
  ) {
    let aFrequency =
      ((backwardFrequencyConfig[backwardFrequencyConfigIndex] &&
        backwardFrequencyConfig[backwardFrequencyConfigIndex].a) ||
        0) +
      ((forwardFrequencyConfig[forwardFrequencyConfigIndex] &&
        forwardFrequencyConfig[forwardFrequencyConfigIndex].a) ||
        0)
    let bFrequency =
      ((backwardFrequencyConfig[backwardFrequencyConfigIndex] &&
        backwardFrequencyConfig[backwardFrequencyConfigIndex].b) ||
        0) +
      ((forwardFrequencyConfig[forwardFrequencyConfigIndex] &&
        forwardFrequencyConfig[forwardFrequencyConfigIndex].b) ||
        0)
    let cFrequency =
      ((backwardFrequencyConfig[backwardFrequencyConfigIndex] &&
        backwardFrequencyConfig[backwardFrequencyConfigIndex].c) ||
        0) +
      ((forwardFrequencyConfig[forwardFrequencyConfigIndex] &&
        forwardFrequencyConfig[forwardFrequencyConfigIndex].c) ||
        0)
    if (aFrequency >= k && bFrequency >= k && cFrequency >= k) {
      let distance = 0
      if (backwardFrequencyConfigIndex < s.length) {
        distance += s.length - backwardFrequencyConfigIndex
      }
      if (forwardFrequencyConfigIndex !== -1) {
        distance += forwardFrequencyConfigIndex + 1
      }
      if (minDistance > distance) {
        minDistance = distance
      }
      backwardFrequencyConfigIndex++
      if (backwardFrequencyConfigIndex > s.length) {
        break
      }
    } else {
      forwardFrequencyConfigIndex++
    }
  }
  if (minDistance === Infinity) {
    return -1
  }
  return minDistance
}
console.log(takeCharacters('cbaabccac', 3) === -1)
console.log(takeCharacters('acbcc', 1) === 3)
console.log(takeCharacters((s = 'aabaaaacaabc'), (k = 2)) === 8)
console.log(takeCharacters((s = 'a'), (k = 1)) === -1)
console.log(takeCharacters((s = 'a'), (k = 0)) === 0)
