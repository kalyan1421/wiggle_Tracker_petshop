import React from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaApple, 
  FaGooglePlay 
} from 'react-icons/fa';

const FooterSocial = () => {
  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: '#', color: '#3b5998' },
    { name: 'Instagram', icon: FaInstagram, href: '#', color: '#e1306c' },
    { name: 'Twitter', icon: FaTwitter, href: '#', color: '#1da1f2' },
    { name: 'YouTube', icon: FaYoutube, href: '#', color: '#ff0000' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="footer-social"
    >
      <h5 className="footer-section-title">Connect With Us</h5>
      
      {/* Social Media Links */}
      <div className="social-links mb-4">
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="social-link"
            style={{ color: social.color }}
          >
            <social.icon size={24} />
          </motion.a>
        ))}
      </div>

      {/* App Download */}
      <div className="app-download">
        <h6 className="download-title">Download Our App</h6>
        <div className="download-buttons">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="download-btn"
          >
            <Button variant="dark" size="sm" className="me-2 mb-2">
              <FaApple className="me-1" />
              App Store
            </Button>
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="download-btn"
          >
            <Button variant="success" size="sm" className="mb-2">
              <FaGooglePlay className="me-1" />
              Google Play
            </Button>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default FooterSocial; 