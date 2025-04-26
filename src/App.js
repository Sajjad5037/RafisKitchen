// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        {/* Red Stripe with Location and Phone Number */}
        <div style={{ backgroundColor: "red", color: "white", padding: "0.5rem", textAlign: "center" }}>
          <span>Location: 123 Main St | Phone: (123) 456-7890</span>
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

        {/* Get Directions Section */}
        <div style={{ backgroundColor: "#f3f4f6", padding: "1rem", textAlign: "center" }}>
          <h2 style={{ color: "purple", marginBottom: "0.5rem" }}>Visit Us</h2>
          <p style={{ marginBottom: "1rem" }}>123 Main St, YourCity, State</p>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=123+Main+St" 
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
