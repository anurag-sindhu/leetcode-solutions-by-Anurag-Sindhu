var baby = function (a) {
  return function (b) {
    var result = 'a = ' + a + ', b = ' + b;
    return function (c) {
      var result = 'a = ' + a + ', b = ' + b + ', c = ' + c;
      return result;
    };
  }
};
let babyObj = baby('ola')('bola')('coala');
console.log(babyObj);
