import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGraduationCap } from 'react-icons/fa';
import '../styles/global.css';

const CourseContact = () => {
  const [courseInfo, setCourseInfo] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // Parse URL parameters to get course information
    const urlParams = new URLSearchParams(window.location.search);
    const courseTitle = urlParams.get('course');
    const courseLevel = urlParams.get('level');
    const courseDuration = urlParams.get('duration');

    if (courseTitle) {
      setCourseInfo({
        title: courseTitle,
        level: courseLevel || 'Not specified',
        duration: courseDuration || 'Not specified'
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailSubject = `Course Enquiry: ${courseInfo?.title || 'General Enquiry'}`;
    const emailBody = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Course Information:
Course: ${courseInfo?.title || 'Not specified'}
Level: ${courseInfo?.level || 'Not specified'}
Duration: ${courseInfo?.duration || 'Not specified'}

Message:
${formData.message}`;

    // Open email client
    window.location.href = `mailto:learnnbyte@example.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Show success message
    setSubmitMessage('Thank you for your enquiry! Your email client has been opened with your message.');
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setSubmitMessage('');
    }, 3000);
  };

  
  return (
    <div className="course-contact-page">
      {/* Header */}
      <div className="course-contact-header">
        <div className="course-contact-container">
          <button 
            onClick={() => window.history.back()}
            className="back-button"
          >
            <FaArrowLeft />
            <span>Back to Courses</span>
          </button>
          
          <h1 className="course-contact-title">
            {courseInfo ? `Enquire about ${courseInfo.title}` : 'Course Enquiry'}
          </h1>
          
          {courseInfo && (
            <div className="course-info-bar">
              <div className="course-info-item">
                <FaGraduationCap />
                <span>{courseInfo.level}</span>
              </div>
              <div className="course-info-item">
                <FaClock />
                <span>{courseInfo.duration}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Options */}
      <div className="course-contact-content">
        <div className="course-contact-container">
          <div className="contact-options-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="contact-section-title">Send us a Message</h2>
              
              {submitMessage && (
                <div className="success-message">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us about your learning goals and any questions you have..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="quick-contact-section">
              <h2 className="contact-section-title">Quick Contact Options</h2>
              
              <div className="contact-info-simple">
                <div className="contact-item-simple">
                  <FaEnvelope className="contact-icon-simple" />
                  <div className="contact-text-simple">
                    <h3>Email</h3>
                    <p>rps.trainings05@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item-simple">
                  <FaPhone className="contact-icon-simple" />
                  <div className="contact-text-simple">
                    <h3>Phone</h3>
                    <p>+91 6361176856</p>
                  </div>
                </div>

                <div className="contact-item-simple">
                  <FaMapMarkerAlt className="contact-icon-simple" />
                  <div className="contact-text-simple">
                    <h3>Location</h3>
                    <p>Online Learning Platform</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-section">
                <h3>Office Hours</h3>
                <div className="office-hours">
                  <div className="hours-item">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContact;
