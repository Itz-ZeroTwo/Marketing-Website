import React, { useState } from "react";
import ChatbotImg from "../assets/chatbot.svg";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! 👋 How can I help you with selling your software license today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    setMessages([
      ...messages,
      { from: "user", text: input },
      {
        from: "bot",
        text: "I'm here to help! For detailed queries, our team will reach out soon.",
      },
    ]);
    setInput("");
  };

  return (
    <div
      className="chatbot-widget"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
      }}
    >
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          style={{
            background: "#146eb4",
            color: "#fff",
            borderRadius: "50%",
            width: 60,
            height: 60,
            border: "none",
            boxShadow: "0 2px 10px rgba(20,110,180,0.12)",
            fontSize: "2rem",
          }}
        >
          <i className="fas fa-comments"></i>
        </button>
      )}
      {open && (
        <div
          style={{
            width: 340,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 16px rgba(20,110,180,0.15)",
            padding: 16,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: 700, color: "#146eb4" }}>
              <i className="fas fa-comments"></i> SoftSell Chat
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>
          <img
            src={ChatbotImg}
            alt="Chatbot"
            style={{ width: 60, margin: "1rem auto" }}
          />
          <div
            style={{
              flex: 1,
              minHeight: 120,
              maxHeight: 200,
              overflowY: "auto",
              margin: "1rem 0",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.from === "bot" ? "left" : "right",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    background: m.from === "bot" ? "#f2f2f2" : "#146eb4",
                    color: m.from === "bot" ? "#232f3e" : "#fff",
                    padding: "8px 14px",
                    borderRadius: 18,
                    display: "inline-block",
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              style={{
                width: "75%",
                padding: 8,
                borderRadius: 12,
                border: "1px solid #ddd",
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              style={{
                background: "#ff9900",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "8px 14px",
                marginLeft: 8,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
