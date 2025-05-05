import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Contact from "./pages/contact";
import Chatbot from "./pages/Chatbot"; // Import Chatbot
import OrderStatusPage from "./pages/OrderStatusPage";
import Contact2 from "./pages/contactRafisKitchen";


function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  // Function to toggle the chatbot
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Red Stripe with Location and Phone Number */}
        <div style={{ backgroundColor: "red", color: "white", padding: "0.5rem", textAlign: "center" }}>
          <span> Location:800 Wayne street Olean NY 14760 | Phone: 7167908100</span>
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
         <Link to="/order-status" style={{ color: "purple", textDecoration: "none" }}>
          Order Status
        </Link>    

          
          <Link to="/contact" style={{ color: "purple", textDecoration: "none" }}>Order Online</Link>
          <Link to="/contact2" style={{ color: "purple", textDecoration: "none" }}>
            Waiting List
          </Link>

        </nav>

        {/* Page Content */}
        <div style={{ flex: "1", padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order-status" element={<OrderStatusPage />} />
            <Route path="/contact2" element={<Contact2 />} />

          </Routes>
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

        {/* Chatbot Toggle Button */}
        <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
          <button 
            onClick={toggleChatbot} 
            style={{ 
              backgroundColor: "purple", 
              color: "white", 
              padding: "0.75rem", 
              borderRadius: "50%", 
              border: "none", 
              fontSize: "1.5rem", 
              cursor: "pointer",
              width: "50px", // size of the button
              height: "50px",
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center"
            }}
          >
            <i className="fas fa-robot" style={{ fontSize: "24px" }}></i> {/* Chatbot Icon */}
          </button>
        </div>

        {/* Chatbot Component */}
        {showChatbot && <Chatbot onClose={toggleChatbot} />}
      </div>
    </Router>
  );
}

export default App;
