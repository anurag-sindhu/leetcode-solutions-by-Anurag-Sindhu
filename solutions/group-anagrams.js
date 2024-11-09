var groupAnagrams = function (strs) {
  const obj = {};
  let element = null;
  let key = null;
  for (let index = 0; index < strs.length; index++) {
    element = strs[index];
    key = element.split('').sort().join('');
    if (!obj[key]) {
      obj[key] = [element];
    } else {
      obj[key].push(element);
    }
  }
  return Object.values(obj);
};

console.log(groupAnagrams(['a']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
