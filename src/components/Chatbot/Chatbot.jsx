import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Fade-out welcome message on first user message
    if (showWelcome) {
      const welcomeEl = document.querySelector(`.${styles.welcome}`);
      if (welcomeEl) welcomeEl.classList.add(styles["fadeOut"]);
      setTimeout(() => setShowWelcome(false), 500); // match CSS transition
    }

    const userMsg = { text: trimmedInput, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://aispecdrivenbookbackend-production-c3af.up.railway.app/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_query: trimmedInput })
      });

      const data = await res.json();
      setMessages(prev => [...prev, { text: data.answer, sender: "bot" }]);
    } catch (e) {
      setMessages(prev => [...prev, { text: "Error fetching response.", sender: "error" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  const clearChat = () => {
    setMessages([]);
    setShowWelcome(true);
  };

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
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputContainer}>
            <input
              className={styles.inputField}
              type="text"
              value={input}
              placeholder="Ask about the book..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className={styles.sendButton} onClick={sendMessage} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
