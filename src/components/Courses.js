import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar, FaClock, FaHeart, FaShoppingCart, FaPlay } from 'react-icons/fa';
import '../styles/global.css';

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
    const [wishlist, setWishlist] = useState([]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
      price: 24999,
      originalPrice: 34999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      category: "mobile",
      tags: ["Android", "Kotlin", "Jetpack"],
      gradient: "from-green-400 to-blue-600",
      featured: true,
      lessons: 120,
      hours: 80
    },
    {
      id: 2,
      title: "Design Patterns",
      description: "Learn essential software design patterns and principles. Write cleaner, more maintainable code with proven patterns.",
      instructor: "Code Master",
      instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.7,
      students: 620,
      price: 14999,
      originalPrice: 24999,
      image: "https://images.unsplash.com/photo-1461749280684-ccc6de7ed301?w=600&h=400&fit=crop",
      category: "backend",
      tags: ["Design Patterns", "Architecture", "OOP"],
      gradient: "from-purple-400 to-pink-600",
      featured: true,
      lessons: 80,
      hours: 40
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Master fundamental data structures and algorithms. Essential for technical interviews and efficient programming.",
      instructor: "Algorithm Expert",
      instructorImage: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=50&h=50&fit=crop&crop=face",
      level: "Advanced",
      duration: "16 weeks",
      rating: 4.9,
      students: 1200,
      price: 29999,
      originalPrice: 44999,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "backend",
      tags: ["DSA", "Algorithms", "Problem Solving"],
      gradient: "from-red-400 to-orange-600",
      featured: true,
      lessons: 160,
      hours: 120
    },
    {
      id: 4,
      title: "English Speaking Full Course",
      description: "Improve your English communication skills with comprehensive vocabulary building and speaking practice.",
      instructor: "Language Coach",
      instructorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      level: "Beginner",
      duration: "8 weeks",
      rating: 4.6,
      students: 2100,
      price: 10000,
      originalPrice: 14999,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      category: "language",
      tags: ["English", "Speaking", "Full Course"],
      gradient: "from-blue-400 to-cyan-600",
      featured: false,
      lessons: 60,
      hours: 30
    },
    {
      id: 5,
      title: "Hindi Speaking Full Course",
      description: "Learn Hindi speaking and vocabulary with interactive lessons and practical conversation practice.",
      instructor: "Hindi Teacher",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      level: "Beginner",
      duration: "6 weeks",
      rating: 4.5,
      students: 1800,
      price: 10000,
      originalPrice: 14999,
      image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&h=400&fit=crop",
      category: "language",
      tags: ["Hindi", "Speaking", "Full Course"],
      gradient: "from-orange-400 to-red-600",
      featured: false,
      lessons: 50,
      hours: 25
    },
    {
      id: 6,
      title: "Core & Advanced Python with AI",
      description: "Learn Python programming from basics to advanced concepts including AI fundamentals and machine learning basics.",
      instructor: "AI Expert",
      instructorImage: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "14 weeks",
      rating: 4.8,
      students: 1500,
      price: 19999,
      originalPrice: 34999,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "data-science",
      tags: ["Python", "AI", "Machine Learning"],
      gradient: "from-indigo-400 to-purple-600",
      featured: true,
      lessons: 140,
      hours: 100
    },
    {
      id: 7,
      title: "Fast API (Coming Soon)",
      description: "Build high-performance APIs with FastAPI. Modern Python web framework for building APIs.",
      instructor: "API Specialist",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "6 weeks",
      rating: 4.7,
      students: 0,
      price: 12999,
      originalPrice: 19999,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "backend",
      tags: ["FastAPI", "Python", "API"],
      gradient: "from-teal-400 to-green-600",
      featured: false,
      lessons: 60,
      hours: 30
    },
    {
      id: 8,
      title: "Cloud Computing (AWS) (Coming Soon)",
      description: "Master AWS cloud services and architecture. Learn to deploy and manage applications on AWS.",
      instructor: "Cloud Expert",
      instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      level: "Advanced",
      duration: "12 weeks",
      rating: 4.8,
      students: 0,
      price: 39999,
      originalPrice: 59999,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      category: "cloud",
      tags: ["AWS", "Cloud", "DevOps"],
      gradient: "from-yellow-400 to-orange-600",
      featured: false,
      lessons: 120,
      hours: 80
    },
    {
      id: 9,
      title: "System Designing (Coming Soon)",
      description: "Learn system design principles and architecture patterns for building scalable applications.",
      instructor: "System Architect",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Advanced",
      duration: "10 weeks",
      rating: 4.9,
      students: 0,
      price: 34999,
      originalPrice: 49999,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      category: "backend",
      tags: ["System Design", "Architecture", "Scalability"],
      gradient: "from-purple-400 to-indigo-600",
      featured: false,
      lessons: 100,
      hours: 60
    },
    {
      id: 10,
      title: "Generative AI (Coming Soon)",
      description: "Explore generative AI technologies including GPT, DALL-E, and other cutting-edge AI models.",
      instructor: "AI Researcher",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Advanced",
      duration: "14 weeks",
      rating: 4.9,
      students: 0,
      price: 49999,
      originalPrice: 79999,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      category: "ai",
      tags: ["Generative AI", "Machine Learning", "Deep Learning"],
      gradient: "from-pink-400 to-purple-600",
      featured: false,
      lessons: 140,
      hours: 100
    },
    {
      id: 11,
      title: "C Programming",
      description: "Learn C programming from basics to advanced concepts. Foundation for system programming and embedded systems.",
      instructor: "C Programming Expert",
      instructorImage: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=50&h=50&fit=crop&crop=face",
      level: "Beginner",
      duration: "8 weeks",
      rating: 4.6,
      students: 950,
      price: 4999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      category: "programming",
      tags: ["C", "Programming", "Systems"],
      gradient: "from-blue-400 to-green-600",
      featured: false,
      lessons: 80,
      hours: 40
    },
    {
      id: 12,
      title: "C++ Programming",
      description: "Master C++ programming including OOP concepts, STL, and modern C++ features.",
      instructor: "C++ Expert",
      instructorImage: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "10 weeks",
      rating: 4.7,
      students: 750,
      price: 6999,
      originalPrice: 14999,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
      category: "programming",
      tags: ["C++", "OOP", "STL"],
      gradient: "from-cyan-400 to-blue-600",
      featured: false,
      lessons: 100,
      hours: 50
    },
    {
      id: 13,
      title: "Core Java",
      description: "Learn Java programming fundamentals and object-oriented concepts. Essential for enterprise development.",
      instructor: "Java Expert",
      instructorImage: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "12 weeks",
      rating: 4.8,
      students: 1100,
      price: 8999,
      originalPrice: 17999,
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=600&h=400&fit=crop",
      category: "programming",
      tags: ["Java", "OOP", "Enterprise"],
      gradient: "from-red-400 to-pink-600",
      featured: false,
      lessons: 120,
      hours: 60
    },
    {
      id: 14,
      title: "Academic Tuitions (Class 6th to 10th)",
      description: "Comprehensive academic tuition for classes 6th to 10th covering all major subjects.",
      instructor: "Education Expert",
      instructorImage: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=50&h=50&fit=crop&crop=face",
      level: "Beginner",
      duration: "Monthly subscription",
      rating: 4.5,
      students: 2500,
      price: 1999,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=600&h=400&fit=crop",
      category: "education",
      tags: ["Academic", "Tuition", "School"],
      gradient: "from-green-400 to-teal-600",
      featured: false,
      lessons: 0,
      hours: 0
    }
  ];

  const categories = ['all', 'frontend', 'backend', 'data-science', 'design', 'mobile'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const sortedCourses = [...filteredCourses];

  const toggleWishlist = (courseId) => {
    setWishlist(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  
  const featuredCourses = sortedCourses.filter(course => course.featured);
  const regularCourses = sortedCourses.filter(course => !course.featured);

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className={`courses-header ${isVisible ? 'slide-in-down' : ''}`}>
        <div className="courses-container">
          <h1 className="courses-page-title">
            <span className="courses-title-gradient">Explore Our Courses</span>
          </h1>
          <p className="courses-page-subtitle">
            Discover world-class courses designed to help you master new skills and advance your career
          </p>
        </div>
      </section>

      {/* Combined Search and Filters Section */}
      <section className="courses-filter-section">
        <div className="courses-container">
          <div className="filter-controls-row">
            {/* Search Bar */}
            <div className="search-input-container">
              <FaSearch className="search-icon-inline" />
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input-inline"
              />
            </div>
            
            {/* Filter Controls */}
            <div className="filter-controls-right">
              {/* Category Dropdown */}
              <div className="filter-dropdown">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Level Dropdown */}
              <div className="filter-dropdown">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="filter-select"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Clear Filters Button */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                  setSearchTerm('');
                }}
                className="clear-filters-btn"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      {featuredCourses.length > 0 && (
        <section className="courses-section">
          <div className="courses-container">
            <div className="section-header">
              <h2 className="section-title">Featured Courses</h2>
              <div className="featured-badge">
                <FaStar />
                <span>Top Rated</span>
              </div>
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
                    <button
                      onClick={() => toggleWishlist(course.id)}
                      className="wishlist-btn"
                    >
                      <FaHeart className={wishlist.includes(course.id) ? 'active' : ''} />
                    </button>
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
                      <Link 
                        to={`/course/${course.id}`}
                        className="course-card-enroll"
                      >
                        <FaShoppingCart />
                        <span>View Details</span>
                      </Link>
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
          <div className="section-header">
            <h2 className="section-title">
              All Courses ({sortedCourses.length})
            </h2>
          </div>
          
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
                    <button
                      onClick={() => toggleWishlist(course.id)}
                      className="wishlist-btn"
                    >
                      <FaHeart className={wishlist.includes(course.id) ? 'active' : ''} />
                    </button>
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
                      <Link 
                        to={`/course/${course.id}`}
                        className="course-card-enroll"
                      >
                        <FaPlay />
                        <span>View Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
