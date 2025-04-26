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
      <div className="App">
        {/* Navbar */}
        <nav style={{ backgroundColor: "#1f2937", padding: "1rem", color: "white", display: "flex", gap: "1rem" }}>
          <Link to="/" style={{ color: "white" }}>Home</Link>
          <Link to="/menu" style={{ color: "white" }}>Menu</Link>
          <Link to="/about" style={{ color: "white" }}>About</Link>
          <Link to="/reservation" style={{ color: "white" }}>Reservation</Link>
          <Link to="/contact" style={{ color: "white" }}>Contact</Link>
        </nav>

        {/* Image Carousel */}
        <ImageCarousel />  {/* Place the ImageCarousel component here */}

        {/* Page Content */}
        <div style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
