(function () {
  function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  person.prototype.age = 23;
  let name = new person("anurag", "sandhu");
  let name2 = new person("anu", "rag");
  name.age = 233;
  name.__proto__.age = 444;
  console.log(name.__proto__.__proto__.__proto__);
})();
