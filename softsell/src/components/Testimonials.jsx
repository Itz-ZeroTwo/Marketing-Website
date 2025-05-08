import React from "react";
import FeedbackImg from "../assets/feedback.svg";

const testimonials = [
  {
    name: "Amit S.",
    role: "IT Manager",
    company: "TechNova",
    text: "SoftSell made it incredibly easy to sell our unused licenses. Fast payment and great support!",
  },
  {
    name: "Priya K.",
    role: "Freelancer",
    company: "Self-Employed",
    text: "I was able to get a fair price for my old software. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonial animated">
      <div
        className="container"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <img src={FeedbackImg} alt="Feedback" style={{ width: 260, flex: 1 }} />
        <div style={{ flex: 2 }}>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: "1.2rem",
            }}
          >
            What Our Users Say
          </h2>
          <div>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card"
                style={{
                  borderRadius: 16,
                  boxShadow: "0 2px 10px rgba(20,110,180,0.06)",
                  padding: "1.2rem 2rem",
                  marginBottom: "1rem",
                  animation: `fadeInUp 0.7s ${0.2 + i * 0.2}s both`,
                }}
              >
                <p style={{ fontStyle: "italic", marginBottom: 6 }}>
                  “{t.text}”
                </p>
                <span style={{ fontWeight: 600 }}>{t.name}</span>,{" "}
                <span style={{ color: "#146eb4" }}>{t.role}</span> @{" "}
                <span style={{ color: "#ff9900" }}>{t.company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
