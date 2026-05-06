import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaBook, FaSignInAlt, FaUserPlus, FaChevronDown, FaInfoCircle } from 'react-icons/fa';
import logoImage from '../assets/images/LearnNByteLogo.png';
import '../styles/global.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (itemName) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(itemName);
  };

  const handleDropdownLeave = () => {
    setDropdownTimeout(setTimeout(() => {
      setDropdownOpen(null);
    }, 150));
  };

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

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <Link 
              to="/" 
              className="logo-link"
            >
              <div className="logo-container">
                <div className="logo-icon">
                  <img src={logoImage} alt="Learn N Byte Logo" className="logo-image" />
                </div>
              </div>
              <div className="logo-text">
                <span className="logo-title">
                  Learn N Byte
                </span>
              </div>
            </Link>

            <div className="nav-menu">
              <div className="nav-items">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const hasDropdown = item.dropdown;
                  const isDropdownOpen = dropdownOpen === item.name;
                  
                  return (
                    <div key={item.name} className="relative flex items-center">
                      <Link
                        to={item.path}
                        onMouseEnter={() => hasDropdown && handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      >
                        <div className="nav-content">
                          <div className="nav-icon-container">
                            <Icon 
                              className="nav-icon" 
                            />
                          </div>
                          <span className="nav-text">
                            {item.name}
                          </span>
                          {hasDropdown && (
                            <FaChevronDown className={`nav-chevron ${isDropdownOpen ? 'open' : ''}`} />
                          )}
                        </div>
                      </Link>
                      
                      {/* Dropdown Menu */}
                      {hasDropdown && isDropdownOpen && (
                        <div 
                          onMouseEnter={() => handleDropdownEnter(item.name)}
                          onMouseLeave={handleDropdownLeave}
                          className="dropdown"
                        >
                          <div className="dropdown-content">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="dropdown-item"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="nav-actions">
              <Link
                to="/login"
                className="btn-signin"
              >
                <div className="btn-signin-overlay"></div>
                <FaSignInAlt className="text-sm" />
                <span>Sign In</span>
              </Link>
              
              <Link
                to="/register"
                className="btn-register"
              >
                <div className="btn-register-overlay"></div>
                <div className="btn-register-content">
                  <FaUserPlus className="text-sm" />
                  <span>Get Started</span>
                </div>
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
            >
              {isOpen ? (
                <FaTimes className={`mobile-menu-icon open`} />
              ) : (
                <FaBars className="mobile-menu-icon" />
              )}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {/* Header */}
            <div className="mobile-menu-header">
              <div className="mobile-menu-header-content">
                <div className="mobile-menu-welcome">
                  <div className="mobile-menu-indicator"></div>
                  <span className="mobile-menu-welcome-text">Welcome to Learn N Byte</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mobile-menu-close"
                >
                  <FaTimes className="mobile-menu-close-icon" />
                </button>
              </div>
            </div>
            
            {/* Navigation Items */}
            <div className="mobile-menu-nav">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <div className="mobile-nav-icon-container">
                      <Icon className="mobile-nav-icon" />
                      {location.pathname === item.path && (
                        <div className="mobile-nav-indicator"></div>
                      )}
                    </div>
                    <span className="mobile-nav-text">{item.name}</span>
                  </Link>
                );
              })}
            </div>
            
            {/* Action Buttons */}
            <div className="mobile-menu-actions">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="mobile-action-btn mobile-signin"
              >
                <FaSignInAlt className="text-sm" />
                <span className="font-semibold text-sm">Sign In</span>
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="mobile-action-btn mobile-register"
              >
                <FaUserPlus className="text-sm" />
                <span className="font-bold text-sm">Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="navbar-spacer" />
    </>
  );
};

export default Navbar;