class PostsManagement {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  async getPosts() {
    const response = await fetch(`${this.baseUrl}/posts`);
    return response.json();
  }

  async getUserPosts(userId) {
    const response = await fetch(`${this.baseUrl}/posts?userId=${userId}`);
    return response.json();
  }

  searchPosts(query, posts) {
    if (!query) return posts;
    return posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
    );
  }
}

export default PostsManagement;