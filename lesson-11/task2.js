function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Error fetching todo");
      }
      return response.json();
    },
  );
}

fetchTodo()
  .then((todo) => {
    console.log("Todo object:", todo);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Error fetching user");
      }
      return response.json();
    },
  );
}

fetchUser()
  .then((user) => {
    console.log("User object:", user);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

Promise.all([fetchTodo(), fetchUser()])
  .then((results) => {
    const [todo, user] = results;
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Error in Promise.all:", error);
  });
Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log("First resolved:", result);
  })
  .catch((error) => {
    console.error("Error in Promise.race:", error);
  });
