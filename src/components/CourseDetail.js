import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaClock, FaPlay, FaShoppingCart, FaArrowLeft, FaBook, FaCertificate } from 'react-icons/fa';
import '../styles/global.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // All courses data (same as in Courses.js)
  const allCourses = [
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
      image: "https://images.unsplash.com/photo-1512941937409-a4c65e70187e?w=600&h=400&fit=crop",
      category: "mobile",
      tags: ["Android", "Kotlin", "Jetpack"],
      gradient: "from-green-400 to-blue-600",
      featured: true,
      lessons: 120,
      hours: 80,
      whatYouLearn: [
        "Kotlin programming fundamentals",
        "Android Studio and development tools",
        "Jetpack components (ViewModel, LiveData, Navigation)",
        "Building responsive UIs with Material Design",
        "Working with APIs and data persistence",
        "Publishing apps to Google Play Store"
      ],
      requirements: [
        "Basic programming knowledge",
        "Computer with Android Studio installed",
        "Understanding of OOP concepts"
      ]
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
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      category: "backend",
      tags: ["Design Patterns", "Architecture", "OOP"],
      gradient: "from-purple-400 to-pink-600",
      featured: true,
      lessons: 80,
      hours: 40,
      whatYouLearn: [
        "Creational patterns (Singleton, Factory, Builder)",
        "Structural patterns (Adapter, Decorator, Facade)",
        "Behavioral patterns (Observer, Strategy, Command)",
        "SOLID principles and best practices",
        "Refactoring existing code with patterns",
        "Real-world implementation examples"
      ],
      requirements: [
        "Strong understanding of OOP",
        "Experience with at least one programming language",
        "Basic software development knowledge"
      ]
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Master fundamental data structures and algorithms. Essential for technical interviews and efficient programming.",
      instructor: "Algorithm Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Advanced",
      duration: "16 weeks",
      rating: 4.9,
      students: 1200,
      price: 29999,
      originalPrice: 44999,
      image: "https://images.unsplash.com/photo-1559028006-848a6538dfc9?w=600&h=400&fit=crop",
      category: "backend",
      tags: ["DSA", "Algorithms", "Problem Solving"],
      gradient: "from-red-400 to-orange-600",
      featured: true,
      lessons: 160,
      hours: 120,
      whatYouLearn: [
        "Arrays, Linked Lists, Stacks, Queues",
        "Trees, Graphs, and advanced data structures",
        "Sorting and searching algorithms",
        "Dynamic programming and recursion",
        "Time and space complexity analysis",
        "Problem-solving strategies for interviews"
      ],
      requirements: [
        "Strong programming fundamentals",
        "Mathematical aptitude",
        "Logical thinking skills"
      ]
    },
    {
      id: 4,
      title: "English Speaking & Vocabulary",
      description: "Improve your English communication skills with comprehensive vocabulary building and speaking practice.",
      instructor: "Language Coach",
      instructorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      level: "Beginner",
      duration: "8 weeks",
      rating: 4.6,
      students: 2100,
      price: 5999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=600&h=400&fit=crop",
      category: "language",
      tags: ["English", "Speaking", "Vocabulary"],
      gradient: "from-blue-400 to-cyan-600",
      featured: false,
      lessons: 60,
      hours: 30,
      whatYouLearn: [
        "Everyday English conversations",
        "Business and professional communication",
        "Public speaking and presentation skills",
        "Vocabulary building techniques",
        "Grammar and pronunciation",
        "Confidence building exercises"
      ],
      requirements: [
        "Basic understanding of English",
        "Willingness to practice speaking"
      ]
    },
    {
      id: 5,
      title: "Hindi Speaking & Vocabulary",
      description: "Learn Hindi speaking and vocabulary with interactive lessons and practical conversation practice.",
      instructor: "Hindi Teacher",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      level: "Beginner",
      duration: "6 weeks",
      rating: 4.5,
      students: 1800,
      price: 3999,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
      category: "language",
      tags: ["Hindi", "Speaking", "Vocabulary"],
      gradient: "from-orange-400 to-red-600",
      featured: false,
      lessons: 50,
      hours: 25,
      whatYouLearn: [
        "Basic Hindi grammar and sentence structure",
        "Everyday conversations and greetings",
        "Hindi vocabulary for common situations",
        "Reading and writing Devanagari script",
        "Cultural context and usage",
        "Practice sessions with native speakers"
      ],
      requirements: [
        "Interest in learning Hindi",
        "Basic literacy skills"
      ]
    },
    {
      id: 6,
      title: "Core & Advanced Python with AI",
      description: "Learn Python programming from basics to advanced concepts including AI fundamentals and machine learning basics.",
      instructor: "AI Expert",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      level: "Intermediate",
      duration: "14 weeks",
      rating: 4.8,
      students: 1500,
      price: 19999,
      originalPrice: 34999,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      category: "data-science",
      tags: ["Python", "AI", "Machine Learning"],
      gradient: "from-indigo-400 to-purple-600",
      featured: true,
      lessons: 140,
      hours: 100,
      whatYouLearn: [
        "Python fundamentals and advanced concepts",
        "Object-oriented programming with Python",
        "Data analysis with Pandas and NumPy",
        "Machine learning basics with scikit-learn",
        "Neural networks and deep learning introduction",
        "AI project development"
      ],
      requirements: [
        "Basic programming knowledge",
        "Understanding of mathematical concepts",
        "Computer with Python installed"
      ]
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
      image: "https://images.unsplash.com/photo-1559028006-848a6538dfc9?w=600&h=400&fit=crop",
      category: "backend",
      tags: ["FastAPI", "Python", "API"],
      gradient: "from-teal-400 to-green-600",
      featured: false,
      lessons: 60,
      hours: 30,
      whatYouLearn: [
        "FastAPI framework fundamentals",
        "Building RESTful APIs",
        "Authentication and authorization",
        "Database integration",
        "Testing and deployment",
        "Performance optimization"
      ],
      requirements: [
        "Python programming knowledge",
        "Understanding of web concepts",
        "API development basics"
      ]
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
      image: "https://images.unsplash.com/photo-1559028006-848a6538dfc9?w=600&h=400&fit=crop",
      category: "cloud",
      tags: ["AWS", "Cloud", "DevOps"],
      gradient: "from-yellow-400 to-orange-600",
      featured: false,
      lessons: 120,
      hours: 80,
      whatYouLearn: [
        "AWS core services (EC2, S3, RDS)",
        "Cloud architecture best practices",
        "Security and compliance in AWS",
        "Cost optimization strategies",
        "DevOps with AWS",
        "Serverless computing"
      ],
      requirements: [
        "Basic cloud computing knowledge",
        "Understanding of networking concepts",
        "Linux/Unix basics"
      ]
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
      image: "https://images.unsplash.com/photo-1559028006-848a6538dfc9?w=600&h=400&fit=crop",
      category: "backend",
      tags: ["System Design", "Architecture", "Scalability"],
      gradient: "from-purple-400 to-indigo-600",
      featured: false,
      lessons: 100,
      hours: 60,
      whatYouLearn: [
        "System design fundamentals",
        "Scalability patterns and techniques",
        "Database design and optimization",
        "Microservices architecture",
        "Load balancing and caching",
        "Real-world case studies"
      ],
      requirements: [
        "Strong programming background",
        "Understanding of databases",
        "Knowledge of distributed systems"
      ]
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
      image: "https://images.unsplash.com/photo-1559028006-848a6538dfc9?w=600&h=400&fit=crop",
      category: "ai",
      tags: ["Generative AI", "Machine Learning", "Deep Learning"],
      gradient: "from-pink-400 to-purple-600",
      featured: false,
      lessons: 140,
      hours: 100,
      whatYouLearn: [
        "Large language models fundamentals",
        "GPT and transformer architectures",
        "Text generation and fine-tuning",
        "Image generation with DALL-E",
        "AI ethics and responsible usage",
        "Building AI-powered applications"
      ],
      requirements: [
        "Strong Python programming",
        "Machine learning basics",
        "Understanding of neural networks"
      ]
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
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=600&h=400&fit=crop",
      category: "programming",
      tags: ["C", "Programming", "Systems"],
      gradient: "from-blue-400 to-green-600",
      featured: false,
      lessons: 80,
      hours: 40,
      whatYouLearn: [
        "C programming fundamentals",
        "Data types, operators, and control flow",
        "Functions and modular programming",
        "Pointers and memory management",
        "File handling and I/O operations",
        "System programming concepts"
      ],
      requirements: [
        "Basic computer literacy",
        "Logical thinking ability",
        "Interest in programming"
      ]
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
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=600&h=400&fit=crop",
      category: "programming",
      tags: ["C++", "OOP", "STL"],
      gradient: "from-cyan-400 to-blue-600",
      featured: false,
      lessons: 100,
      hours: 50,
      whatYouLearn: [
        "C++ fundamentals and syntax",
        "Object-oriented programming concepts",
        "STL containers and algorithms",
        "Template programming",
        "Memory management and smart pointers",
        "Modern C++ features (C++11/14/17)"
      ],
      requirements: [
        "C programming knowledge",
        "Understanding of programming concepts",
        "Basic OOP knowledge helpful"
      ]
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
      hours: 60,
      whatYouLearn: [
        "Java fundamentals and syntax",
        "Object-oriented programming in Java",
        "Exception handling and file I/O",
        "Collections framework",
        "Multithreading and concurrency",
        "Java 8+ features and lambdas"
      ],
      requirements: [
        "Basic programming knowledge",
        "Understanding of OOP concepts",
        "Computer with Java JDK installed"
      ]
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
      hours: 0,
      whatYouLearn: [
        "Mathematics (Algebra, Geometry, Statistics)",
        "Science (Physics, Chemistry, Biology)",
        "English language and literature",
        "Social studies and history",
        "Computer basics and digital literacy",
        "Exam preparation and study techniques"
      ],
      requirements: [
        "Student in class 6th-10th",
        "Dedication to regular learning",
        "Parental support for younger students"
      ]
    }
  ];

  useEffect(() => {
    // Find course by ID with safety check
    if (!id) {
      setLoading(false);
      return;
    }
    
    const courseId = parseInt(id);
    const foundCourse = allCourses.find(course => course.id === courseId);

    setCourse(foundCourse);
    setLoading(false);
  }, [id]);

  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading course details...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      <h1 className="course-detail-main-title">Course Details</h1>
      
      <div className="course-detail-grid">
        <div className="course-detail-card">
          <div className="course-detail-icon-section">
            <div className="course-detail-icon">
              <FaBook />
            </div>
            <div className="course-detail-rating">
              <FaStar className="mr-1" />
              {course.rating} ({course.students} students)
            </div>
          </div>
          
          <div className="course-detail-content">
            <div className="course-detail-category">
              {course.level}
            </div>
            <h3 className="course-detail-title">
              {course.title}
            </h3>
            
            <p className="course-detail-description">{course.description}</p>
            
            <div className="course-detail-footer">
              <div>
                <span className="course-detail-price">Rs. {course.price.toLocaleString('en-IN')}</span>
              </div>
              <Link
                to={`/register`}
                className="course-detail-btn"
              >
                <FaShoppingCart />
                <span>Enroll Now</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="course-detail-card">
          <div className="course-detail-icon-section">
            <div className="course-detail-icon">
              <FaClock />
            </div>
            <div className="course-detail-rating">
              Course Duration
            </div>
          </div>
          
          <div className="course-detail-content">
            <div className="course-detail-category">
              Time Investment
            </div>
            <h3 className="course-detail-title">
              {course.duration}
            </h3>
            
            <p className="course-detail-description">
              Complete the course at your own pace with {course.hours} hours of comprehensive content and {course.lessons} detailed lessons.
            </p>
            
            <div className="course-detail-footer">
              <div>
                <span className="course-detail-price">{course.lessons} Lessons</span>
              </div>
              <Link
                to={`/register`}
                className="course-detail-btn"
              >
                <FaPlay />
                <span>Start Learning</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="course-detail-card">
          <div className="course-detail-icon-section">
            <div className="course-detail-icon">
              <FaCertificate />
            </div>
            <div className="course-detail-rating">
              Certificate
            </div>
          </div>
          
          <div className="course-detail-content">
            <div className="course-detail-category">
              Achievement
            </div>
            <h3 className="course-detail-title">
              Verified Certificate
            </h3>
            
            <p className="course-detail-description">
              Earn a recognized certificate upon completion that validates your skills and enhances your professional profile.
            </p>
            
            <div className="course-detail-footer">
              <div>
                <span className="course-detail-price">Lifetime Valid</span>
              </div>
              <Link
                to={`/register`}
                className="course-detail-btn"
              >
                <FaArrowLeft />
                <span>View Sample</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Courses */}
      <div className="text-center mt-8">
        <Link 
          to="/courses"
          className="course-detail-btn"
        >
          <FaArrowLeft />
          <span>Back to All Courses</span>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;