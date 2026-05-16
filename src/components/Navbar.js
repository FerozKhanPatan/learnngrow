import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBook, FaSignInAlt, FaUserPlus, FaChevronDown, FaInfoCircle, FaUser, FaSignOutAlt } from 'react-icons/fa';
import logoImage from '../assets/images/LearnNByteLogo.png';
import MobileNavigation from './MobileNavigation';
import { useAuth } from '../context/AuthContext';
import '../styles/global.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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

  const handleLogout = () => {
    logout();
    navigate('/');
    setUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
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
              {user ? (
                <div className="user-menu-container">
                  <button 
                    className="user-profile-btn"
                    onClick={toggleUserMenu}
                  >
                    <div className="user-avatar">
                      <FaUser />
                    </div>
                    <span className="user-name">{user.name}</span>
                    <FaChevronDown className={`user-chevron ${userMenuOpen ? 'open' : ''}`} />
                  </button>
                  
                  {userMenuOpen && (
                    <div className="user-dropdown">
                      <div className="user-dropdown-header">
                        <div className="user-dropdown-avatar">
                          <FaUser />
                        </div>
                        <div className="user-dropdown-info">
                          <p className="user-dropdown-name">{user.name}</p>
                          <p className="user-dropdown-email">{user.email}</p>
                        </div>
                      </div>
                      <div className="user-dropdown-divider"></div>
                      <Link 
                        to="/dashboard" 
                        className="user-dropdown-item"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <FaBook />
                        <span>My Learning</span>
                      </Link>
                      <Link 
                        to="/dashboard" 
                        className="user-dropdown-item"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <FaBook />
                        <span>My Enrolments</span>
                      </Link>
                      <Link 
                        to="/account-settings" 
                        className="user-dropdown-item"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <FaUser />
                        <span>Account Settings</span>
                      </Link>
                      <div className="user-dropdown-divider"></div>
                      <button 
                        className="user-dropdown-item user-dropdown-logout"
                        onClick={handleLogout}
                      >
                        <FaSignOutAlt />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation />

            </div>
        </div>
      </nav>
      
      <div className="navbar-spacer" />
    </>
  );
};

export default Navbar;