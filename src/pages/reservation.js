import { useState } from "react";

function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = { name, email, date, time, partySize };

    try {
      // Send reservation data to backend via fetch
      const res = await fetch(
        'https://usefulapis-production.up.railway.app/api/reservationRafisKitchen',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: JSON.stringify(payload) }),
        }
      );
      if (!res.ok) throw new Error(`Status ${res.status}`);

      alert("You will hear from the restaurant management soon...");

      // Clear fields on success
      setName("");
      setEmail("");
      setDate("");
      setTime("");
      setPartySize(1);
    } catch (err) {
      console.error("Reservation error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>
        Make a Reservation <span style={{ color: "#e74c3c" }}>(Live)</span>
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>Book your table online and skip the wait ⏰</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
        {/* Name */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name" style={{ fontWeight: "bold", color: "#333" }}>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px", fontSize: "1rem", borderRadius: "5px", border: "1px solid #ddd", backgroundColor: "#f9f9f9" }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email" style={{ fontWeight: "bold", color: "#333" }}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px", fontSize: "1rem", borderRadius: "5px", border: "1px solid #ddd", backgroundColor: "#f9f9f9" }}
          />
        </div>

        {/* Date */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="date" style={{ fontWeight: "bold", color: "#333" }}>Reservation Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px", fontSize: "1rem", borderRadius: "5px", border: "1px solid #ddd", backgroundColor: "#f9f9f9" }}
          />
        </div>

        {/* Party Size */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="partySize" style={{ fontWeight: "bold", color: "#333" }}>Number of People</label>
          <select
            id="partySize"
            value={partySize}
            onChange={(e) => setPartySize(parseInt(e.target.value))}
            style={{ width: "100%", padding: "10px", marginTop: "5px", fontSize: "1rem", borderRadius: "5px", border: "1px solid #ddd", backgroundColor: "#f9f9f9" }}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>

        {/* Time Input */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="time" style={{ fontWeight: "bold", color: "#333" }}>Time of Reservation</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="e.g., 7:00 PM"
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px", fontSize: "1rem", borderRadius: "5px", border: "1px solid #ddd", backgroundColor: "#f9f9f9" }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: "12px", backgroundColor: loading ? "#aaa" : "#e74c3c", color: "white", fontSize: "1.2rem", fontWeight: "bold", border: "none", borderRadius: "5px", cursor: loading ? "not-allowed" : "pointer", transition: "background-color 0.3s ease" }}
          onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = "#c0392b")}
          onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = "#e74c3c")}
        >
          {loading ? "Reserving..." : "Reserve Table"}
        </button>
      </form>
    </div>
  );
}

export default Reservation;
