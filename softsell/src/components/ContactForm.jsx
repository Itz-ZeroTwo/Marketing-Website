import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.license) {
      setError("Please fill all required fields.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", company: "", license: "", message: "" });
  };

  return (
    <section className="contact-form" id="contact">
  <h2>Contact Us</h2>
  <form>
    <div>
      <i className="fas fa-user icon"></i>
      <input name="name" placeholder="Name" required />
    </div>
    <div>
      <i className="fas fa-envelope icon"></i>
      <input name="email" type="email" placeholder="Email" required />
    </div>
    <div>
      <i className="fas fa-building icon"></i>
      <input name="company" placeholder="Company" />
    </div>
    <div>
      <i className="fas fa-cogs icon"></i>
      <select name="license" required>
        <option value="">Select License Type</option>
        <option value="MS Office">MS Office</option>
        <option value="Adobe Suite">Adobe Suite</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div>
      <i className="fas fa-comment icon"></i>
      <textarea name="message" placeholder="Message"></textarea>
    </div>
    <button type="submit">
      <i className="fas fa-paper-plane"></i> Submit
    </button>
  </form>
</section>

  );
}
