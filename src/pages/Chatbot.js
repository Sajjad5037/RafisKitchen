import React, { useState } from 'react';

export default function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([
    { sender: 'Chatbot', text: 'Welcome! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async (text) => {
    // append user message immediately
    setMessages(msgs => [...msgs, { sender: 'You', text }]);
    try {
      const res = await fetch('http://127.0.0.1:8000/api/chatRK', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      const { reply } = await res.json();
      setMessages(msgs => [...msgs, { sender: 'Chatbot', text: reply }]);
    } catch {
      setMessages(msgs => [...msgs, { sender: 'Chatbot', text: 'Oops, something went wrong.' }]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput('');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '300px',
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
    }}>
      {/* header */}
      <div style={{
        flex: '0 0 auto',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #eee'
      }}>
        <strong>Chatbot</strong>
        <button onClick={onClose} style={{
          background: 'red',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          cursor: 'pointer',
          lineHeight: '0'
        }}>×</button>
      </div>

      {/* messages */}
      <div style={{
        flex: '1 1 auto',
        padding: '10px',
        overflowY: 'auto',
        backgroundColor: '#fafafa'
      }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: '8px 0' }}>
            <strong>{m.sender}:</strong> <span>{m.text}</span>
          </div>
        ))}
      </div>

      {/* input form */}
      <form onSubmit={handleSubmit} style={{
        flex: '0 0 auto',
        padding: '10px',
        borderTop: '1px solid #eee',
        backgroundColor: '#fff'
      }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ddd'
          }}
        />
        <button type="submit" style={{
          marginTop: '8px',
          width: '100%',
          padding: '8px',
          backgroundColor: 'purple',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Send
        </button>
      </form>
    </div>
  );
}
