
import React, { useState, useEffect } from 'react';
import styles from './Chatbot.module.css';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Slide away welcome message when user sends first message
  useEffect(() => {
    if (messages.length > 0 && showWelcome) {
      setShowWelcome(false);
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, newMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_query: input })
      });

      const data = await res.json();
      setMessages(prev => [...prev, { text: data.answer, sender: "bot" }]);
    } catch (e) {
      setMessages(prev => [...prev, { text: "Error fetching response.", sender: "error" }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => setMessages([]);

  return (
    <>
      {!open && (
        <div className={styles.chatIcon} onClick={() => setOpen(true)}>
          💬
        </div>
      )}

      {open && (
        <div className={styles.chatPopup}>
          <div className={styles.header}>
            <span>AI Assistant</span>
            <div className={styles.headerBtns}>
              <button className={styles.headerBtn} onClick={clearChat}>🗑</button>
              <button className={styles.headerBtn} onClick={() => setOpen(false)}>✖</button>
            </div>
          </div>

          <div className={styles.messagesContainer}>
            {showWelcome && (
              <div className={`${styles.message} ${styles.bot} ${styles.welcome}`}>
                Welcome! Ask me anything about the book.
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${styles[msg.sender]}`}>
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className={`${styles.message} ${styles.bot}`}>
                Thinking...
              </div>
            )}
          </div>

          <div className={styles.inputContainer}>
            <input
              className={styles.inputField}
              type="text"
              value={input}
              placeholder="Ask about the book..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button className={styles.sendButton} onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
