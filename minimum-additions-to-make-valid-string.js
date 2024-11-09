var addMinimum = function (word) {
    let newString = ''
    let count = 0
    for (let index = 0; index < word.length; index++) {
        if (index === 0) {
            if (word[index] === 'a') {
                newString += 'a'
                continue
            } else if (word[index] === 'b') {
                newString += 'ab'
                count += 1
            } else {
                newString += 'abc'
                count += 2
            }
        } else {
            if (word[index] === 'a') {
                if (newString[newString.length - 1] !== 'c') {
                    if (newString[newString.length - 1] === 'b') {
                        newString += 'c'
                        count += 1
                    } else {
                        newString += 'bc'
                        count += 2
                    }
                }
                newString += 'a'
            } else if (word[index] === 'b') {
                if (newString[newString.length - 1] !== 'a') {
                    newString += 'a'
                    count += 1
                }
                newString += 'b'
            } else {
                if (newString[newString.length - 1] !== 'a') {
                    newString += 'a'
                    count += 1
                }
                newString += 'b'
            }
        }
    }
    return count
}

console.log(addMinimum(word = "aaaaab") === 9);
console.log(addMinimum(word = "abc") === 0);
console.log(addMinimum(word = "b") === 2);
console.log(addMinimum(word = "aaa") === 6);