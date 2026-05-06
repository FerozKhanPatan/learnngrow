import React, { useState } from 'react';
import '../styles/global.css';

function ReadingRoom() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedArticle, setExpandedArticle] = useState(null);

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Education",
      excerpt: "Explore how artificial intelligence is transforming the educational landscape and creating new learning opportunities.",
      content: `Artificial Intelligence is revolutionizing education in unprecedented ways. From personalized learning paths to intelligent tutoring systems, AI is creating opportunities that were once thought impossible.

This comprehensive exploration delves into how machine learning algorithms are adapting to individual student needs, providing real-time feedback, and creating more engaging learning environments. We examine case studies from leading educational institutions that have successfully integrated AI into their curricula, resulting in improved student outcomes and more efficient teaching methodologies.

The article also addresses concerns about AI in education, including data privacy, the importance of human oversight, and the need to maintain the human element in learning. As we look toward the future, we discuss emerging trends like AI-powered virtual reality classrooms, automated assessment systems, and the potential for AI to democratize education globally.

The implications of these developments are profound, promising to reshape not just how we learn, but how we think about education itself in the 21st century.`,
      category: "Technology",
      author: "Dr. Priya Sharma",
      readTime: "5 min read",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Mastering Python for Data Science",
      excerpt: "A comprehensive guide to learning Python programming for data science and machine learning applications.",
      content: `Python has become the de facto language for data science and machine learning, and for good reason. This comprehensive guide takes you from the basics of Python programming to advanced data science applications.

We start with fundamental concepts like data types, control structures, and functions, then move on to essential libraries like NumPy for numerical computing, Pandas for data manipulation, and Matplotlib for visualization. The article covers practical examples of data cleaning, exploratory data analysis, and statistical modeling.

We explore machine learning frameworks like Scikit-learn and TensorFlow, with hands-on examples of classification, regression, and clustering algorithms. Real-world case studies demonstrate how to apply these skills to solve actual business problems.

The guide also includes best practices for code organization, version control, and collaboration in data science teams. Whether you're a beginner or looking to enhance your skills, this article provides the roadmap to becoming proficient in Python for data science.`,
      category: "Programming",
      author: "Rahul Kumar",
      readTime: "8 min read",
      date: "2024-01-12",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Effective Study Techniques for Programmers",
      excerpt: "Discover proven methods to enhance your learning efficiency and retain programming concepts better.",
      content: `Learning to program effectively requires more than just writing code; it demands strategic study techniques that optimize comprehension and retention. This article explores evidence-based learning methods specifically tailored for programmers.

We discuss the importance of deliberate practice, spaced repetition, and active recall in mastering programming concepts. The Pomodoro Technique is adapted for coding sessions, helping maintain focus and prevent burnout. We explore how to create effective learning projects that reinforce theoretical knowledge while building practical skills.

The article covers techniques for reading and understanding documentation, debugging strategies that enhance learning, and methods for staying updated with rapidly changing technologies. We also address the psychological aspects of learning, including overcoming impostor syndrome, managing frustration when facing difficult problems, and maintaining motivation throughout the learning journey.

Real-world examples from successful programmers illustrate how these techniques have been applied to achieve mastery in various programming domains.`,
      category: "Learning",
      author: "Prof. Anand Reddy",
      readTime: "6 min read",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Cloud Computing Trends in 2024",
      excerpt: "Stay updated with the latest cloud computing technologies and their impact on modern software development.",
      content: `Cloud computing continues to evolve at a rapid pace, and 2024 brings exciting new developments that are reshaping how we build and deploy applications. This article examines the key trends driving cloud adoption and innovation.

Serverless computing is maturing, with new frameworks and tools making it easier to build event-driven architectures. Multi-cloud and hybrid cloud strategies are becoming the norm, requiring new approaches to management and orchestration. We explore the rise of edge computing and how it's complementing traditional cloud services to enable real-time processing closer to users.

The article covers advancements in container technologies, including Kubernetes improvements and the growing ecosystem of cloud-native tools. We also discuss the impact of AI on cloud services, from intelligent resource optimization to AI-powered development tools.

Security considerations are addressed, including zero-trust architectures and compliance automation. Real-world case studies demonstrate how organizations are leveraging these trends to build more scalable, resilient, and cost-effective applications.`,
      category: "Technology",
      author: "Sneha Iyer",
      readTime: "7 min read",
      date: "2024-01-08",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Building Scalable Web Applications",
      excerpt: "Learn the best practices and architectural patterns for creating web applications that can handle growth.",
      content: `Building web applications that can scale effectively requires careful planning and adherence to proven architectural patterns. This comprehensive guide covers everything you need to know about creating scalable applications.

We start with the fundamentals of scalability, explaining the difference between vertical and horizontal scaling and when to use each approach. The article explores microservices architecture, including service decomposition strategies, inter-service communication patterns, and data consistency challenges.

We discuss database scaling techniques, from read replicas to sharding strategies, and how to choose the right database for your needs. Caching strategies are covered in depth, including CDN implementation, application-level caching, and database query optimization.

The guide addresses performance monitoring and optimization, teaching you how to identify bottlenecks and implement effective solutions. We also explore DevOps practices that support scalability, including CI/CD pipelines, infrastructure as code, and automated scaling policies. Real-world examples from companies that have successfully scaled their applications provide practical insights and lessons learned.`,
      category: "Programming",
      author: "Vikram Gowda",
      readTime: "10 min read",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "The Psychology of Learning",
      excerpt: "Understanding how our brain processes information and how to leverage it for better educational outcomes.",
      content: `The human brain's capacity for learning is extraordinary, yet understanding how we learn can dramatically improve educational outcomes. This article delves into the cognitive science behind learning, exploring how our brains process, store, and retrieve information.

We examine the role of attention, memory, and motivation in the learning process, backed by the latest neuroscience research. The article covers different learning styles and how to adapt teaching methods to accommodate diverse learners. We discuss the importance of metacognition – thinking about thinking – and how it can enhance learning effectiveness.

The concept of neuroplasticity is explored, showing how the brain can reorganize itself and form new neural connections throughout life. We address common learning myths and misconceptions, replacing them with evidence-based strategies.

Practical techniques like interleaving, elaboration, and dual coding are explained with examples of how to apply them in various learning contexts. The article also considers the emotional aspects of learning, including how stress, anxiety, and confidence impact our ability to acquire and retain knowledge.`,
      category: "Learning",
      author: "Dr. Nandini Murthy",
      readTime: "9 min read",
      date: "2024-01-03",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    }
  ];

  const categories = ['all', 'Technology', 'Programming', 'Learning'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find(article => article.featured);

  return (
    <div className="reading-room-page">
      {/* Hero Section */}
      <section className="reading-room-hero">
        <div className="container">
          <h1 className="reading-room-title">Reading Room</h1>
          <p className="reading-room-subtitle">
            Explore insightful articles on technology, programming, and learning methodologies
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="reading-room-filters">
        <div className="container">
          <div className="filter-controls">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search articles..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Articles' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && (
        <section className="featured-article-section">
          <div className="container">
            <div className="featured-article">
              <div className="featured-image-container">
                <img src={featuredArticle.image} alt={featuredArticle.title} className="featured-image" />
                <div className="featured-overlay">
                  <span className="featured-badge">Featured</span>
                </div>
              </div>
              <div className="featured-content">
                <div className="article-meta">
                  <span className="article-category">{featuredArticle.category}</span>
                  <span className="article-date">{featuredArticle.date}</span>
                  <span className="read-time">{featuredArticle.readTime}</span>
                </div>
                <h2 className="featured-title">{featuredArticle.title}</h2>
                <p className="featured-excerpt">{featuredArticle.excerpt}</p>
                <div className="article-author">
                  <span className="author-name">By {featuredArticle.author}</span>
                </div>
                <button className="read-more-btn" onClick={() => setExpandedArticle(featuredArticle.id)}>Read Full Article</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="articles-section">
        <div className="container">
          <div className="articles-grid">
            {filteredArticles.map(article => (
              <article key={article.id} className="article-card">
                <div className="article-image-container">
                  <img src={article.image} alt={article.title} className="article-image" />
                  <div className="article-category-badge">
                    {article.category}
                  </div>
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="article-date">{article.date}</span>
                    <span className="read-time">{article.readTime}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-footer">
                    <span className="author-name">By {article.author}</span>
                    <button className="read-btn" onClick={() => setExpandedArticle(article.id)}>Read More</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full Article Modal */}
      {expandedArticle && (
        <div className="article-modal-overlay" onClick={() => setExpandedArticle(null)}>
          <div className="article-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setExpandedArticle(null)}>×</button>
            {(() => {
              const article = articles.find(a => a.id === expandedArticle);
              if (!article) return null;
              return (
                <>
                  <div className="modal-header">
                    <img src={article.image} alt={article.title} className="modal-image" />
                    <div className="modal-meta">
                      <span className="modal-category">{article.category}</span>
                      <span className="modal-date">{article.date}</span>
                      <span className="modal-read-time">{article.readTime}</span>
                    </div>
                  </div>
                  <div className="modal-content">
                    <h1 className="modal-title">{article.title}</h1>
                    <div className="modal-author">By {article.author}</div>
                    <div className="modal-body">
                      <p className="modal-excerpt">{article.excerpt}</p>
                      <div className="modal-full-content">
                        {article.content.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="article-paragraph">{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReadingRoom;
