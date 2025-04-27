import { useState } from 'react';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Add user message to chat history
    setChatHistory([...chatHistory, { sender: 'user', text: message }]);
    
    // Send message to backend
    try {
      const response = await fetch('http://localhost:5000/api/chat', {  // Adjust URL to your backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'ai', text: data.response },
      ]);
      setMessage('');  // Clear input after sending
    } catch (error) {
      console.error('Error with the chatbot API:', error);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px', maxWidth: '350px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', padding: '10px' }}>
      <div style={{ height: '300px', overflowY: 'auto', marginBottom: '10px' }}>
        {chatHistory.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'AI'}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Ask me anything..."
          required
          style={{ flex: '1', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '4px' }}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
