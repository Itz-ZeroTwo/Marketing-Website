import React from "react";
import TransactionImg from "../assets/transaction.svg";

export default function Hero() {
  return (
    <section
      className="hero animated"
      style={{
        background: "var(--dark)",
        color: "var(--accent)",
        padding: "4rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Sell Unused Software Licenses{" "}
            <span style={{ color: "var(--primary)" }}>Fast</span> & Securely
          </h1>
          <p style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
            Turn your unused software into cash. Get instant valuation and
            secure payments with SoftSell.
          </p>
          <a
            href="#contact"
            className="cta-btn"
            style={{
              background: "var(--primary)",
              color: "#fff",
              padding: "1rem 2rem",
              borderRadius: "30px",
              fontWeight: 600,
              fontSize: "1.1rem",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(20,110,180,0.13)",
              transition: "background 0.2s",
            }}
          >
            <i
              className="fas fa-money-bill-wave"
              style={{ marginRight: 8 }}
            ></i>
            Get a Quote
          </a>
        </div>
        <img
          src={TransactionImg}
          alt="Online Transactions"
          style={{
            width: 340,
            maxWidth: "100%",
            flex: 1,
            borderRadius: "18px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
          }}
        />
      </div>
    </section>
  );
}
