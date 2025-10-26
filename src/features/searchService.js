class SearchService {
  constructor() {
    this.debounceTimer = null;
    this.debounceDelay = 300;
  }

  debounceSearch(callback) {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(callback, this.debounceDelay);
  }

  search(query, data, searchFields) {
    if (!query || !data) return data;
    const lowerQuery = query.toLowerCase();
    return data.filter(item =>
      searchFields.some(field =>
        item[field] && item[field].toLowerCase().includes(lowerQuery)
      )
    );
  }

  searchUsers(query, users) {
    return this.search(query, users, ['name', 'email']);
  }

  searchTodos(query, todos) {
    return this.search(query, todos, ['title']);
  }

  searchPosts(query, posts) {
    return this.search(query, posts, ['title', 'body']);
  }

  searchComments(query, comments) {
    return this.search(query, comments, ['name', 'body']);
  }
}

export default SearchService;