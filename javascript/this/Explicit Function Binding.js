var person1 = {
  'firstName' : "Anurag",
  'lastName' : "sindhu",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
console.log(person1.fullName.call(person2));
