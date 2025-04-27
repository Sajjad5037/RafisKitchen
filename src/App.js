import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Contact from "./pages/contact";
import Chatbot from "./pages/Chatbot"; // Import Chatbot

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  // Function to toggle the chatbot visibility
  const toggleChatbot = () => setShowChatbot(prev => !prev);

  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        {/* Header with Location and Phone Number */}
        <header style={{ backgroundColor: "red", color: "white", padding: "0.5rem", textAlign: "center" }}>
          <span>Location: 800 Wayne Street, Olean NY 14760 | Phone: 716-790-8100</span>
        </header>

        {/* Logo */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <img 
            src="https://i.imgur.com/Qsockhn.jpeg" 
            alt="Rafi Kitchen Logo" 
            style={{ maxWidth: "200px", height: "auto" }} 
          />
        </div>

        {/* Navigation Bar */}
        <nav style={{ backgroundColor: "white", padding: "1rem", color: "purple", display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/menu" style={navLinkStyle}>Menu</Link>
          <Link to="/about" style={navLinkStyle}>About</Link>
          <Link to="/reservation" style={navLinkStyle}>Reservation</Link>
          <Link to="/contact" style={navLinkStyle}>Contact</Link>
        </nav>

        {/* Main Content */}
        <main style={{ flex: "1", padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Get Directions Section */}
        <section style={{ backgroundColor: "#f3f4f6", padding: "1rem", textAlign: "center" }}>
          <h2 style={{ color: "purple", marginBottom: "0.5rem" }}>Visit Us</h2>
          <p style={{ marginBottom: "1rem" }}>800 Wayne Street, Olean, NY 14760</p>
          <a 
            href="https://www.google.com/maps/place/800+Wayne+St,+Olean,+NY+14760,+USA"
            target="_blank" 
            rel="noopener noreferrer"
            style={getDirectionsBtnStyle}
          >
            Get Directions
          </a>
        </section>

        {/* Chatbot Toggle Button */}
        <div style={chatbotButtonStyle}>
          <button onClick={toggleChatbot} style={chatbotBtnStyle}>
            Chat
          </button>
        </div>

        {/* Footer */}
        <footer style={{ backgroundColor: "#1f2937", color: "white", padding: "1rem", textAlign: "center" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          © {new Date().getFullYear()} Rafi Kitchen. All rights reserved.
        </footer>

        {/* Chatbot Component */}
        {showChatbot && <Chatbot onClose={toggleChatbot} />}
      </div>
    </Router>
  );
}

// Reusable styles for various elements
const navLinkStyle = {
  color: "purple",
  textDecoration: "none"
};

const getDirectionsBtnStyle = {
  backgroundColor: "purple", 
  color: "white", 
  padding: "0.75rem 1.5rem", 
  borderRadius: "8px", 
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1rem"
};

const chatbotButtonStyle = {
  position: "fixed", 
  bottom: "20px", 
  right: "20px"
};

const chatbotBtnStyle = {
  backgroundColor: "purple", 
  color: "white", 
  padding: "0.75rem", 
  borderRadius: "50%", 
  border: "none", 
  fontSize: "1.5rem", 
  cursor: "pointer"
};

const socialLinkStyle = {
  margin: "0 0.5rem", 
  color: "white", 
  fontSize: "1.5rem"
};

export default App;
