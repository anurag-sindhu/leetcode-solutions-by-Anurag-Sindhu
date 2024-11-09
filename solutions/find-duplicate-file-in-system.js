var findDuplicate = function (paths) {
  const obj = {};
  for (const iterator of paths) {
    const [directory, ...pathAndContents] = iterator.split(' ');
    for (const pathAndContent of pathAndContents) {
      const contentStartIndex = pathAndContent.indexOf('(');
      const contentEndIndex = pathAndContent.indexOf(')');
      const content = pathAndContent.substring(contentStartIndex + 1, contentEndIndex);
      const path = pathAndContent.substring(0, contentStartIndex);
      if (!obj[content]) {
        obj[content] = [];
      }
      obj[content].push(`${directory}/${path}`);
    }
  }
  const output = [];
  for (const key in obj) {
    if (obj[key].length > 1) {
      output.push(obj[key]);
    }
  }
  return output;
};

console.log(
  findDuplicate(['root/a 1.txt(abcd) 2.txt(efgh)', 'root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)'])
);
//[["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]
console.log(
  findDuplicate([
    'root/a 1.txt(abcd) 2.txt(efgh)',
    'root/c 3.txt(abcd)',
    'root/c/d 4.txt(efgh)',
    'root 4.txt(efgh)'
  ])
);
