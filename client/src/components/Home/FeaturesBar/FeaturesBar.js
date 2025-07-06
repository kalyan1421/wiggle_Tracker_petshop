import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaShippingFast, 
  FaGift, 
  FaShieldAlt, 
  FaUserMd, 
  FaHeadset 
} from 'react-icons/fa';
import './FeaturesBar.css';

const FeaturesBar = () => {
  const features = [
    {
      icon: FaHeart,
      title: "Pet Parenting",
      description: "Expert advice"
    },
    {
      icon: FaShippingFast,
      title: "Free Delivery",
      description: "On orders over ₹999"
    },
    {
      icon: FaGift,
      title: "Rewards",
      description: "Loyalty program"
    },
    {
      icon: FaShieldAlt,
      title: "Quality",
      description: "Guaranteed products"
    },
    {
      icon: FaUserMd,
      title: "Expert Advice",
      description: "Veterinary support"
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Always here to help"
    }
  ];

  return (
    <div className="features-bar">
      <Container>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col lg={2} md={4} sm={6} key={index}>
              <motion.div
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h6 className="feature-title">{feature.title}</h6>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesBar; 