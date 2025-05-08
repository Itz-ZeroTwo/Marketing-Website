import React from "react";
import SecureLoginImg from '../assets/secure_login.svg';

const reasons = [
  { icon: <i className="fas fa-shield-alt fa-lg" style={{ color: "#ff9900" }}></i>, title: "Trusted Platform", desc: "Thousands of users trust SoftSell for secure transactions." },
  { icon: <i className="fas fa-lock fa-lg" style={{ color: "#146eb4" }}></i>, title: "100% Secure", desc: "Your data and payments are encrypted and protected." },
  { icon: <i className="fas fa-bolt fa-lg" style={{ color: "#ff9900" }}></i>, title: "Fast Payouts", desc: "Get your money within 24 hours of license approval." },
  { icon: <i className="fas fa-headset fa-lg" style={{ color: "#146eb4" }}></i>, title: "24/7 Support", desc: "Our team is always available to help you." }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us animated" style={{ background: "#fff", padding: "3rem 0" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", maxWidth: 1100, margin: "0 auto", gap: "2rem", flexWrap: "wrap" }}>
        <img src={SecureLoginImg} alt="Secure Login" style={{ width: 300, flex: 1 }} />
        <div style={{ flex: 2 }}>
          <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: "1.5rem" }}>Why Choose Us?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div>{r.icon}</div>
                <div>
                  <strong>{r.title}</strong>
                  <p style={{ margin: 0, color: "#555" }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

