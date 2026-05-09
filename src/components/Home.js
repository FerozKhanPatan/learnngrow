import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaUsers, FaCheck, FaQuoteLeft, FaGraduationCap, FaBookOpen, FaPlay } from 'react-icons/fa';
import '../styles/global.css';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ramesh Kumar",
      role: "Software Developer",
      content: "Learn N Byte completely transformed my career. The courses are comprehensive and projects really helped me build my portfolio.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "Full Stack Engineer",
      content: "The best investment I made in my professional development. The instructors are top-notch and community is amazing.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Arun Patil",
      role: "UI/UX Designer",
      content: "I love the hands-on approach to learning. The projects are challenging but rewarding, and I've gained so much confidence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const features = [
    {
      icon: <FaPlay className="text-3xl" />,
      title: "Interactive Learning",
      description: "Engaging video lessons with hands-on coding exercises",
      gradient: "from-blue-500 to-cyan-600",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience",
      gradient: "from-purple-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop"
    },
    {
      icon: <FaCheck className="text-3xl" />,
      title: "Certification",
      description: "Earn recognized certificates upon course completion",
      gradient: "from-green-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with lifetime access to courses",
      gradient: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    }
  ];

  const courses = [
    {
      title: "Android (Kotlin + Jetpack)",
      description: "Master Android development using Kotlin and Jetpack components. Build modern, responsive Android applications from scratch.",
      level: "Intermediate",
      duration: "12 weeks",
      rating: 4.8,
      students: 850,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      gradient: "from-green-400 to-blue-600",
      instructor: "Tech Expert",
      price: 24999,
      originalPrice: 34999
    },
    {
      title: "Design Patterns",
      description: "Learn essential software design patterns and principles. Write cleaner, more maintainable code with proven patterns.",
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.7,
      students: 620,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      gradient: "from-purple-400 to-pink-600",
      instructor: "Code Master",
      price: 14999,
      originalPrice: 24999
    },
    {
      title: "Data Structures & Algorithms",
      description: "Master fundamental data structures and algorithms. Essential for technical interviews and efficient programming.",
      level: "Advanced",
      duration: "16 weeks",
      rating: 4.9,
      students: 1200,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      gradient: "from-red-400 to-orange-600",
      instructor: "Algorithm Expert",
      price: 29999,
      originalPrice: 44999
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-badge">
                <span className="mr-2">🎉</span>
                New courses added every month
              </div>
              
              <h1 className="hero-title">
                <span className="hero-title-gradient-1">
                  Learn, Practice,
                </span>
                <br />
                <span className="hero-title-gradient-2">
                  and Grow
                </span>
              </h1>
              
              <p className="hero-description">
                Unlock your potential with world-class courses, hands-on projects, and a supportive community of learners.
              </p>
              
              <div className="hero-buttons">
                <Link
                  to="/courses"
                  className="btn-hero-primary"
                >
                  <span>Explore Courses</span>
                  <FaArrowRight className="btn-hero-primary-icon" />
                </Link>
              </div>

                          </div>

            {/* Right Image */}
            <div className="hero-image">
              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                    alt="Learning Platform"
                    className="hero-image-img"
                  />
                  <div className="hero-image-overlay"></div>
                </div>
                
                {/* Floating Cards */}
                <div className="floating-card floating-card-1">
                  <div className="floating-card-content">
                    <div className="floating-card-icon">
                      <FaCheck />
                    </div>
                    <div className="floating-card-text">
                      <h4>Expert Instructors</h4>
                      <p>Industry professionals</p>
                    </div>
                  </div>
                </div>
                
                <div className="floating-card floating-card-2">
                  <div className="floating-card-content">
                    <div className="floating-card-icon">
                      <FaGraduationCap />
                    </div>
                    <div className="floating-card-text">
                      <h4>Certified Courses</h4>
                      <p>Industry recognized</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">
              Why Choose <span className="features-title-gradient">Learn N Byte</span>
            </h2>
            <p className="features-description">
              We provide everything you need to succeed in your learning journey with cutting-edge technology and expert guidance
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
              >
                <div className="feature-image-container">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-image"
                  />
                  <div className="feature-image-overlay"></div>
                </div>
                <div className="feature-content">
                  <div className="feature-icon-container">
                    <div className="text-3xl">✨</div>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="courses-section">
        <div className="features-container">
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div
                key={index}
                className="course-card"
              >
                <div className="course-image-container">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                  />
                  <div className="course-image-overlay"></div>
                  <div className="course-rating-badge">
                    <div className="course-rating-content">
                      <FaStar className="course-rating-star" />
                      <span className="course-rating-text">{course.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="course-content">
                  <div className="course-meta">
                    <span className="course-level-badge">
                      {course.level}
                    </span>
                    <span className="course-duration">{course.duration}</span>
                  </div>
                  
                  <h3 className="course-title">
                    {course.title}
                  </h3>
                  
                  <p className="course-description line-clamp-2">{course.description}</p>
                  
                  <div className="course-instructor">
                    <div className="course-instructor-info">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=30&h=30&fit=crop&crop=face"
                        alt={course.instructor}
                        className="course-instructor-avatar"
                      />
                      <span className="course-instructor-name">{course.instructor}</span>
                    </div>
                    <div className="course-students">
                      <FaUsers />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                  
                                  </div>
              </div>
            ))}
          </div>

          <div className="courses-cta">
            <Link
              to="/courses"
              className="courses-cta-btn"
            >
              <span>View All Courses</span>
              <FaArrowRight className="courses-cta-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="features-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">Student Success Stories</h2>
            <p className="testimonials-description">
              Hear from our students about their learning experience
            </p>
          </div>

          <div className="testimonial-container">
            <div className="testimonial-card">
              <FaQuoteLeft className="testimonial-quote" />
              
              <div className="testimonial-author">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="testimonial-avatar"
                />
                <div>
                  <h3>{testimonials[currentTestimonial].name}</h3>
                  <p>{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <FaStar key={i} className="testimonial-star" />
                ))}
              </div>
              
              <p className="testimonial-content">
                "{testimonials[currentTestimonial].content}"
              </p>
            </div>
            
            {/* Testimonial Indicators */}
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`testimonial-indicator ${index === currentTestimonial ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-container">
            <h2 className="cta-title">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="cta-description">
              Join thousands of students who are already building their future with Learn N Byte
            </p>
            <div className="cta-buttons">
              <Link
                to="/courses"
                className="cta-btn-primary"
              >
                <span>Browse Courses</span>
                <FaBookOpen className="cta-btn-primary-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;