import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ProductCard from '../../UI/ProductCard';
import './ProductSection.css';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Dog Food',
      price: 899,
      originalPrice: 1299,
      discount: 30,
      rating: 4,
      reviewCount: 128,
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Cat Scratching Post',
      price: 1599,
      originalPrice: 2199,
      discount: 25,
      rating: 5,
      reviewCount: 89,
      image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Pet Carrier Bag',
      price: 2499,
      rating: 4,
      reviewCount: 67,
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      name: 'Dog Chew Toys',
      price: 599,
      originalPrice: 799,
      discount: 25,
      rating: 5,
      reviewCount: 201,
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const backgroundColors = [
    '#fff3e0', '#e8f5e8', '#f3e5f5', '#e1f5fe',
    '#fce4ec', '#f1f8e9', '#e3f2fd', '#fef7e0'
  ];

  return (
    <div className="product-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-header"
            >
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">
                Discover our most popular items chosen by pet parents worldwide
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-4">
          {products.map((product, index) => (
            <Col lg={3} md={6} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard 
                  product={product} 
                  backgroundColor={backgroundColors[index % backgroundColors.length]}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductSection; 