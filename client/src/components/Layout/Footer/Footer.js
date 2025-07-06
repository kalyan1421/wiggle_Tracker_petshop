import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import FooterNewsletter from './FooterNewsletter';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import FooterPayments from './FooterPayments';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wiggle">
      <Container>
        {/* Newsletter Section */}
        <FooterNewsletter />
        
        {/* Main Footer Content */}
        <Row className="footer-content">
          <Col lg={3} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="footer-brand"
            >
              <h3 className="footer-logo">
                wiggle
                <span className="ms-2">🐾</span>
              </h3>
              <p className="footer-description">
                Your trusted pet care partner. We provide quality products and services 
                to keep your furry friends happy and healthy.
              </p>
            </motion.div>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <FooterLinks />
          </Col>
          
          <Col lg={3} md={12} className="mb-4">
            <FooterSocial />
          </Col>
        </Row>
        
        {/* Payment Methods */}
        <FooterPayments />
        
        {/* Copyright */}
        <Row className="footer-bottom">
          <Col className="text-center">
            <p className="copyright">
              &copy; 2024 Wiggle. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 