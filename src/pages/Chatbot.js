import React from 'react';

function Chatbot({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        height: "400px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <div style={{ padding: "10px", display: "flex", justifyContent: "space-between" }}>
        <h3>Chatbot</h3>
        <button
          onClick={onClose}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          X
        </button>
      </div>

      <div style={{ padding: "10px", height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* Chat content goes here */}
        <p>Welcome to the chatbot!</p>
        <p>How can we assist you today?</p>
        {/* Example of chat messages */}
        <div>
          <p><strong>Chatbot:</strong> Hello! How can I help you?</p>
          <p><strong>User:</strong> I need help with my order.</p>
          <p><strong>Chatbot:</strong> Sure! Can you provide your order number?</p>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
