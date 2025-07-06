import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Feeding Your Adult Cat",
      subtitle: "",
      description: "Your cat will be in optimal condition if fed with the right products",
      buttonText: "Shop Now",
      badgeText: "GET 10% DISCOUNT",
      image: "/attached_assets/SCR-20250706-latm_1751784294424.jpeg"
    },
    {
      id: 2,
      title: "Premium Dog Treats",
      subtitle: "Training & Reward Collection",
      description: "Delicious and healthy treats for your best friend",
      buttonText: "Shop Now",
      badgeText: "GET 15% DISCOUNT",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Pet Health Essentials",
      subtitle: "Wellness & Care Products",
      description: "Everything you need for your pet's health",
      buttonText: "Shop Now",
      badgeText: "GET 20% DISCOUNT",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const PawPrintFloat = () => (
    <motion.div
      className="paw-print-float"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      🐾
    </motion.div>
  );

  return (
    <div className="hero-carousel-section">
      <Container fluid className="px-0">
        <Carousel fade className="hero-carousel">
          {slides.map((slide, index) => (
            <Carousel.Item key={slide.id} className="hero-slide">
              <div 
                className="hero-background"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="hero-overlay" />
              
              <Container className="hero-content-container">
                <Row className="align-items-center min-vh-100 py-5">
                  <Col lg={6} className="hero-text">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {/* Discount Badge */}
                      <motion.div
                        className="discount-badge"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 15,
                          delay: 0.5 
                        }}
                      >
                        {slide.badgeText}
                      </motion.div>
                      
                      {/* Title */}
                      <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        {slide.title}
                      </motion.h1>
                      
                      {/* Subtitle (hidden for this slide) */}
                      {slide.subtitle && (
                        <motion.h2
                          className="hero-subtitle"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          {slide.subtitle}
                        </motion.h2>
                      )}
                      
                      {/* Description */}
                      <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        {slide.description}
                      </motion.p>
                      
                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <Button 
                          className="hero-cta-btn"
                          size="lg"
                        >
                          {slide.buttonText}
                          <FaArrowRight className="ms-2" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </Col>
                  
                  <Col lg={6} className="hero-visual">
                    <motion.div
                      className="hero-image-container"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      {/* Floating paw prints */}
                      <PawPrintFloat />
                    </motion.div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default HeroCarousel; 