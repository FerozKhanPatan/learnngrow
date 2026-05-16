import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaPlayCircle, FaClock, FaStar, FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import '../styles/global.css';

const Learning = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  // Mock enrolled courses - in a real app, this would come from the backend
  const enrolledCourses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and MongoDB',
      instructor: 'John Doe',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      progress: 65,
      totalLessons: 45,
      completedLessons: 29,
      rating: 4.8,
      duration: '40 hours',
      lastAccessed: '2 hours ago'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      description: 'Learn Python programming and data analysis fundamentals',
      instructor: 'Jane Smith',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      progress: 30,
      totalLessons: 35,
      completedLessons: 10,
      rating: 4.9,
      duration: '35 hours',
      lastAccessed: '1 day ago'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContinueLearning = (courseId) => {
    // Navigate to course detail or learning interface
    navigate(`/course/${courseId}`);
  };

  const handleBrowseCourses = () => {
    navigate('/courses');
  };

  return (
    <div className="learning-container">
      <div className={`learning-header ${isVisible ? 'slide-in-down' : ''}`}>
        <h1 className="learning-title">My Learning</h1>
        <p className="learning-subtitle">
          {enrolledCourses.length > 0 
            ? `You have ${enrolledCourses.length} course${enrolledCourses.length > 1 ? 's' : ''} in progress`
            : 'Start your learning journey today'
          }
        </p>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="learning-content">
          <div className="learning-courses-grid">
            {enrolledCourses.map((course, index) => (
              <div
                key={course.id}
                className={`learning-course-card ${isVisible ? 'slide-in-up' : ''}`}
                style={{ animationDelay: `${200 + (index * 100)}ms` }}
              >
                <div className="learning-course-card-image">
                  <img src={course.image} alt={course.title} />
                  <div className="learning-course-card-overlay">
                    <button
                      onClick={() => handleContinueLearning(course.id)}
                      className="continue-learning-btn"
                    >
                      <FaPlayCircle />
                      <span>Continue Learning</span>
                    </button>
                  </div>
                </div>
                
                <div className="learning-course-card-content">
                  <h3 className="learning-course-card-title">{course.title}</h3>
                  <p className="learning-course-card-description">{course.description}</p>
                  
                  <div className="learning-course-card-meta">
                    <div className="learning-course-card-instructor">
                      <span className="instructor-label">Instructor:</span>
                      <span className="instructor-name">{course.instructor}</span>
                    </div>
                    <div className="learning-course-card-rating">
                      <FaStar className="rating-star" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="learning-course-card-stats">
                    <div className="stat-item">
                      <FaClock className="stat-icon" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="stat-item">
                      <FaBook className="stat-icon" />
                      <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                    </div>
                  </div>

                  <div className="learning-course-card-progress">
                    <div className="progress-header">
                      <span className="progress-label">Progress</span>
                      <span className="progress-percentage">{course.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="last-accessed">Last accessed: {course.lastAccessed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`learning-empty-state ${isVisible ? 'slide-in-up' : ''}`} style={{ animationDelay: '200ms' }}>
          <div className="empty-state-icon">
            <FaBook />
          </div>
          <h2 className="empty-state-title">No courses enrolled yet</h2>
          <p className="empty-state-description">
            You haven't enrolled in any courses yet. Browse our course catalog to start your learning journey.
          </p>
          <button onClick={handleBrowseCourses} className="browse-courses-btn">
            <FaShoppingCart />
            <span>Browse Courses</span>
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Learning;
