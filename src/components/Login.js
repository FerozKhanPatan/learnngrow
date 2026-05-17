import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGraduationCap, FaCheck, FaTimes, FaGoogle, FaGithub, FaFacebook, FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import '../styles/global.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setLoading(true);
    
    try {
      // Use AuthContext login function to update state
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        setLoading(false);
        setLoginSuccess(true);
        
        // Navigate after success animation
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        setLoading(false);
        setErrors({ 
          submit: result.error || 'Login failed. Please check your credentials.' 
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false);
      setErrors({ 
        submit: error.message || 'Login failed. Please check your credentials.' 
      });
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
    setLoading(true);
    setTimeout(() => {
      const userData = {
        id: 1,
        name: 'John Doe',
        email: `user@${provider.toLowerCase()}.com`,
        token: `${provider.toLowerCase()}-mock-jwt-token`
      };
      localStorage.setItem('user', JSON.stringify(userData));
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="auth-container">
      {/* Background Elements */}
      <div className="auth-background">
        <div className="auth-bubble auth-bubble-1"></div>
        <div className="auth-bubble auth-bubble-2"></div>
        <div className="auth-bubble auth-bubble-3"></div>
      </div>
      
      <div className={`auth-wrapper ${isVisible ? 'slide-in-up' : ''}`}>
        {/* Logo Section */}
        <div className="auth-header">
          <div className="auth-logo">
            <FaGraduationCap />
          </div>
          <h1 className="auth-title">
            Welcome back
          </h1>
          <p className="auth-subtitle">
            Sign in to your account to continue learning
          </p>
        </div>

        {/* Login Form */}
        <div className="auth-card">
          <form className="auth-form" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="auth-form-group">
              <label htmlFor="email" className="auth-form-label">
                Email address
              </label>
              <div className="auth-input-wrapper">
                <div className="auth-input-icon">
                  <FaEnvelope />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`auth-input ${errors.email ? 'auth-input-error' : ''}`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formData.email && !errors.email && (
                  <div className="auth-input-success">
                    <FaCheck />
                  </div>
                )}
              </div>
              {errors.email && (
                <div className="auth-error-wrapper">
                  <FaTimes className="auth-error-icon" />
                  <p className="auth-error">{errors.email}</p>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="auth-form-group">
              <label htmlFor="password" className="auth-form-label">
                Password
              </label>
              <div className="auth-input-wrapper">
                <div className="auth-input-icon">
                  <FaLock />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className={`auth-input ${errors.password ? 'auth-input-error' : ''}`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="auth-input-toggle"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {formData.password && !errors.password && (
                  <div className="auth-input-success">
                    <FaCheck />
                  </div>
                )}
              </div>
              {errors.password && (
                <div className="auth-error-wrapper">
                  <FaTimes className="auth-error-icon" />
                  <p className="auth-error">{errors.password}</p>
                </div>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="auth-options">
              <div className="auth-checkbox">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="auth-checkbox-input"
                />
                <label htmlFor="remember-me" className="auth-checkbox-label">
                  Remember me
                </label>
              </div>

              <div className="auth-forgot">
                <button
                  type="button"
                  className="auth-forgot-link"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="auth-submit-wrapper">
              <button
                type="submit"
                disabled={loading || loginSuccess}
                className={`auth-submit ${loginSuccess ? 'auth-submit-success' : ''}`}
              >
                {loginSuccess ? (
                  <div className="auth-success-content">
                    <FaCheck />
                    <span>Login Successful!</span>
                  </div>
                ) : loading ? (
                  <div className="auth-loading-content">
                    <div className="auth-spinner"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="auth-divider">
            <div className="auth-divider-line"></div>
            <div className="auth-divider-text">Or continue with</div>
            <div className="auth-divider-line"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="auth-social">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="auth-social-button auth-social-google"
              disabled={loading}
            >
              <FaGoogle />
              <span>Google</span>
            </button>
            <button
              onClick={() => handleSocialLogin('GitHub')}
              className="auth-social-button auth-social-github"
              disabled={loading}
            >
              <FaGithub />
              <span>GitHub</span>
            </button>
            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="auth-social-button auth-social-facebook"
              disabled={loading}
            >
              <FaFacebook />
              <span>Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="auth-link">
                Create a free account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
