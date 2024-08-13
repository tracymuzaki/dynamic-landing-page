import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-center py-3">
      <Container>
        <p>&copy; 2024 LearnIt. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
