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

  const handleDirectEmail = () => {
    const emailSubject = `Course Enquiry: ${courseInfo?.title || 'General Enquiry'}`;
    const emailBody = `Hi Learn N Byte Team,

I'm interested in learning more about your courses.

${courseInfo ? `Specifically interested in: ${courseInfo.title}
Level: ${courseInfo.level}
Duration: ${courseInfo.duration}` : ''}

Please provide me with more information about:
1. Course syllabus and curriculum
2. Batch timings and schedule
3. Fee structure and payment options
4. Enrollment process
5. Any prerequisites required

Looking forward to your response.

Thank you!`;

    window.location.href = `mailto:learnnbyte@example.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
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
              
              <div className="contact-cards">
                <div className="contact-card" onClick={handleDirectEmail}>
                  <div className="contact-card-icon">
                    <FaEnvelope />
                  </div>
                  <h3>Email Us Directly</h3>
                  <p>Send us an email directly with your course enquiry</p>
                  <button className="contact-card-button">
                    <FaEnvelope />
                    <span>Compose Email</span>
                  </button>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FaPhone />
                  </div>
                  <h3>Call Us</h3>
                  <p>Speak with our course counselors directly</p>
                  <div className="contact-info">
                    <span>+91 98765 43210</span>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h3>Visit Our Center</h3>
                  <p>Meet us in person for course counseling</p>
                  <div className="contact-info">
                    <span>123, Education Street, Learning City - 560001</span>
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
