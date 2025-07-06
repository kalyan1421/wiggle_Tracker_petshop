import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './OffersSection.css';

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: '30% Sale Off',
      subtitle: 'All Pet Toys',
      background: 'linear-gradient(135deg, #7c4dff 0%, #9c27b0 100%)',
      textColor: 'white'
    },
    {
      id: 2,
      title: '₹79.99 Best Seller',
      subtitle: 'Dog Shirt Collection',
      background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
      textColor: 'white'
    },
    {
      id: 3,
      title: 'UP TO 20% OFF',
      subtitle: 'Premium Pet Food',
      background: 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)',
      textColor: 'white'
    },
    {
      id: 4,
      title: '15% Discount Off',
      subtitle: 'Gift for Pets',
      background: 'linear-gradient(135deg, #6c757d 0%, #495057 100%)',
      textColor: 'white'
    }
  ];

  return (
    <div className="offers-section">
      <Container>
        <Row className="g-4">
          {offers.map((offer, index) => (
            <Col lg={3} md={6} key={offer.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="h-100"
              >
                <Card 
                  className="offer-card h-100 border-0"
                  style={{ background: offer.background }}
                >
                  <Card.Body className="d-flex flex-column justify-content-center text-center">
                    <h4 className="offer-title" style={{ color: offer.textColor }}>
                      {offer.title}
                    </h4>
                    <p className="offer-subtitle" style={{ color: offer.textColor }}>
                      {offer.subtitle}
                    </p>
                    <Button variant="light" size="sm" className="mt-auto">
                      Shop Now
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OffersSection; 