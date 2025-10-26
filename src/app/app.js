import ApiClient from '../core/apiClient.js';
import MessageHandler from '../core/messageHandler.js';
import ConversationManager from '../core/conversationManager.js';

class App {
  constructor(config) {
    this.apiClient = new ApiClient(config.baseUrl, config.apiKey);
    this.messageHandler = new MessageHandler(this.apiClient);
    this.conversationManager = new ConversationManager();
    this.currentConversationId = null;
  }

  async initialize() {
    this.currentConversationId = 'default';
    this.conversationManager.createConversation(this.currentConversationId);
  }

  async sendMessage(message) {
    if (!this.messageHandler.validateMessage(message)) {
      throw new Error('Invalid message');
    }
    this.conversationManager.addMessage(this.currentConversationId, { role: 'user', content: message });
    const response = await this.messageHandler.processMessage(message);
    this.conversationManager.addMessage(this.currentConversationId, { role: 'assistant', content: response });
    return response;
  }

  getConversationHistory() {
    const conversation = this.conversationManager.getConversation(this.currentConversationId);
    return conversation ? conversation.messages : [];
  }
}

export default App;