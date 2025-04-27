import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Contact from "./pages/contact";
import { useState } from "react";

// Chatbot component
const Chatbot = ({ onClose }) => {
  return (
    <div style={chatbotStyles.overlay}>
      <div style={chatbotStyles.container}>
        <button onClick={onClose} style={chatbotStyles.closeButton}>X</button>
        <h3>Chat with Us!</h3>
        {/* You can replace this with an actual chatbot widget or API */}
        <p style={chatbotStyles.chatWindow}>
          Hello! How can we help you today?
        </p>
        <input type="text" placeholder="Type your message..." style={chatbotStyles.input} />
        <button style={chatbotStyles.sendButton}>Send</button>
      </div>
    </div>
  );
};

// Styles for the chatbot modal
const chatbotStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  container: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    minWidth: "300px",
    maxWidth: "500px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "18px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  chatWindow: {
    margin: "20px 0",
    fontSize: "16px",
    color: "gray",
    height: "200px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    overflowY: "auto",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  sendButton: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "purple",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  }
};

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(prevState => !prevState);
  };

  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        {/* Red Stripe with Location and Phone Number */}
        <div style={{ backgroundColor: "red", color: "white", padding: "0.5rem", textAlign: "center" }}>
          <span> Location: 800 Wayne street Olean NY 14760 | Phone: 7167908100</span>
        </div>

        {/* Logo underneath the red stripe */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <img 
            src="https://i.imgur.com/Qsockhn.jpeg" 
            alt="Rafi Kitchen Logo" 
            style={{ maxWidth: "200px", height: "auto" }} 
          />
        </div>

        {/* Navbar */}
        <nav style={{ backgroundColor: "white", padding: "1rem", color: "purple", display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Link to="/" style={{ color: "purple", textDecoration: "none" }}>Home</Link>
          <Link to="/menu" style={{ color: "purple", textDecoration: "none" }}>Menu</Link>
          <Link to="/about" style={{ color: "purple", textDecoration: "none" }}>About</Link>
          <Link to="/reservation" style={{ color: "purple", textDecoration: "none" }}>Reservation</Link>
          <Link to="/contact" style={{ color: "purple", textDecoration: "none" }}>Contact</Link>
        </nav>

        {/* Page Content */}
        <div style={{ flex: "1", padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Chatbot Button */}
        <button 
          onClick={toggleChat} 
          style={{ 
            position: "fixed", 
            bottom: "20px", 
            right: "20px", 
            backgroundColor: "purple", 
            color: "white", 
            border: "none", 
            borderRadius: "50%", 
            padding: "15px", 
            fontSize: "20px", 
            cursor: "pointer" 
          }}>
          💬
        </button>

        {/* Chatbot Modal */}
        {isChatOpen && <Chatbot onClose={toggleChat} />}

        {/* Get Directions Section */}
        <div style={{ backgroundColor: "#f3f4f6", padding: "1rem", textAlign: "center" }}>
          <h2 style={{ color: "purple", marginBottom: "0.5rem" }}>Visit Us</h2>
          <p style={{ marginBottom: "1rem" }}>800 Wayne Street, Olean, NY 14760</p>
          <a 
            href="https://www.google.com/maps/place/800+Wayne+St,+Olean,+NY+14760,+USA/@42.0853223,-78.4416901,17z/data=!3m1!4b1!4m6!3m5!1s0x89d27057b9802739:0x79fa6fb46906073c!8m2!3d42.0853223!4d-78.4391152!16s%2Fg%2F11c2hdyycj?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: "purple", 
              color: "white", 
              padding: "0.75rem 1.5rem", 
              borderRadius: "8px", 
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1rem"
            }}
          >
            Get Directions
          </a>
        </div>

        {/* Footer */}
        <footer style={{ backgroundColor: "#1f2937", color: "white", padding: "1rem", textAlign: "center" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ margin: "0 0.5rem", color: "white", fontSize: "1.5rem" }}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ margin: "0 0.5rem", color: "white", fontSize: "1.5rem" }}
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          © {new Date().getFullYear()} Rafi Kitchen. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
