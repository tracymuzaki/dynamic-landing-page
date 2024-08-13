import React from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
