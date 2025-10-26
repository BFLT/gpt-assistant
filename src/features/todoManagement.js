class TodoManagement {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  async getTodos() {
    const response = await fetch(`${this.baseUrl}/todos`);
    return response.json();
  }

  async getUserTodos(userId) {
    const response = await fetch(`${this.baseUrl}/todos?userId=${userId}`);
    return response.json();
  }

  async addTodo(todoData) {
    const response = await fetch(`${this.baseUrl}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoData)
    });
    return response.json();
  }

  searchTodos(query, todos) {
    if (!query) return todos;
    return todos.filter(todo =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}

export default TodoManagement;