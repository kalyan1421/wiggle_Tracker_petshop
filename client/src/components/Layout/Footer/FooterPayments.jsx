import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaCreditCard, 
  FaPaypal, 
  FaGooglePay, 
  FaApplePay 
} from 'react-icons/fa';

const FooterPayments = () => {
  const paymentMethods = [
    { name: 'Visa', icon: FaCreditCard, color: '#1a1f71' },
    { name: 'Mastercard', icon: FaCreditCard, color: '#eb001b' },
    { name: 'PayPal', icon: FaPaypal, color: '#003087' },
    { name: 'Google Pay', icon: FaGooglePay, color: '#4285f4' },
    { name: 'Apple Pay', icon: FaApplePay, color: '#000000' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="footer-payments"
    >
      <Row className="align-items-center">
        <Col md={6}>
          <h6 className="payment-title">Secure Payment Methods</h6>
        </Col>
        <Col md={6}>
          <div className="payment-methods">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="payment-method"
                style={{ color: method.color }}
              >
                <method.icon size={32} />
              </motion.div>
            ))}
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default FooterPayments; 