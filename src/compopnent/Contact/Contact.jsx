import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Display confirmation message
    setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
  };

  return (
    <div className="home-box">
      <div className="home-inner-box container">
        {/* Contact Header */}
        <h1 className="portfolio-title">Contact Me</h1>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <p style={{ fontSize: "1.2rem", color: "burlywood" }}>
            <strong>Denzil Dsouza</strong>
          </p>
          <p style={{ fontSize: "1rem", color: "burlywood" }}>
            <strong>Phone:</strong> +353 899 88 0213
          </p>
          <p style={{ fontSize: "1rem", color: "burlywood" }}>
            <strong>Email:</strong> denzdsouza14@gmail.com
          </p>
          <p style={{ fontSize: "1rem", color: "burlywood" }}>
            <strong>Address:</strong> Cappavilla Village, UL
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <div className="form-group">
            <label htmlFor="name" style={{ color: "burlywood" }}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ color: "burlywood" }}>
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" style={{ color: "burlywood" }}>
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{ color: "burlywood" }}>
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* Confirmation Message */}
        {submitted && (
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Thank you for your message! I will get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
