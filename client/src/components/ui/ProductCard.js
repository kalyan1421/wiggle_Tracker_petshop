import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHeart, FaShoppingCart, FaStar, FaEye } from 'react-icons/fa';

const ProductCard = ({ product, backgroundColor = '#f8f9fa' }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'text-warning' : 'text-muted'}
        size={12}
      />
    ));
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-100"
    >
      <Card 
        className="product-card h-100 shadow-sm border-0 overflow-hidden"
        style={{ backgroundColor }}
      >
        <div className="product-image-container position-relative overflow-hidden">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          
          {/* Wishlist Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`wishlist-btn position-absolute ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlist}
          >
            <FaHeart />
          </motion.button>

          {/* Quick View Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="quick-view-btn position-absolute"
          >
            <FaEye />
          </motion.button>

          {/* Sale Badge */}
          {product.discount && (
            <Badge className="sale-badge position-absolute">
              -{product.discount}%
            </Badge>
          )}
        </div>

        <Card.Body className="d-flex flex-column">
          <div className="product-info flex-grow-1">
            <h6 className="product-name mb-2">{product.name}</h6>
            
            <div className="product-rating mb-2">
              {renderStars(product.rating)}
              <span className="rating-count ms-2 text-muted">
                ({product.reviewCount})
              </span>
            </div>
            
            <div className="product-price mb-3">
              <span className="current-price">₹{product.price}</span>
              {product.originalPrice && (
                <span className="original-price ms-2 text-muted">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="product-actions d-flex gap-2">
            <Button
              variant="outline-primary"
              size="sm"
              className="flex-grow-1 add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner-border spinner-border-sm me-2" />
              ) : (
                <FaShoppingCart className="me-2" />
              )}
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProductCard; 