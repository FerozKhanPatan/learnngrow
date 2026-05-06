import React from 'react';
import '../styles/global.css';

const Support = () => {
  return (
    <div className="support-container">
      <h1 className="support-title">Support Center</h1>
      
      <div className="support-grid">
        <div className="support-card">
          <h2 className="support-section-title">Get Help</h2>
          <p className="support-description">
            Our support team is here to help you with any questions or issues you may have.
          </p>
          
          <div className="support-options">
            <div className="support-option">
              <h3 className="support-option-title">Email Support</h3>
              <p className="support-option-text">rps.trainings05@gmail.com</p>
              <p className="support-option-subtext">Response time: 24-48 hours</p>
            </div>
            
            <div className="support-option">
              <h3 className="support-option-title">Live Chat</h3>
              <p className="support-option-text">Available Sunday: 9:00 AM - 6:00 PM IST</p>
              <button className="support-chat-btn">Start Chat</button>
            </div>
            
            <div className="support-option">
              <h3 className="support-option-title">Phone Support</h3>
              <p className="support-option-text">1-800-6361176856</p>
              <p className="support-option-subtext">Available Sunday: 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </div>
        
        <div className="support-card">
          <h2 className="support-section-title">Frequently Asked Questions</h2>
          
          <div className="support-faq">
            <div className="support-faq-item">
              <h3 className="support-faq-question">How do I enroll in a course?</h3>
              <p className="support-faq-answer">
                Simply browse our courses, click on one you're interested in, and click "Enroll Now" button.
              </p>
            </div>
            
            <div className="support-faq-item">
              <h3 className="support-faq-question">Can I get a refund?</h3>
              <p className="support-faq-answer">
                Yes, we offer a 30-day money-back guarantee for all courses.
              </p>
            </div>
            
            <div className="support-faq-item">
              <h3 className="support-faq-question">How long do I have access to courses?</h3>
              <p className="support-faq-answer">
                Once enrolled, you have lifetime access to course materials.
              </p>
            </div>
            
            <div className="support-faq-item">
              <h3 className="support-faq-question">Are certificates included?</h3>
              <p className="support-faq-answer">
                Yes, certificates are awarded upon successful completion of courses.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="support-contact">
        <h2 className="support-section-title">Contact Form</h2>
        <form className="support-form">
          <div className="support-form-row">
            <div className="support-form-group">
              <label className="support-form-label">Name</label>
              <input
                type="text"
                className="support-form-input"
                placeholder="Your Name"
              />
            </div>
            <div className="support-form-group">
              <label className="support-form-label">Email</label>
              <input
                type="email"
                className="support-form-input"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="support-form-group">
            <label className="support-form-label">Subject</label>
            <input
              type="text"
              className="support-form-input"
              placeholder="How can we help?"
            />
          </div>
          
          <div className="support-form-group">
            <label className="support-form-label">Message</label>
            <textarea
              rows="4"
              className="support-form-textarea"
              placeholder="Tell us more about your question or issue..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="support-submit-btn"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
