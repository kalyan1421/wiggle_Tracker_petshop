import React, { useState } from 'react';
import { Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'wouter';

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Shop', href: '/products' },
    { name: 'Clinic', href: '/clinic' },
    { name: 'Pharmacy', href: '/pharmacy' },
    { name: 'Community', href: '/community' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Mobile search query:', searchQuery);
  };

  if (!showMobileMenu) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="d-lg-none border-top mt-3 pt-3"
    >
      {/* Mobile Search */}
      <Form onSubmit={handleSearch} className="mb-3">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <Button type="submit" className="search-btn">
            <FaSearch size={16} />
          </Button>
        </InputGroup>
      </Form>

      {/* Mobile Navigation */}
      <Nav className="flex-column">
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={item.href}>
              <Nav.Link 
                className="text-dark py-2 fw-medium"
                onClick={() => setShowMobileMenu(false)}
              >
                {item.name}
              </Nav.Link>
            </Link>
          </motion.div>
        ))}
      </Nav>
    </motion.div>
  );
};

export default MobileMenu; 