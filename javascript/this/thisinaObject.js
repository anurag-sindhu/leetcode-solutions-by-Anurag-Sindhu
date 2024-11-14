var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
var x = this;
console.log(person);
console.log(person.fullName());
console.log(this);
