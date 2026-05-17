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
              <div className="user-menu-container">
                <button 
                  className="user-profile-btn"
                  onClick={toggleUserMenu}
                >
                  <div className="user-avatar">
                    <FaUser />
                  </div>
                  <span className="user-name">{user ? user.name : 'Guest'}</span>
                  <FaChevronDown className={`user-chevron ${userMenuOpen ? 'open' : ''}`} />
                </button>
                
                {userMenuOpen && (
                  <div className="user-dropdown">
                    {user ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <div className="user-dropdown-header">
                          <div className="user-dropdown-avatar">
                            <FaUser />
                          </div>
                          <div className="user-dropdown-info">
                            <p className="user-dropdown-name">Guest</p>
                            <p className="user-dropdown-email">Sign in to access your account</p>
                          </div>
                        </div>
                        <div className="user-dropdown-divider"></div>
                        <Link 
                          to="/login" 
                          className="user-dropdown-item"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <FaSignInAlt />
                          <span>Sign In</span>
                        </Link>
                        <Link 
                          to="/register" 
                          className="user-dropdown-item"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <FaUserPlus />
                          <span>Get Started</span>
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
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