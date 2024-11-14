var obj = {name: "Niladri"};

var greeting = function (a, b, c) {
  debugger;
  return "welcome " + this.name + " to " + a + " " + b + " in " + c;
};

// array of arguments to the actual function
var args = ["Newtown", "KOLKATA", "WB"];

console.log(greeting.apply(obj, args));
