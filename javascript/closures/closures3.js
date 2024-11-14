var add = (function () {
  var counter = 0,
  fun = function () {
    counter += 1;
    return counter
  };
  return  fun
})();

let a1 = add();
let a2 = add();
let a3 = add();
