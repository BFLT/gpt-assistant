class CommentsManagement {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  async getComments() {
    const response = await fetch(`${this.baseUrl}/comments`);
    return response.json();
  }

  async getPostComments(postId) {
    const response = await fetch(`${this.baseUrl}/comments?postId=${postId}`);
    return response.json();
  }

  searchComments(query, comments) {
    if (!query) return comments;
    return comments.filter(comment =>
      comment.name.toLowerCase().includes(query.toLowerCase()) ||
      comment.body.toLowerCase().includes(query.toLowerCase())
    );
  }
}

export default CommentsManagement;