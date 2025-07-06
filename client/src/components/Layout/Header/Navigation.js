import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

const Navigation = () => {
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Shop', href: '/products' },
    { name: 'Clinic', href: '/clinic' },
    { name: 'Pharmacy', href: '/pharmacy' },
    { name: 'Community', href: '/community' }
  ];

  return (
    <Navbar.Collapse className="justify-content-center">
      <Nav className="me-auto">
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={item.href}>
              <Nav.Link 
                className="fw-medium text-dark mx-3 position-relative"
                style={{ fontSize: '1rem' }}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
              </Nav.Link>
            </Link>
          </motion.div>
        ))}
      </Nav>
    </Navbar.Collapse>
  );
};

export default Navigation; 