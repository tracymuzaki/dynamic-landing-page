import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/Features.css";

const features = [
  {
    img: "hero1.jpg",
    title: "Interactive Courses",
    text: "Engage with interactive lessons and quizzes.",
  },
  {
    img: "hero2.jpeg",
    title: "Expert Tutors",
    text: "Learn from industry experts.",
  },
  {
    img: "hero1.jpeg",
    title: "24/7 Support",
    text: "Get help whenever you need it.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-5">
      <Container>
        <Row>
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <Card className="feature-box mb-4">
                <Card.Img variant="top" src={feature.img} />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
