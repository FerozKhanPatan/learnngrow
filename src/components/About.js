import React, { useState } from 'react';
import { FaGraduationCap, FaMobileAlt, FaLaptopCode, FaChalkboardTeacher, FaUsers, FaLightbulb, FaBullseye, FaEye, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import aboutLogo from '../assets/images/about-logo.png';
import guestLecture from '../assets/images/guest-lecture.jpeg';
import seminar from '../assets/images/Seminar.jpeg';
import collegeWorkshop from '../assets/images/college-workshop.jpeg';
import mockInterview from '../assets/images/mock-interview.jpeg';
import aiMLWorkshop from '../assets/images/AI ML Workshop.jpeg';
import classroomTraining from '../assets/images/ClassroomTraining.jpeg';
import '../styles/global.css';

function About() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: guestLecture, alt: "Guest Lectures", title: "Guest Lectures" },
    { src: seminar, alt: "Seminars", title: "Seminars" },
    { src: collegeWorkshop, alt: "College Workshops", title: "College Workshops" },
    { src: mockInterview, alt: "Mock Interviews", title: "Mock Interviews" },
    { src: aiMLWorkshop, alt: "AI ML Workshop", title: "AI ML Workshop" },
    { src: classroomTraining, alt: "Classroom Training", title: "Classroom Training" }
  ];

  const handleInputChange = (e) => {
    const form = e.target.form;
    const isValid = form.checkValidity();
    setIsFormValid(isValid);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
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

      {/* Events Section */}
      <section className="about-section gallery-section">
        <div className="container">
          <h2 className="section-title">Our Events Gallery</h2>
          <div className="carousel-container">
            <button className="carousel-btn carousel-btn-prev" onClick={handlePrevImage}>
              ‹
            </button>
            <div className="carousel-viewport">
              <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}
                  >
                    <img src={image.src} alt={image.alt} />
                    <div className="gallery-overlay">
                      <span>{image.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn carousel-btn-next" onClick={handleNextImage}>
              ›
            </button>
          </div>
          <div className="carousel-dots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-subtitle">Contact Information</h3>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+91 6361176856</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>info@learnnbyte.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>
                    Learn N Byte<br />
                    Bangalore, Karnataka 560001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div className="contact-details">
                  <h4>Working Hours</h4>
                  <p>
                    Sunday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

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
                  />
                </div>
                <div className="form-group">
                  <div className="phone-input-group">
                    <select 
                      className="country-code-select" 
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
                      className="mobile-number-input" 
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
