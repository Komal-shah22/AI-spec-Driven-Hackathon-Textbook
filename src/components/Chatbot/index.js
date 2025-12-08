import React, { useState } from 'react';
import styles from './Chatbot.module.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      // Get selected text if any
      const selectedText = window.getSelection().toString();

      // Placeholder for API call to FastAPI backend
      const response = await fetch('/api/chat', { // This URL will be configured later
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_query: input,
          selected_context: selectedText, // Send selected text to backend
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = { text: data.answer, sender: 'bot' }; // Assuming backend returns { "answer": "..." }
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (e) {
      console.error('Error sending message:', e);
      setError('Failed to get a response from the chatbot. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className={`${styles.message} ${styles.bot}`}>Thinking...</div>}
        {error && <div className={`${styles.message} ${styles.error}`}>{error}</div>}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.inputField}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask a question about the book..."
          disabled={loading}
        />
        <button className={styles.sendButton} onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
