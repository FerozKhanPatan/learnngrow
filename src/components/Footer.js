import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../styles/global.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  
  
  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3 className="footer-title">Learn-N-Byte</h3>
              <p className="footer-description">
                Empowering students with comprehensive tech education and hands-on learning experiences.
              </p>
            </div>
            
            <div className="footer-social">
              <h4 className="footer-subtitle">Follow Us</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
      </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Learn-N-Byte. All rights reserved.
            </p>
            <p className="footer-note">
              Made with ❤️ for empowering students worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
