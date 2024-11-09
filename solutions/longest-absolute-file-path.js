var lengthLongestPath = function (input) {
  let maxLength = 0
  const splittedInput = input.split('\n')
  const config = {}
  let dirLevel = 0
  for (const iterator of splittedInput) {
    let currentIndex = 0
    dirLevel = 0
    if (iterator[currentIndex] === '\t') {
      dirLevel = 1
      while (iterator[currentIndex + 1] === '\t') {
        dirLevel++
        currentIndex++
      }
      let length = 0
      let isFile = false
      for (let index = currentIndex + 1; index < iterator.length; index++) {
        length += 1
        if (iterator[index] === '.') {
          isFile = true
          break
        }
      }
      const directoryLength = iterator.substring(currentIndex + 1).length
      let tempDirLevel = 0
      let tempLength = 0
      if (isFile) {
        while (tempDirLevel < dirLevel) {
          tempLength += config[tempDirLevel]
          tempDirLevel++
        }
        if (maxLength < tempLength + directoryLength + dirLevel) {
          maxLength = tempLength + directoryLength + dirLevel
        }
      } else {
        config[dirLevel] = directoryLength
        dirLevel += 1
      }
    } else {
      let isFile = false
      const directoryLength = iterator.length
      for (let index = 0; index < iterator.length; index++) {
        if (iterator[index] === '.') {
          isFile = true
          break
        }
      }
      if (isFile) {
        if (maxLength < directoryLength) {
          maxLength = directoryLength
        }
      } else {
        config[dirLevel] = directoryLength
      }
    }
  }

  return maxLength
}

console.log(lengthLongestPath('file1.txt\nfile2.txt\nlongfile.txt') === 12)
console.log(lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext') === 20)
console.log(
  lengthLongestPath(
    'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext',
  ) === 32,
)

console.log(lengthLongestPath('a') === 0)
