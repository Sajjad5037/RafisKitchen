import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd handle the actual form submission, like sending to an API or email service
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>

      <div style={styles.content}>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2>Send us a message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Send</button>
        </form>

        {/* Restaurant Info */}
        <div style={styles.details}>
          <h2>Our Location</h2>
          <p><strong>Rafis Kitcehn</strong></p>
          <p>Wayne street</p>
          <p>Olean NY 14760</p>
          <p><strong>Phone:</strong> (716) 790-8100</p>
          <p><strong>Email:</strong> contact@rafis-kitchen.com</p>

          {/* Optional Google Map */}
          <iframe
            title="Google Map"
            src="https://maps.app.goo.gl/w2MWHgVRiVYqfGxp7"
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#ffffff",
    color: "#333"
  },
  header: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "40px"
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    maxWidth: "960px",
    margin: "0 auto"
  },
  form: {
    flex: 1,
    minWidth: "300px",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem"
  },
  textarea: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    resize: "vertical"
  },
  button: {
    padding: "12px",
    backgroundColor: "#b22222",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem"
  },
  details: {
    flex: 1,
    minWidth: "300px"
  }
};

export default Contact;
