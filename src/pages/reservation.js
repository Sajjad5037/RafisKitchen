import { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="reservation-container">
      <h1 className="reservation-title">
        Make a Reservation <span className="live-tag">(Live)</span>
      </h1>
      <p className="reservation-subtitle">Book your table online and skip the wait ⏰</p>

      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date" className="form-label">Reservation Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="partySize" className="form-label">Number of People</label>
          <select
            id="partySize"
            value={partySize}
            onChange={(e) => setPartySize(parseInt(e.target.value))}
            className="form-input"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="table" className="form-label">Select Table</label>
          <select
            id="table"
            value={selectedTable}
            onChange={(e) => setSelectedTable(e.target.value)}
            className="form-input"
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

        <div className="form-group">
          <label htmlFor="time" className="form-label">Time Slot</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-input"
            required
          >
            <option value="">-- Select a Time Slot --</option>
            {availableTimeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-button">Reserve Table</button>
      </form>
    </div>
  );
}

export default Reservation;
