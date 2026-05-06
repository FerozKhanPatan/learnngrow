import React from 'react';
import guestLecture from '../assets/images/guest-lecture.jpeg';
import seminar from '../assets/images/Seminar.jpeg';
import collegeWorkshop from '../assets/images/college-workshop.jpeg';
import mockInterview from '../assets/images/mock-interview.jpeg';
import '../styles/global.css';

function Workshops() {
  return (
    <div className="workshops-page">
      {/* Hero Section */}
      <section className="workshops-hero">
        <div className="container">
          <h1 className="workshops-hero-title">Guest Lectures, Seminars and Workshops</h1>
          <p className="workshops-hero-subtitle">
            Enhance your learning experience with expert-led sessions, hands-on workshops, and career preparation programs
          </p>
        </div>
      </section>

      {/* Workshops Grid Section */}
      <section className="workshops-grid-section">
        <div className="container">
          <div className="workshops-grid">
            {/* Guest Lectures */}
            <div className="workshop-card">
              <div className="workshop-image-container">
                <img src={guestLecture} alt="Guest Lectures" className="workshop-image" />
                <div className="workshop-overlay">
                  <span className="workshop-category">Guest Lectures</span>
                </div>
              </div>
              <div className="workshop-content">
                <h3 className="workshop-title">Industry Expert Sessions</h3>
                <p className="workshop-description">
                  Learn from industry professionals and subject matter experts who share real-world experiences, 
                  latest trends, and career insights in technology and business domains.
                </p>
                <div className="workshop-features">
                  <span className="feature-tag">Industry Experts</span>
                  <span className="feature-tag">Career Guidance</span>
                  <span className="feature-tag">Real-world Insights</span>
                </div>
              </div>
            </div>

            {/* Seminars */}
            <div className="workshop-card">
              <div className="workshop-image-container">
                <img src={seminar} alt="Seminars" className="workshop-image" />
                <div className="workshop-overlay">
                  <span className="workshop-category">Seminars</span>
                </div>
              </div>
              <div className="workshop-content">
                <h3 className="workshop-title">Technical Seminars</h3>
                <p className="workshop-description">
                  In-depth seminars covering cutting-edge technologies, research methodologies, and 
                  emerging trends in computer science, AI, and software development.
                </p>
                <div className="workshop-features">
                  <span className="feature-tag">Deep Dives</span>
                  <span className="feature-tag">Research Topics</span>
                  <span className="feature-tag">Latest Trends</span>
                </div>
              </div>
            </div>

            {/* Workshops */}
            <div className="workshop-card">
              <div className="workshop-image-container">
                <img src={collegeWorkshop} alt="College Workshops" className="workshop-image" />
                <div className="workshop-overlay">
                  <span className="workshop-category">Workshops</span>
                </div>
              </div>
              <div className="workshop-content">
                <h3 className="workshop-title">Hands-on Workshops</h3>
                <p className="workshop-description">
                  Practical, interactive workshops where students work on real projects, 
                  build prototypes, and gain hands-on experience with latest technologies.
                </p>
                <div className="workshop-features">
                  <span className="feature-tag">Practical Learning</span>
                  <span className="feature-tag">Team Projects</span>
                  <span className="feature-tag">Portfolio Building</span>
                </div>
              </div>
            </div>

            {/* Career Prep */}
            <div className="workshop-card">
              <div className="workshop-image-container">
                <img src={mockInterview} alt="Mock Interviews" className="workshop-image" />
                <div className="workshop-overlay">
                  <span className="workshop-category">Career Prep</span>
                </div>
              </div>
              <div className="workshop-content">
                <h3 className="workshop-title">Mock Interviews & Resume Building</h3>
                <p className="workshop-description">
                  Prepare for job interviews with mock sessions, resume reviews, and 
                  personalized feedback from experienced professionals and HR experts.
                </p>
                <div className="workshop-features">
                  <span className="feature-tag">Interview Practice</span>
                  <span className="feature-tag">Resume Review</span>
                  <span className="feature-tag">Career Coaching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Workshops;
