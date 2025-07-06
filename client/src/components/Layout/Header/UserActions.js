import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'wouter';

const UserActions = ({ showMobileMenu, toggleMobileMenu }) => {
  const cartCount = 3;
  const wishlistCount = 2;

  return (
    <div className="d-flex align-items-center">
      {/* User Account */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="me-3"
      >
        <Link href="/profile">
          <Button variant="link" className="text-dark p-2">
            <FaUser size={20} />
          </Button>
        </Link>
      </motion.div>

      {/* Wishlist */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="me-3 position-relative"
      >
        <Link href="/wishlist">
          <Button variant="link" className="text-dark p-2">
            <FaHeart size={20} />
            {wishlistCount > 0 && (
              <Badge 
                pill 
                className="icon-badge"
                style={{ 
                  position: 'absolute',
                  top: '0px',
                  right: '0px',
                  backgroundColor: 'var(--accent-orange)',
                  fontSize: '0.6rem',
                  minWidth: '18px',
                  height: '18px'
                }}
              >
                {wishlistCount}
              </Badge>
            )}
          </Button>
        </Link>
      </motion.div>

      {/* Shopping Cart */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="me-3 position-relative"
      >
        <Link href="/cart">
          <Button variant="link" className="text-dark p-2 d-flex align-items-center">
            <FaShoppingCart size={20} />
            <span className="ms-2 d-none d-md-inline fw-medium">
              ₹0.00
            </span>
            {cartCount > 0 && (
              <Badge 
                pill 
                className="icon-badge"
                style={{ 
                  position: 'absolute',
                  top: '0px',
                  right: cartCount > 9 ? '-5px' : '0px',
                  backgroundColor: 'var(--accent-orange)',
                  fontSize: '0.6rem',
                  minWidth: '18px',
                  height: '18px'
                }}
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </Link>
      </motion.div>

      {/* Mobile Menu Toggle */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="d-lg-none"
      >
        <Button 
          variant="link" 
          className="text-dark p-2"
          onClick={toggleMobileMenu}
        >
          {showMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
        </Button>
      </motion.div>
    </div>
  );
};

export default UserActions; 