import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './CategorySection.css';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Toys',
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 150
    },
    {
      id: 2,
      name: 'Beds',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 85
    },
    {
      id: 3,
      name: 'Bowls',
      image: 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 120
    },
    {
      id: 4,
      name: 'Treats',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 200
    },
    {
      id: 5,
      name: 'Crates',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 65
    },
    {
      id: 6,
      name: 'Flea & Tick',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 95
    },
    {
      id: 7,
      name: 'Clothing',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 75
    },
    {
      id: 8,
      name: 'Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      count: 300
    }
  ];

  const PawDecoration = () => (
    <motion.div
      className="paw-decoration"
      animate={{
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1, 1.1, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      🐾
    </motion.div>
  );

  return (
    <div className="category-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-header"
            >
              <h2 className="section-title">
                Browse By Categories
                <PawDecoration />
              </h2>
              <p className="section-subtitle">
                Find everything your furry friend needs in our carefully curated categories
              </p>
            </motion.div>
          </Col>
        </Row>

        <div className="categories-carousel">
          <div className="categories-scroll">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="category-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="category-image">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    loading="lazy"
                  />
                </div>
                <div className="category-info">
                  <h6 className="category-name">{category.name}</h6>
                  <p className="category-count">{category.count} items</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategorySection; 