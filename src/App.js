import React from "react";
import Header from "./components/Header";
import SmartFactory from "./components/SmartFactory";
import Service from "./components/Service";
import Effect from "./components/Effect";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section id="header">
        <Header />
      </section>
      <section id="smart-factory">
        <SmartFactory />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="effect">
        <Effect />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default App;
