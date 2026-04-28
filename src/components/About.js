import React from 'react';
import { FaGraduationCap, FaMobileAlt, FaLaptopCode, FaChalkboardTeacher, FaUsers, FaLightbulb, FaBullseye, FaEye, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import aboutLogo from '../assets/images/about-logo.png';
import '../styles/global.css';

const About = () => {
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
          <div className="about-hero-stats">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">13+</div>
              <div className="stat-label">Expert Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Instructors</div>
            </div>
          </div>
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

      {/* Gallery Section */}
      <section className="about-section gallery-section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop" alt="Classroom Training" />
              <div className="gallery-overlay">
                <span>Classroom Training</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1559028006-848a6538dfc9?w=400&h=300&fit=crop" alt="Workshop Session" />
              <div className="gallery-overlay">
                <span>Workshop Session</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1512941937409-a4c65e70187e?w=400&h=300&fit=crop" alt="Mobile Development" />
              <div className="gallery-overlay">
                <span>Mobile Development</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" alt="Coding Bootcamp" />
              <div className="gallery-overlay">
                <span>Coding Bootcamp</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop" alt="AI Workshop" />
              <div className="gallery-overlay">
                <span>AI Workshop</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=400&h=300&fit=crop" alt="Student Projects" />
              <div className="gallery-overlay">
                <span>Student Projects</span>
              </div>
            </div>
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
                    Learn N Byte Training Center<br />
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
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3 className="contact-subtitle">Send us a Message</h3>
              <form className="form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
