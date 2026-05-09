import React, { useState, useEffect } from 'react';
import { FaSearch, FaStar, FaClock, FaShoppingCart } from 'react-icons/fa';
import '../styles/global.css';

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
          
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEnrollNow = (course) => {
    setSelectedCourse(course);
    setShowEnrollment(true);
    setFormData({
      ...formData,
      course: course.title
    });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Here you would normally send the data to your backend
    console.log('Enrollment form submitted:', formData);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setShowEnrollment(false);
      setSelectedCourse(null);
    }, 3000);
  };

  const closeEnrollment = () => {
    setShowEnrollment(false);
    setSelectedCourse(null);
  };

  const courses = [
    {
      id: 1,
      title: "Android (Kotlin + Jetpack)",
      description: "Master Android development using Kotlin and Jetpack components. Build modern, responsive Android applications from scratch.",
      instructor: "Tech Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "12 weeks",
      rating: 4.8,
      students: 850,
      price: 15000,
      originalPrice: 34999,
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "mobile",
      tags: ["Android", "Kotlin", "Jetpack"],
      gradient: "from-green-400 to-blue-600",
      featured: true,
      lessons: 48,
      hours: 96
    },
    {
      id: 2,
      title: "Design Patterns",
      description: "Learn essential design patterns and principles for writing clean, maintainable, and scalable code in modern programming languages.",
      instructor: "Design Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Advanced",
      duration: "8 weeks",
      rating: 4.9,
      students: 620,
      price: 15000,
      originalPrice: 29999,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "backend",
      tags: ["Design Patterns", "Architecture", "Clean Code"],
      gradient: "from-purple-400 to-pink-600",
      featured: true,
      lessons: 32,
      hours: 64
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Master fundamental data structures and algorithms essential for technical interviews and efficient problem-solving in programming.",
      instructor: "DSA Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "10 weeks",
      rating: 4.7,
      students: 1200,
      price: 20000,
      originalPrice: 24999,
      image: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "data-science",
      tags: ["Data Structures", "Algorithms", "Interview Prep"],
      gradient: "from-yellow-400 to-orange-600",
      featured: true,
      lessons: 40,
      hours: 80
    },
    {
      id: 4,
      title: "English Speaking Full Course",
      description: "Improve your English communication skills with comprehensive vocabulary building and practical speaking exercises.",
      instructor: "Language Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Beginner",
      duration: "6 weeks",
      rating: 4.6,
      students: 450,
      price: 10000,
      originalPrice: 12999,
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "education",
      tags: ["English", "Speaking", "Vocabulary"],
      gradient: "from-blue-400 to-cyan-600",
      featured: false,
      lessons: 24,
      hours: 48
    },
    {
      id: 5,
      title: "Hindi Speaking Full Course",
      description: "Enhance your Hindi communication skills with vocabulary building and practical conversation exercises.",
      instructor: "Language Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Beginner",
      duration: "6 weeks",
      rating: 4.5,
      students: 380,
      price: 10000,
      originalPrice: 11999,
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "education",
      tags: ["Hindi", "Speaking", "Vocabulary"],
      gradient: "from-green-400 to-teal-600",
      featured: false,
      lessons: 24,
      hours: 48
    },
    {
      id: 6,
      title: "Core & Advanced Python with AI",
      description: "Master Python programming from basics to advanced concepts including AI, machine learning, and data science applications.",
      instructor: "Python Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "16 weeks",
      rating: 4.8,
      students: 1500,
      price: 15000,
      originalPrice: 34999,
      image: "https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "data-science",
      tags: ["Python", "AI", "Machine Learning", "Data Science"],
      gradient: "from-blue-400 to-purple-600",
      featured: true,
      lessons: 64,
      hours: 128
    },
    {
      id: 7,
      title: "Fast API",
      description: "Build high-performance APIs with Python's FastAPI framework. Modern web development made simple.",
      instructor: "API Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Advanced",
      duration: "6 weeks",
      rating: 4.7,
      students: 0,
      price: 14999,
      originalPrice: 19999,
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "backend",
      tags: ["FastAPI", "Python", "Web Development", "API"],
      gradient: "from-red-400 to-pink-600",
      featured: false,
      lessons: 24,
      hours: 48
    },
    {
      id: 8,
      title: "Cloud Computing (AWS)",
      description: "Master Amazon Web Services and cloud computing fundamentals for modern infrastructure deployment.",
      instructor: "Cloud Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Advanced",
      duration: "12 weeks",
      rating: 4.9,
      students: 0,
      price: 25000,
      originalPrice: 39999,
      image: "https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "backend",
      tags: ["AWS", "Cloud Computing", "DevOps", "Infrastructure"],
      gradient: "from-orange-400 to-red-600",
      featured: false,
      lessons: 48,
      hours: 96
    },
    {
      id: 9,
      title: "System Designing",
      description: "Learn system design principles and architecture patterns for building scalable, robust applications.",
      instructor: "System Design Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Advanced",
      duration: "10 weeks",
      rating: 4.8,
      students: 0,
      price: 25000,
      originalPrice: 39999,
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "backend",
      tags: ["System Design", "Architecture", "Scalability"],
      gradient: "from-indigo-400 to-purple-600",
      featured: false,
      lessons: 40,
      hours: 80
    },
    {
      id: 10,
      title: "Generative AI",
      description: "Explore the world of generative AI, including GPT, DALL-E, and cutting-edge AI technologies.",
      instructor: "AI Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Advanced",
      duration: "14 weeks",
      rating: 4.9,
      students: 0,
      price: 35000,
      originalPrice: 44999,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "data-science",
      tags: ["Generative AI", "GPT", "DALL-E", "Machine Learning"],
      gradient: "from-purple-400 to-pink-600",
      featured: false,
      lessons: 56,
      hours: 112
    },
    {
      id: 11,
      title: "C Programming",
      description: "Master the fundamentals of C programming, from basic syntax to advanced concepts and memory management.",
      instructor: "C Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Beginner",
      duration: "8 weeks",
      rating: 4.4,
      students: 680,
      price: 7500,
      originalPrice: 9999,
      image: "https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "frontend",
      tags: ["C Programming", "Memory Management", "Pointers"],
      gradient: "from-gray-400 to-blue-600",
      featured: false,
      lessons: 32,
      hours: 64
    },
    {
      id: 12,
      title: "C++ Programming",
      description: "Learn C++ programming from basics to advanced concepts including OOP, templates, and STL.",
      instructor: "C++ Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "10 weeks",
      rating: 4.6,
      students: 720,
      price: 7500,
      originalPrice: 9999,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "frontend",
      tags: ["C++", "OOP", "Templates", "STL"],
      gradient: "from-blue-400 to-indigo-600",
      featured: false,
      lessons: 40,
      hours: 80
    },
    {
      id: 13,
      title: "Core Java",
      description: "Master Java programming fundamentals, OOP concepts, and enterprise-level application development.",
      instructor: "Java Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "12 weeks",
      rating: 4.7,
      students: 950,
      price: 7500,
      originalPrice: 9999,
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "backend",
      tags: ["Java", "OOP", "Spring", "Enterprise"],
      gradient: "from-red-400 to-orange-600",
      featured: false,
      lessons: 48,
      hours: 96
    },
    {
      id: 14,
      title: "Academic Tuitions (Class 6th to 10th)",
      description: "Comprehensive academic support for students from 6th to 10th grade in all subjects.",
      instructor: "Education Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Beginner",
      duration: "Ongoing",
      rating: 4.8,
      students: 150,
      price: 4999,
      originalPrice: 6999,
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      category: "education",
      tags: ["Academic", "Tuition", "School", "6th-10th"],
      gradient: "from-green-400 to-teal-600",
      featured: false,
      lessons: 0,
      hours: 0
    }
  ];

    
  const sortedCourses = [...courses];

  
  const featuredCourses = sortedCourses.filter(course => course.featured);
  const regularCourses = sortedCourses.filter(course => !course.featured);

  return (
    <div className="courses-page">
      {/* Featured Courses */}
      {featuredCourses.length > 0 && (
        <section className="courses-section">
          <div className="courses-container">
            <div className="section-header">
              <h2 className="section-title">Featured Courses</h2>
            </div>
            
            <div className="courses-grid-layout">
              {featuredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className={`course-card-item ${isVisible ? 'slide-in-up' : ''}`}
                  style={{ animationDelay: `${300 + (index * 100)}ms` }}
                >
                  <div className="course-card-image-container">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="course-card-image"
                    />
                    <div className="course-card-badge">
                      Featured
                    </div>
                  </div>
                  
                  <div className="course-card-content">
                    <div className="course-card-meta">
                      <span className={`level-badge level-${course.level.toLowerCase()}`}>
                        {course.level}
                      </span>
                      <div className="course-card-stats">
                        <FaStar className="rating-star" />
                        <span>{course.rating}</span>
                        <span className="rating-count">({course.students})</span>
                      </div>
                    </div>
                    
                    <h3 className="course-card-title">
                      {course.title}
                    </h3>
                    
                    <p className="course-card-description">{course.description}</p>
                    
                    <div className="course-card-instructor">
                      <img
                        src={course.instructorImage}
                        alt={course.instructor}
                        className="course-card-avatar"
                      />
                      <span>{course.instructor}</span>
                    </div>
                    
                    <div className="course-card-meta-info">
                      <div className="meta-item">
                        <FaClock className="meta-icon" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <div className="course-card-footer">
                      <div className="course-card-price">
                        <span className="current-price">₹{course.price.toLocaleString('en-IN')}</span>
                        <span className="original-price">₹{course.originalPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <span className="discount-badge">
                        Save ₹{Math.round(course.originalPrice - course.price).toLocaleString('en-IN')}
                      </span>
                    </div>
                    
                    <div className="course-card-actions">
                      <button 
                        onClick={() => handleEnrollNow(course)}
                        className="course-card-enroll"
                      >
                        <FaShoppingCart />
                        <span>Enroll Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Courses */}
      <section className="courses-section">
        <div className="courses-container">
          
          {sortedCourses.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">
                <FaSearch />
              </div>
              <h3>No courses found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="courses-grid-layout">
              {regularCourses.map((course, index) => (
                <div
                  key={course.id}
                  className={`course-card-item ${isVisible ? 'slide-in-up' : ''}`}
                  style={{ animationDelay: `${500 + (index * 100)}ms` }}
                >
                  <div className="course-card-image-container">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="course-card-image"
                    />
                  </div>
                  
                  <div className="course-card-content">
                    <div className="course-card-meta">
                      <span className={`level-badge level-${course.level.toLowerCase()}`}>
                        {course.level}
                      </span>
                      <div className="course-card-stats">
                        <FaStar className="rating-star" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="course-card-title">
                      {course.title}
                    </h3>
                    
                    <p className="course-card-description">{course.description}</p>
                    
                    <div className="course-card-instructor">
                      <img
                        src={course.instructorImage}
                        alt={course.instructor}
                        className="course-card-avatar"
                      />
                      <span>{course.instructor}</span>
                    </div>
                    
                    <div className="course-card-footer">
                      <div className="course-card-price">
                        <span className="current-price">₹{course.price.toLocaleString('en-IN')}</span>
                        <span className="original-price">₹{course.originalPrice.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                    
                    <div className="course-card-actions">
                      <button 
                        onClick={() => handleEnrollNow(course)}
                        className="course-card-enroll"
                      >
                        <FaShoppingCart />
                        <span>Enroll Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enrollment Modal */}
      {showEnrollment && selectedCourse && (
        <div className="enrollment-modal-overlay" onClick={closeEnrollment}>
          <div className="enrollment-modal" onClick={(e) => e.stopPropagation()}>
            {/* Course Details */}
            <div className="enrollment-modal-header">
              <div className="selected-course-info">
                <div className="selected-course-image">
                  <img 
                    src={selectedCourse.image} 
                    alt={selectedCourse.title}
                  />
                </div>
                <div className="selected-course-details">
                  <h3>{selectedCourse.title}</h3>
                  <p>{selectedCourse.description}</p>
                  <div className="selected-course-meta">
                    <span className="duration-badge">{selectedCourse.duration}</span>
                    <span className="level-badge">{selectedCourse.level}</span>
                    <span className="price-badge">₹{selectedCourse.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
              <button className="close-modal-btn" onClick={closeEnrollment}>
                ×
              </button>
            </div>

            {/* Enrollment Form */}
            <div className="enrollment-modal-content">
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Enrollment Request Submitted!</h3>
                  <p>
                    Thank you for your interest in <strong>{selectedCourse.title}</strong>. 
                    Our team will contact you within 24 hours to complete your enrollment.
                  </p>
                </div>
              ) : (
                <form className="enrollment-form" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="course">Selected Course</label>
                      <input
                        type="text"
                        id="course"
                        name="course"
                        value={formData.course || selectedCourse.title}
                        readOnly
                        className="readonly-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows="4"
                      placeholder="Tell us about your learning goals and any questions you have..."
                    ></textarea>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="submit-btn">
                      Submit Enrollment Request
                    </button>
                  </div>
                </form>
              )}

              {/* Contact Information */}
              <div className="enrollment-contact">
                <h4>Need Help?</h4>
                <div className="contact-details">
                  <div className="contact-item">
                    <strong>Email:</strong>
                    <span>rps.trainings05@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <strong>Phone:</strong>
                    <span>+91 6361176856</span>
                  </div>
                  <div className="contact-item">
                    <strong>Hours:</strong>
                    <span>Sun: 9:00 AM - 6:00 PM IST</span>
                  </div>
                </div>
              </div>

                          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
