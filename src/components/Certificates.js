import React from 'react';
import '../styles/global.css';

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h1 className="certificates-title">My Certificates</h1>
      <div className="certificates-grid">
        <div className="certificate-card">
          <div className="certificate-preview">
            <div className="certificate-content">
              <h3 className="certificate-title">Certificate of Completion</h3>
              <p className="certificate-course">React Development</p>
              <p className="certificate-date">Issued: March 2024</p>
            </div>
          </div>
          <button className="certificate-btn certificate-btn-blue">
            Download Certificate
          </button>
        </div>
        
        <div className="certificate-card">
          <div className="certificate-preview">
            <div className="certificate-content">
              <h3 className="certificate-title">Certificate of Achievement</h3>
              <p className="certificate-course">JavaScript Fundamentals</p>
              <p className="certificate-date">Issued: February 2024</p>
            </div>
          </div>
          <button className="certificate-btn certificate-btn-green">
            Download Certificate
          </button>
        </div>
        
        <div className="certificate-card">
          <div className="certificate-preview">
            <div className="certificate-content">
              <h3 className="certificate-title">Certificate of Excellence</h3>
              <p className="certificate-course">Web Development Basics</p>
              <p className="certificate-date">Issued: January 2024</p>
            </div>
          </div>
          <button className="certificate-btn certificate-btn-purple">
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
