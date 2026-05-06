import React, { useState } from 'react';
import '../styles/global.css';

function ReadingRoom() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Education",
      excerpt: "Explore how artificial intelligence is transforming the educational landscape and creating new learning opportunities.",
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
                <button className="read-more-btn">Read Full Article</button>
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
                    <button className="read-btn">Read More</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReadingRoom;
