import { useState, useEffect } from "react";
import axios from "axios"; // install this if you haven't: npm install axios

function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState(1);
  const [availableTables, setAvailableTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  // Fetch tables whenever date or partySize changes
  useEffect(() => {
    if (date && partySize) {
      axios
        .get(`/api/available-tables?date=${date}&partySize=${partySize}`)
        .then((res) => setAvailableTables(res.data))
        .catch((err) => console.error(err));
    }
  }, [date, partySize]);

  // Fetch time slots when a table is selected
  useEffect(() => {
    if (selectedTable && date) {
      axios
        .get(`/api/available-times?tableId=${selectedTable}&date=${date}`)
        .then((res) => setAvailableTimeSlots(res.data))
        .catch((err) => console.error(err));
    }
  }, [selectedTable, date]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      date,
      time,
      partySize,
      tableId: selectedTable,
    });

    // Clear fields
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setPartySize(1);
    setSelectedTable("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Make a Reservation <span style={{ color: "red" }}>(Live)</span>
      </h1>
      <p>Book your table online and skip the wait ⏰</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        {/* Name */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name" style={{ fontWeight: "bold" }}>Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email" style={{ fontWeight: "bold" }}>Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        {/* Date */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="date" style={{ fontWeight: "bold" }}>Reservation Date</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        {/* Party Size */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="partySize" style={{ fontWeight: "bold" }}>Number of People</label>
          <select id="partySize" value={partySize} onChange={(e) => setPartySize(parseInt(e.target.value))}>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>

        {/* Available Tables */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="table" style={{ fontWeight: "bold" }}>Select Table</label>
          <select
            id="table"
            value={selectedTable}
            onChange={(e) => setSelectedTable(e.target.value)}
            required
          >
            <option value="">-- Select a Table --</option>
            {availableTables.map((table) => (
              <option key={table.id} value={table.id}>
                Table {table.table_number} (Seats: {table.capacity})
              </option>
            ))}
          </select>
        </div>

        {/* Time Slot */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="time" style={{ fontWeight: "bold" }}>Time Slot</label>
          <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="">-- Select a Time Slot --</option>
            {availableTimeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button type="submit">Reserve Table</button>
      </form>
    </div>
  );
}

export default Reservation;
