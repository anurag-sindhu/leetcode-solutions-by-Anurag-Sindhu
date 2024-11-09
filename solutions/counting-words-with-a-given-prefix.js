var prefixCount = function(words, pref) {
    for (let index = 0; index < words.length; index++) {
        words[index] = words[index].substring(0, pref.length);
    }
    let count = 0;
    for (const iterator of words) {
        if (iterator === pref) {
            count++;
        }
    }
    return count;
};

console.log(prefixCount((words = ['pay', 'attention', 'practice', 'attend']), (pref = 'at')));
console.log(prefixCount((words = ['leetcode', 'win', 'loops', 'success']), (pref = 'code')));
