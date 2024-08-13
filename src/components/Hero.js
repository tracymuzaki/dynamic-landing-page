import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

const images = ["hero1.jpg", "hero2.jpg", "hero3.jpg"];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const transformStyle = {
    transform: `translateX(-${currentImageIndex * 100}%)`,
  };

  return (
    <header className="hero">
      <div className="hero-images" style={transformStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            className="hero-image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="hero-content">
        <h1 className="display-4 m-3">Welcome to LearnIt</h1>
        <p className="lead">Your gateway to a world of knowledge</p>
        <button className="btn btn-primary btn-lg mb-5">Get Started</button>
      </div>
    </header>
  );
};

export default Hero;