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
        {/* Navbar */}
        <nav style={{ backgroundColor: "white", padding: "1rem", color: "purple", display: "flex", gap: "1rem" }}>
          <Link to="/" style={{ color: "purple" }}>Home</Link>
          <Link to="/menu" style={{ color: "purple" }}>Menu</Link>
          <Link to="/about" style={{ color: "purple" }}>About</Link>
          <Link to="/reservation" style={{ color: "purple" }}>Reservation</Link>
          <Link to="/contact" style={{ color: "purple" }}>Contact</Link>
        </nav>

        {/* Image Carousel */}
        <ImageCarousel />  {/* Place the ImageCarousel component here */}

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
