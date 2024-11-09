var longestSubstring = function (str, k) {
  function difference(obj1) {
    for (const key in obj1) {
      if (obj1[key]) {
        frequency[key] = frequency[key] - obj1[key]
        obj1[key] = 0
      }
    }
  }
  const tempFrequencyHolder = {}
  const frequency = (function () {
    const config = {}
    for (let index = 0; index < str.length; index++) {
      tempFrequencyHolder[str[index]] = 0
      if (!config[str[index]]) {
        config[str[index]] = 0
      }
      config[str[index]] += 1
    }
    return config
  })()

  let startPointer = 0
  let endPointer = str.length - 1
  let movingPointer = str.length - 1
  function start(startPointer, endPointer, movingPointer, tempFrequencyHolder) {
    while (startPointer <= endPointer && startPointer <= movingPointer) {
      if (frequency[str[startPointer]] < k) {
        tempFrequencyHolder[str[startPointer]] += 1
        difference(tempFrequencyHolder)
        startPointer++
      } else if (frequency[str[movingPointer]] < k) {
        tempFrequencyHolder[str[movingPointer]] += 1
        difference(tempFrequencyHolder)
        movingPointer--
        endPointer = movingPointer
      } else {
        tempFrequencyHolder[str[movingPointer]] =
          tempFrequencyHolder[str[movingPointer]] + 1
        movingPointer--
        return Math.max(
          start(
            startPointer,
            endPointer--,
            movingPointer,
            ((tempFrequencyHolder[str[movingPointer]] =
              tempFrequencyHolder[str[movingPointer]] + 1),
            tempFrequencyHolder),
          ),
          start(
            startPointer++,
            endPointer,
            movingPointer,
            ((tempFrequencyHolder[str[movingPointer]] =
              tempFrequencyHolder[str[movingPointer]] + 1),
            tempFrequencyHolder),
          ),
        )
      }
    }
    if (startPointer <= endPointer) {
      return endPointer - startPointer + 1
    }
  }
  start(startPointer, endPointer, movingPointer, tempFrequencyHolder)

  
  return 0
}

console.log(longestSubstring((s = 'bchhbbdefghiaaacb'), (k = 3)) === 3)
console.log(longestSubstring((s = 'bbaaacbd'), (k = 3)) === 3)
console.log(longestSubstring((s = 'ababbc'), (k = 2)) === 5)
console.log(longestSubstring((s = 'ababacb'), (k = 3)) === 0)
console.log(longestSubstring((s = 'aaabb'), (k = 3)) === 3)
console.log(longestSubstring((s = 'weitong'), (k = 2)) === 0)
