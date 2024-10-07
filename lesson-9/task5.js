const users = [
  { name: "Софія", email: "sofi@gmail.com", age: 19 },
  { name: "Еліна", email: "elina@gmail.com", age: 18 },
  { name: "Анна", email: "anna@gmail.com", age: 19 },
];

for (const { name, email, age } of users) {
  console.log("Ім'я студента: ", name);
  console.log("Електронна адреса: ", email);
  console.log("Вік: ", age);
}
