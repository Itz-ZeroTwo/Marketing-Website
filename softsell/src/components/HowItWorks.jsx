import React from "react";
import UploadingImg from '../assets/uploading.svg';
import PaymentConfirmationImg from '../assets/payment_confirmation.svg';

const steps = [
  {
    icon: <i className="fas fa-upload fa-2x" style={{ color: "#146eb4" }}></i>,
    title: "Upload License",
    desc: "Submit your software license details securely.",
    illustration: UploadingImg
  },
  {
    icon: <i className="fas fa-chart-line fa-2x" style={{ color: "#ff9900" }}></i>,
    title: "Get Valuation",
    desc: "Receive instant, fair market value for your license.",
    illustration: PaymentConfirmationImg
  },
  {
    icon: <i className="fas fa-money-bill-wave fa-2x" style={{ color: "#146eb4" }}></i>,
    title: "Get Paid",
    desc: "Get paid quickly and securely via your preferred method.",
    illustration: PaymentConfirmationImg
  }
];

export default function HowItWorks() {
  return (
    <section className="how-it-works animated" style={{ background: "#f2f2f2", padding: "3rem 0" }}>
      <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontWeight: 700, fontSize: "2.2rem", marginBottom: "2.5rem" }}>
          How It Works
        </h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {steps.map((step, i) => (
            <div key={i} className="step-card" style={{
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 2px 10px rgba(20,110,180,0.07)",
              padding: "2rem",
              flex: "1 1 300px",
              textAlign: "center",
              transition: "transform 0.25s",
              animation: `fadeInUp 0.7s ${0.2 + i * 0.2}s both`
            }}>
              <div>{step.icon}</div>
              <h3 style={{ margin: "1rem 0 0.5rem" }}>{step.title}</h3>
              <p style={{ color: "#555", minHeight: 48 }}>{step.desc}</p>
              <img src={step.illustration} alt={step.title} style={{ width: 120, marginTop: 16 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
