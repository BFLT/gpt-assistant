class ConversationManager {
  constructor() {
    this.conversations = new Map();
  }

  createConversation(id) {
    if (this.conversations.has(id)) {
      return this.conversations.get(id);
    }
    const conversation = { id, messages: [] };
    this.conversations.set(id, conversation);
    return conversation;
  }

  addMessage(conversationId, message) {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error('Conversation not found');
    }
    conversation.messages.push(message);
    return conversation;
  }

  getConversation(conversationId) {
    return this.conversations.get(conversationId);
  }

  deleteConversation(conversationId) {
    return this.conversations.delete(conversationId);
  }
}

export default ConversationManager;