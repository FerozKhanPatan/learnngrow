import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaPlayCircle, FaStar, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import '../styles/global.css';

const Dashboard = () => {
  const [enrolledDropdownOpen, setEnrolledDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

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

  const enrolledCourses = [
    {
      id: 1,
      title: "Android (Kotlin + Jetpack)",
      progress: 35,
      totalLessons: 48,
      completedLessons: 17,
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      instructor: "Tech Expert"
    }
  ];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="dashboard-container">
      {/* Welcome Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          Welcome back, {user?.name || 'Learner'}!
        </h1>
      </div>

      {/* Search Bar */}
      <div className="dashboard-search-bar">
        <div className="search-welcome-message">
          <h2>Welcome back, {user?.name || 'Learner'}!</h2>
        </div>
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-main-grid">
        {/* Left Side - All Courses */}
        <div className="dashboard-left-section">
          <div className="dashboard-section">
            <h2 className="dashboard-section-title">
              {searchQuery ? `Search Results (${filteredCourses.length})` : 'All Courses'}
            </h2>
            
            <div className="recommended-courses-grid">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, _index) => (
                  <div
                    key={course.id}
                    className="recommended-course-card"
                  >
                    <div className="recommended-course-card-image">
                      <img src={course.image} alt={course.title} />
                      <span className="course-level-badge">{course.level}</span>
                    </div>
                    <div className="recommended-course-card-content">
                      <h3 className="recommended-course-card-title">{course.title}</h3>
                      <p className="recommended-course-card-description">{course.description}</p>
                      <div className="recommended-course-card-meta">
                        <div className="recommended-course-card-rating">
                          <FaStar className="rating-star" />
                          <span>{course.rating}</span>
                          <span className="rating-count">({course.students.toLocaleString()})</span>
                        </div>
                        <span className="course-duration">{course.duration}</span>
                      </div>
                      <div className="recommended-course-card-footer">
                        <div className="recommended-course-card-price">
                          <span className="current-price">₹{course.price.toLocaleString('en-IN')}</span>
                          <span className="original-price">₹{course.originalPrice.toLocaleString('en-IN')}</span>
                        </div>
                        <button 
                          onClick={() => navigate('/courses')}
                          className="enroll-btn"
                        >
                          <FaShoppingCart />
                          <span>Enroll Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <FaSearch className="no-results-icon" />
                  <h3>No courses found</h3>
                  <p>Try adjusting your search terms</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Enrolled Courses Dropdown */}
        <div className="dashboard-right-section">
          <div className="enrolled-courses-dropdown">
            <button 
              className="enrolled-dropdown-toggle"
              onClick={() => setEnrolledDropdownOpen(!enrolledDropdownOpen)}
            >
              <span>My learning</span>
              <FaChevronDown className={`dropdown-chevron ${enrolledDropdownOpen ? 'open' : ''}`} />
            </button>

            {enrolledDropdownOpen && (
              <div className="enrolled-dropdown-content">
                {enrolledCourses.length > 0 ? (
                  <div className="enrolled-dropdown-list">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="enrolled-dropdown-item">
                        <div className="enrolled-dropdown-item-image">
                          <img src={course.image} alt={course.title} />
                        </div>
                        <div className="enrolled-dropdown-item-content">
                          <h4 className="enrolled-dropdown-item-title">{course.title}</h4>
                          <div className="enrolled-dropdown-item-progress">
                            <div className="progress-bar">
                              <div 
                                className="progress-fill"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <span className="progress-percent">{course.progress}%</span>
                          </div>
                        </div>
                        <button className="continue-learning-btn-small">
                          <FaPlayCircle />
                        </button>
                      </div>
                    ))}
                    <button 
                      onClick={() => navigate('/learning')}
                      className="go-to-learning-btn"
                    >
                      Go to My learning
                    </button>
                  </div>
                ) : (
                  <div className="enrolled-dropdown-empty">
                    <p>No courses enrolled yet</p>
                    <button 
                      onClick={() => navigate('/courses')}
                      className="browse-courses-btn-small"
                    >
                      Browse Courses
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
