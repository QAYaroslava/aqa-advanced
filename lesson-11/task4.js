class TodoService {
    async fetchTodo() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Error fetching todo');
      }
      return response.json();
    }
  }
  
  class UserService {
    async fetchUser() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error('Error fetching user');
      }
      return response.json();
    }
  }
  async function fetchAllData() {
    const todoService = new TodoService();
    const userService = new UserService();
  
    try {
      const [todo, user] = await Promise.all([todoService.fetchTodo(), userService.fetchUser()]);
      console.log('Todo:', todo);
      console.log('User:', user);
} 
    
    catch (error) {
      console.error('Error in Promise.all:', error);
    }
  }
  
  fetchAllData();

  async function fetchRaceData() {
    const todoService = new TodoService();
    const userService = new UserService();
  
    try {
      const firstResolved = await Promise.race([todoService.fetchTodo(), userService.fetchUser()]);
      console.log('First resolved:', firstResolved);
    } 
    catch (error) {
      console.error('Error in Promise.race:', error);
    }
  }
  
  fetchRaceData();
