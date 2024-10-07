const person = {
  firstName: "Scarlett",
  lastName: "O'Hara",
  age: 16,
};

person.email = "windWithTheGone@gmail.com";
delete person.age;

console.log(person);
