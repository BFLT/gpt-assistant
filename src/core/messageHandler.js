class MessageHandler {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async processMessage(message) {
    if (!message || typeof message !== 'string') {
      throw new Error('Invalid message');
    }
    const messages = [{ role: 'user', content: message }];
    const response = await this.apiClient.getCompletion(messages);
    return response.choices[0].message.content;
  }

  validateMessage(message) {
    return message && message.trim().length > 0;
  }
}

export default MessageHandler;