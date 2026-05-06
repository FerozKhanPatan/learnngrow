import React, { useState } from 'react';
import { FaGraduationCap, FaMobileAlt, FaLaptopCode, FaChalkboardTeacher, FaUsers, FaLightbulb, FaBullseye, FaEye } from 'react-icons/fa';
import aboutLogo from '../assets/images/about-logo.png';
import '../styles/global.css';

function About() {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const form = e.target.form;
    const isValid = form.checkValidity();
    setIsFormValid(isValid);
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-logo">
            <img src={aboutLogo} alt="Learn N Byte Logo" className="about-logo-image" />
          </div>
          <h1 className="about-hero-title">About Learn N Byte</h1>
          <p className="about-hero-subtitle">Empowering Education Through Technology</p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaGraduationCap />
              </div>
              <h3 className="service-title">Programming Courses</h3>
              <p className="service-description">
                Comprehensive programming courses in C, C++, Python, Java, and modern development frameworks with hands-on projects.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaMobileAlt />
              </div>
              <h3 className="service-title">Mobile Development</h3>
              <p className="service-description">
                Android development with Kotlin and Jetpack, building modern, responsive mobile applications from scratch.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaLaptopCode />
              </div>
              <h3 className="service-title">AI & Data Science</h3>
              <p className="service-description">
                Advanced courses in AI, Machine Learning, Data Structures, Algorithms, and Generative AI technologies.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaChalkboardTeacher />
              </div>
              <h3 className="service-title">Language Learning</h3>
              <p className="service-description">
                English and Hindi speaking courses with vocabulary building and practical communication skills development.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaUsers />
              </div>
              <h3 className="service-title">Expert Mentorship</h3>
              <p className="service-description">
                Building college-level projects and reports in proper format with academic excellence and industry standards.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaLightbulb />
              </div>
              <h3 className="service-title">Cloud & System Design</h3>
              <p className="service-description">
                AWS cloud computing, system design, and architecture courses for building scalable applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="mv-icon">
                <FaBullseye />
              </div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-description">
                To provide quality education and training in latest technologies, empowering students to become skilled professionals 
                who can contribute to the technological advancement of society. We strive to bridge the gap between academic 
                learning and industry requirements through practical, hands-on experience.
              </p>
            </div>

            <div className="vision-card">
              <div className="mv-icon">
                <FaEye />
              </div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-description">
                To become a leading educational institution that nurtures innovation, creativity, and excellence in technology 
                education. We envision creating a community of lifelong learners who can adapt to evolving technologies and 
                drive positive change in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-form">
              <h3 className="contact-subtitle">Contact Information</h3>
              <div className="contact-info-display">
                <div className="info-item">
                  <h4>Phone</h4>
                  <p>+91 6361176856</p>
                </div>
                <div className="info-item">
                  <h4>Email</h4>
                  <p>rps.trainings05@gmail.com</p>
                </div>
                <div className="info-item">
                  <h4>Address</h4>
                  <p>Learn N Byte<br />Bangalore, Karnataka<br />India - 560001</p>
                </div>
                <div className="info-item">
                  <h4>Working Hours</h4>
                  <p>Sunday: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Send us a Message */}
            <div className="contact-form">
              <h3 className="contact-subtitle">Send us a Message</h3>
              <form className="form">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Your Name *" 
                    title="Please fill all *marked fields" 
                    required 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Your Email *" 
                    title="Please fill all *marked fields" 
                    required 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <div className="phone-input-group">
                    <select 
                      className="country-code-select form-input" 
                      name="countryCode"
                      onChange={handleInputChange}
                      title="Please fill all *marked fields" 
                      required
                    >
                      <option value="">Country *</option>
                      <option value="+91">+91 India</option>
                      <option value="+1">+1 USA/Canada</option>
                      <option value="+44">+44 UK</option>
                      <option value="+61">+61 Australia</option>
                      <option value="+971">+971 UAE</option>
                      <option value="+966">+966 Saudi Arabia</option>
                      <option value="+65">+65 Singapore</option>
                      <option value="+60">+60 Malaysia</option>
                    </select>
                    <input 
                      type="tel" 
                      name="mobileNumber"
                      onChange={handleInputChange}
                      placeholder="Mobile Number *" 
                      title="Please fill all *marked fields" 
                      className="form-input mobile-number-input" 
                      maxLength="10" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Your Message *" 
                    rows="5" 
                    title="Please fill all *marked fields" 
                    required
                    className="form-input"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={!isFormValid}
                  style={{ opacity: isFormValid ? 1 : 0.6, cursor: isFormValid ? 'pointer' : 'not-allowed' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
