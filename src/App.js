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

        {/* Image Carousel */}
        <ImageCarousel />

        {/* Our Menu Heading */}
        <h2 style={{ textAlign: "center", margin: "2rem 0 1rem 0", color: "purple", fontSize: "2rem" }}>
          Our Menu
        </h2>

        {/* Image Gallery menu pictures*/}
        <div style={{ padding: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/C60QmSi.jpeg" 
              alt="Gallery Image 1" 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description Text of the picture 1</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/LFoND9C.jpeg" 
              alt="Gallery Image 2" 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description Text of the picture 2</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/J9TFb3Z.jpeg" 
              alt="Gallery Image 3" 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description Text of the picture 3</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/jjSGMnh.jpeg" 
              alt="Gallery Image 4" 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description Text of the picture 4</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/fYbDxgd.jpeg" 
              alt="Gallery Image 5" 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description Text of the picture 5</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/8OgWRxu.jpeg" 
              alt="Gallery Image 6" 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description Text of the picture 6</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/Lrsa3lf.jpeg" 
              alt="Gallery Image 7"  
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description Text of the picture 7</p>
          </div>        
        </div>
        {/* Our Ambiance Heading */}
        <h2 style={{ textAlign: "center", margin: "2rem 0 1rem 0", color: "purple", fontSize: "2rem" }}>
          Our Beautiful Ambiance
        </h2>

        {/* Image Ambiance Gallery Pictures pictures*/}
        <div style={{ padding: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/F1FLfqU.jpeg" 
              alt="Gallery Image 1" 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description Text</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/i0zg0WF.jpeg" 
              alt="Gallery Image 2" 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description Text of the picture</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/IBmkLYh.jpeg" 
              alt="Gallery Image 3" 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description Text of the picture</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img 
              src="https://i.imgur.com/c7TV7Jn.jpeg" 
              alt="Gallery Image 4" 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Description text of the picture</p>
            
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
          © {new Date().getFullYear()} Rafi Kitchen. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
