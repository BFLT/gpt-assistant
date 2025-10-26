class UserManagement {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  async getUsers() {
    const response = await fetch(`${this.baseUrl}/users`);
    return response.json();
  }

  async addUser(userData) {
    const response = await fetch(`${this.baseUrl}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const newUser = await response.json();
    const localUsers = this.getLocalUsers();
    localUsers.push({ ...newUser, id: Date.now() });
    localStorage.setItem('localUsers', JSON.stringify(localUsers));
    return newUser;
  }

  deleteUser(userId) {
    const localUsers = this.getLocalUsers();
    const filteredUsers = localUsers.filter(user => user.id !== userId);
    localStorage.setItem('localUsers', JSON.stringify(filteredUsers));
    return true;
  }

  getLocalUsers() {
    const stored = localStorage.getItem('localUsers');
    return stored ? JSON.parse(stored) : [];
  }

  searchUsers(query, users) {
    if (!query) return users;
    return users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    );
  }
}

export default UserManagement;