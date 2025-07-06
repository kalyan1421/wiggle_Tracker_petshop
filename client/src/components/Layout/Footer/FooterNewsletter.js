import React, { useState } from 'react';
import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGift } from 'react-icons/fa';

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // Add newsletter signup logic here
    setEmail('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="newsletter-section"
    >
      <Row className="align-items-center">
        <Col lg={6} md={6}>
          <div className="newsletter-content">
            <h3 className="newsletter-title">
              <FaGift className="me-2" />
              Get 10% Off Your First Order!
            </h3>
            <p className="newsletter-subtitle">
              Subscribe to our newsletter for exclusive deals and pet care tips.
            </p>
          </div>
        </Col>
        <Col lg={6} md={6}>
          <Form onSubmit={handleSubmit} className="newsletter-form">
            <InputGroup>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <Button type="submit" className="newsletter-btn">
                <FaEnvelope className="me-2" />
                Subscribe
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </motion.div>
  );
};

export default FooterNewsletter; 