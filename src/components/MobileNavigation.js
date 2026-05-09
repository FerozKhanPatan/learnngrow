import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaSignInAlt, FaUserPlus, FaInfoCircle, FaTimes, FaBars } from 'react-icons/fa';
import logoImage from '../assets/images/LearnNByteLogo.png';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      icon: FaHome,
      description: 'Back to dashboard'
    },
    { 
      name: 'Courses', 
      path: '/courses', 
      icon: FaBook,
      description: 'Explore courses'
    },
    { 
      name: 'Workshops', 
      path: '/workshops', 
      icon: FaBook,
      description: 'Guest Lectures, Seminars & Workshops'
    },
    { 
      name: 'Reading Room', 
      path: '/reading-room', 
      icon: FaBook,
      description: 'Articles & Resources'
    },
    { 
      name: 'About Us', 
      path: '/about', 
      icon: FaInfoCircle,
      description: 'About Learn N Byte'
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        className={`mobile-menu-btn ${isOpen ? 'hidden' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <FaBars />
      </button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div 
          className="mobile-nav-overlay"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          {/* Logo Section */}
          <Link to="/" className="mobile-logo-link" onClick={closeMenu}>
            <div className="mobile-logo-container">
              <div className="mobile-logo-icon">
                <img src={logoImage} alt="Learn N Byte Logo" className="mobile-logo-image" />
              </div>
              <div className="mobile-logo-text">
                <span className="mobile-logo-title">Learn-N-Byte</span>
              </div>
            </div>
          </Link>

          {/* Close Button */}
          <button 
            className="mobile-nav-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mobile-nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <div className="mobile-nav-content">
                  <Icon className="mobile-nav-icon" />
                  <span className="mobile-nav-text">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Auth Actions */}
        <div className="mobile-nav-actions">
          <Link
            to="/login"
            className="mobile-nav-login"
            onClick={closeMenu}
          >
            <FaSignInAlt className="mobile-nav-action-icon" />
            <span>Log In</span>
          </Link>
          
          <Link
            to="/register"
            className="mobile-nav-signup"
            onClick={closeMenu}
          >
            <FaUserPlus className="mobile-nav-action-icon" />
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
