import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import UserActions from './UserActions';
import MobileMenu from './MobileMenu';
import './Header.css';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar-wiggle"
    >
      <Container fluid>
        <Navbar expand="lg" className="px-0">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/">
              <Navbar.Brand className="logo me-5">
                wiggle
                <motion.span
                  className="ms-1"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🐾
                </motion.span>
              </Navbar.Brand>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Search Bar */}
          <SearchBar />

          {/* User Actions & Mobile Menu */}
          <UserActions 
            showMobileMenu={showMobileMenu}
            toggleMobileMenu={toggleMobileMenu}
          />
        </Navbar>

        {/* Mobile Menu */}
        <MobileMenu 
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      </Container>
    </motion.header>
  );
};

export default Header; 