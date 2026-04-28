import React, { useState, useEffect } from 'react';
import { FaCode, FaClock, FaStar, FaFilter, FaSearch, FaRocket, FaUsers, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/global.css';

const LiveProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Build a full-featured e-commerce website with React, Node.js, and MongoDB. Includes payment integration, user authentication, and admin dashboard.',
      difficulty: 'Advanced',
      duration: '6 weeks',
      rating: 4.8,
      students: 234,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-500 to-purple-600',
      icon: <FaCode />
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Create a collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      difficulty: 'Intermediate',
      duration: '4 weeks',
      rating: 4.6,
      students: 456,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI'],
      gradient: 'from-green-500 to-teal-600',
      icon: <FaUsers />
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Build a weather dashboard with API integration, data visualization, location-based forecasts, and beautiful weather animations.',
      difficulty: 'Beginner',
      duration: '2 weeks',
      rating: 4.7,
      students: 789,
      image: 'https://images.unsplash.com/photo-1592210454359-0199e0e1d3b1?w=400&h=250&fit=crop',
      technologies: ['JavaScript', 'Chart.js', 'Weather API'],
      gradient: 'from-yellow-500 to-orange-600',
      icon: <FaStar />
    },
    {
      id: 4,
      title: 'Social Media Clone',
      description: 'Develop a social media platform with authentication, posting features, real-time chat, and news feed functionality.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      rating: 4.9,
      students: 567,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      gradient: 'from-purple-500 to-pink-600',
      icon: <FaRocket />
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Create a personal portfolio website with modern design, animations, contact form, and project showcase functionality.',
      difficulty: 'Beginner',
      duration: '1 week',
      rating: 4.5,
      students: 1234,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      gradient: 'from-indigo-500 to-blue-600',
      icon: <FaCode />
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Build a blog platform with CMS functionality, user authentication, rich text editor, and SEO optimization.',
      difficulty: 'Intermediate',
      duration: '5 weeks',
      rating: 4.7,
      students: 345,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      gradient: 'from-teal-500 to-cyan-600',
      icon: <FaGithub />
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
    const matchesDuration = selectedDuration === 'all' || project.duration === selectedDuration;
    
    return matchesSearch && matchesDifficulty && matchesDuration;
  });

  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = ['all', '1 week', '2 weeks', '4 weeks', '5 weeks', '6 weeks', '8 weeks'];

  return (
    <div className="projects-container">
      {/* Header */}
      <div className={`projects-header ${isVisible ? 'slide-in-down' : ''}`}>
        <h1 className="projects-title">
          <span className="projects-title-gradient">Live Projects</span>
        </h1>
        <p className="projects-subtitle">
          Build real-world projects and enhance your portfolio with hands-on experience
        </p>
      </div>

      {/* Filters and Search */}
      <div className={`projects-filters ${isVisible ? 'slide-in-up' : ''}`} style={{ animationDelay: '200ms' }}>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-controls">
          <div className="filter-group">
            <FaFilter className="filter-icon" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="filter-select"
            >
              {difficulties.map(diff => (
                <option key={diff} value={diff}>
                  {diff === 'all' ? 'All Levels' : diff}
                </option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <FaClock className="filter-icon" />
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="filter-select"
            >
              {durations.map(duration => (
                <option key={duration} value={duration}>
                  {duration === 'all' ? 'All Durations' : duration}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${isVisible ? 'slide-in-up' : ''}`}
            style={{ animationDelay: `${300 + (index * 100)}ms` }}
          >
            {/* Project Image */}
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className={`project-image-overlay bg-gradient-to-r ${project.gradient}`}></div>
              <div className="project-rating">
                <FaStar className="rating-star" />
                <span className="rating-text">{project.rating}</span>
              </div>
            </div>

            {/* Project Content */}
            <div className="project-content">
              <div className="project-header">
                <div className="project-icon-container">
                  <div className={`project-icon bg-gradient-to-r ${project.gradient}`}>
                    {project.icon}
                  </div>
                </div>
                <div className="project-meta-badges">
                  <span className={`difficulty-badge difficulty-${project.difficulty.toLowerCase()}`}>
                    {project.difficulty}
                  </span>
                  <span className="duration-badge">
                    <FaClock />
                    {project.duration}
                  </span>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Technologies */}
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Stats */}
              <div className="project-stats">
                <div className="stat-item">
                  <FaUsers className="stat-icon" />
                  <span className="stat-text">{project.students} students</span>
                </div>
              </div>

              {/* Project Actions */}
              <div className="project-actions">
                <button className={`project-btn-primary bg-gradient-to-r ${project.gradient}`}>
                  <FaRocket />
                  Start Project
                </button>
                <button className="project-btn-secondary">
                  <FaExternalLinkAlt />
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">
            <FaSearch />
          </div>
          <h3>No projects found</h3>
          <p>Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
};

export default LiveProjects;
