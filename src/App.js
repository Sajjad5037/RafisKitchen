// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Contact from "./pages/contact";
import ImageCarousel from "./pages/ImageCarousel"; // Import the ImageCarousel component

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
            src="https://i.imgur.com/JxNtFru.png" 
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

        {/* Image Carousel */}
        <ImageCarousel />  {/* Place the ImageCarousel component here */}

        {/* Image Gallery */}
        <div style={{ padding: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/C60QmSi.jpeg" 
              alt="Gallery Image 1" 
              style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "cover" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Image 1 Description</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/F1FLfqU.jpeg" 
              alt="Gallery Image 2" 
              style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "cover" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Image 2 Description</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/J9TFb3Z.jpeg" 
              alt="Gallery Image 3" 
              style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "cover" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Image 3 Description</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/jjSGMnh.jpeg" 
              alt="Gallery Image 4" 
              style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "cover" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Image 4 Description</p>
          </div>
        </div>

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

        {/* Footer */}
        <footer style={{ backgroundColor: "#1f2937", color: "white", padding: "1rem", textAlign: "center" }}>
          © {new Date().getFullYear()} Rafi Kitchen. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
