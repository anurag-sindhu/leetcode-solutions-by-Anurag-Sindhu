var lexicalOrder = function (n) {
  const arr = []
  while (n) {
    arr.push(String(n))
    n--
  }
  return arr.sort()
}

console.log(lexicalOrder((n = 13)))
console.log(lexicalOrder((n = 2)))
