var containsCycle = function (grid) {
    
};

console.log(
  containsCycle(
    (grid = [
      ['a', 'a', 'a', 'a'],
      ['a', 'b', 'b', 'a'],
      ['a', 'b', 'b', 'a'],
      ['a', 'a', 'a', 'a']
    ])
  )
);

console.log(
  containsCycle(
    (grid = [
      ['c', 'c', 'c', 'a'],
      ['c', 'd', 'c', 'c'],
      ['c', 'c', 'e', 'c'],
      ['f', 'c', 'c', 'c']
    ])
  )
);
console.log(
  containsCycle(
    (grid = [
      ['a', 'b', 'b'],
      ['b', 'z', 'b'],
      ['b', 'b', 'a']
    ])
  )
);
