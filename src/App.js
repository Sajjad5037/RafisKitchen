// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav style={{ backgroundColor: "#1f2937", padding: "1rem", color: "white", display: "flex", gap: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/reservation">Reservation</Link>
          <Link to="/contact">Contact</Link>
        </nav>

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
