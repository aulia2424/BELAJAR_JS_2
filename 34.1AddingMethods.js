/*
Methods
Methods are functions that are stored as object properties.
Use the following syntax to create an object method:
*/
function person(name, age) {
  this.name = name;
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  };
}
var p = new person("aul", 17);
p.changeName("aull slebew");

/*
Methods
You can also define the function outside of the constructor function and associate it with the object.
*/
function person(name, age) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}
