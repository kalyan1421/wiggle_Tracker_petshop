import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

const FooterLinks = () => {
  const linkSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Dog Food', href: '/products/dog-food' },
        { name: 'Cat Food', href: '/products/cat-food' },
        { name: 'Toys', href: '/products/toys' },
        { name: 'Accessories', href: '/products/accessories' },
        { name: 'Health Care', href: '/products/health' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Veterinary', href: '/services/vet' },
        { name: 'Grooming', href: '/services/grooming' },
        { name: 'Pet Sitting', href: '/services/sitting' },
        { name: 'Training', href: '/services/training' },
        { name: 'Pet Insurance', href: '/services/insurance' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Customer Service', href: '/support' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'FAQ', href: '/faq' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' }
      ]
    }
  ];

  return (
    <Row>
      {linkSections.map((section, index) => (
        <Col lg={3} md={6} key={section.title} className="mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h5 className="footer-section-title">{section.title}</h5>
            <ul className="footer-links">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="footer-link"
                    >
                      {link.name}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default FooterLinks; 