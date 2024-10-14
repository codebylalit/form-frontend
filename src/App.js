import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Your Name"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="you@example.com"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
            placeholder="Your message"
          />
        </div>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
      {successMessage && <p style={styles.success}>{successMessage}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    fontFamily: "'Inter', sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    color: "#333",
    marginBottom: "30px",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    color: "#666",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #e0e0e0",
    backgroundColor: "#f9f9f9",
    outline: "none",
    transition: "border 0.2s ease",
  },
  inputFocus: {
    border: "1px solid #6c63ff",
  },
  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #e0e0e0",
    backgroundColor: "#f9f9f9",
    outline: "none",
    resize: "none",
    transition: "border 0.2s ease",
  },
  button: {
    padding: "12px 16px",
    fontSize: "16px",
    backgroundColor: "#6c63ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "10px",
  },
  buttonHover: {
    backgroundColor: "#5548cc",
  },
  success: {
    color: "#28a745",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "500",
  },
};

export default App;
