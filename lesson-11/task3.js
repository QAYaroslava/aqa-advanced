async function fetchTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error("Error fetching todo");
  }
  return response.json(); // Повертаємо об'єкт todo
}

// Функція для отримання user
async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return response.json(); // Повертаємо об'єкт user
}
async function fetchAllData() {
  try {
    // Викликаємо обидві функції одночасно і чекаємо на їх завершення
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);

    // Присвоюємо значення до змінних
    console.log("Todo:", todo);
    console.log("User:", user);
  } catch (error) {
    console.error("Error in Promise.all:", error);
  }
}

// Виклик функції
fetchAllData();
async function fetchRaceData() {
  try {
    // Очікуємо на перший виконаний або відхилений проміс
    const firstResolved = await Promise.race([fetchTodo(), fetchUser()]);

    // Присвоюємо значення до змінної
    console.log("First resolved:", firstResolved);
  } catch (error) {
    console.error("Error in Promise.race:", error);
  }
}

// Виклик функції
fetchRaceData();
