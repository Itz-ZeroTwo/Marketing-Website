import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import ChatBot from "./components/ChatBot";
import "./styles/main.css";

function App() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatBot />
    </>
  );
}

export default App;
