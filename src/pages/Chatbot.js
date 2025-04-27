import React, { useState, useEffect } from 'react';

function Chatbot({ onClose }) {
  // State to manage chat messages
  const [messages, setMessages] = useState([
    { sender: 'Chatbot', text: 'Welcome to the chatbot! How can we assist you today?' }
  ]);

  // Function to send a message to the backend and receive a response
  const sendMessage = async (message) => {
    try {
      const response = await fetch('https://your-backend-url.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      // Assuming the response contains a "reply" field
      const botReply = data.reply;

      // Update the chat with the user's message and the chatbot's reply
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'User', text: message },
        { sender: 'Chatbot', text: botReply }
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'Chatbot', text: 'Sorry, something went wrong. Please try again later.' }
      ]);
    }
  };

  // Optional: Load initial data or setup from API when component mounts
  useEffect(() => {
    // You can perform an initial API request here if needed.
  }, []);

  // Handle sending a message
  const handleSend = (e) => {
    e.preventDefault();
    const userMessage = e.target.message.value.trim();
    if (userMessage) {
      sendMessage(userMessage);
      e.target.reset();
    }
  };

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
        {/* Render chat messages dynamically */}
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{msg.sender}:</strong>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Send message form */}
      <form onSubmit={handleSend} style={{ padding: "10px", borderTop: "1px solid #ddd" }}>
        <input
          type="text"
          name="message"
          placeholder="Type a message..."
          style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "purple",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
            width: "100%",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
