//Use .bind() javascript

var obj = {name:"Niladri"};

var greeting = function(a,b,c){
  return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

var bound = greeting.bind(obj);

console.log(bound("Newtown","KOLKATA","WB"));
console.log(bound("Newtown1","KOLKATA1","WB1"));
