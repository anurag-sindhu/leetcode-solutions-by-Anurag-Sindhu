var reverseWords = function (s) {
  let resp = '';
  const reversCharacter = (char) => {
    let str = '';
    for (let index = char.length - 1; index >= 0; index--) {
      str += char[index];
    }
    return str;
  };
  const splittedSTring = s.split(' ');
  for (const iterator of splittedSTring) {
    resp += reversCharacter(iterator);
    resp += ' ';
  }
  return resp.substring(0, resp.length - 1);
};
console.log(reverseWords("Let's take LeetCode contest"));
//"s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords('God Ding'));
//"doG gniD"
