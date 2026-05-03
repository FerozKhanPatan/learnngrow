import React, { useEffect, useState } from 'react';
import { FaBook, FaCheckCircle, FaAward, FaProjectDiagram, FaChartLine, FaClock, FaUserGraduate } from 'react-icons/fa';
import '../styles/global.css';

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    const statsTimer = setTimeout(() => {
      setStatsVisible(true);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(statsTimer);
    };
  }, []);

  const stats = [
    {
      icon: <FaBook />,
      label: 'Courses Enrolled',
      value: '0',
      color: 'from-blue-500 to-cyan-600',
      delay: 0
    },
    {
      icon: <FaCheckCircle />,
      label: 'Completed',
      value: '0',
      color: 'from-green-500 to-emerald-600',
      delay: 100
    },
    {
      icon: <FaAward />,
      label: 'Certificates',
      value: '0',
      color: 'from-purple-500 to-pink-600',
      delay: 200
    },
    {
      icon: <FaProjectDiagram />,
      label: 'Projects',
      value: '0',
      color: 'from-orange-500 to-red-600',
      delay: 300
    }
  ];

  const recentActivity = [
    {
      title: 'Account Created',
      description: 'Welcome to Learn N Byte',
      time: 'Just now',
      icon: <FaUserGraduate />,
      color: 'text-blue-500'
    },
    {
      title: 'Dashboard Setup',
      description: 'Personal dashboard configured',
      time: 'Few minutes ago',
      icon: <FaChartLine />,
      color: 'text-green-500'
    },
    {
      title: 'Getting Started',
      description: 'Ready to begin your learning journey',
      time: 'Today',
      icon: <FaBook />,
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className={`dashboard-header ${isVisible ? 'slide-in-down' : ''}`}>
        <h1 className="dashboard-title">
          <span className="dashboard-title-gradient">Welcome to Your Dashboard</span>
          <span className="dashboard-demo-text"> (demo)</span>
        </h1>
        <p className="dashboard-subtitle">Track your learning progress and achievements</p>
      </div>
      
      {/* Stats Grid */}
      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`dashboard-stat-card ${statsVisible ? 'slide-in-up' : ''}`}
            style={{ animationDelay: `${stat.delay}ms` }}
          >
                        <h3 className="dashboard-stat-label">{stat.label}</h3>
            <p className="dashboard-stat-value">{stat.value}</p>
            <div className="stat-progress-bar">
              <div 
                className={`stat-progress-fill bg-gradient-to-r ${stat.color}`}
                style={{ 
                  width: statsVisible ? `${(parseInt(stat.value) / 10) * 100}%` : '0%',
                  transitionDelay: `${stat.delay + 500}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent Activity Section */}
      <div className={`dashboard-recent ${isVisible ? 'slide-in-up' : ''}`} style={{ animationDelay: '600ms' }}>
        <div className="dashboard-section-header">
          <h2 className="dashboard-section-title">
            <FaClock className="dashboard-section-icon" />
            Recent Activity
          </h2>
          <div className="dashboard-section-line"></div>
        </div>
        
        <div className="dashboard-activity">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className={`dashboard-activity-item ${isVisible ? 'slide-in-left' : ''}`}
              style={{ animationDelay: `${800 + (index * 100)}ms` }}
            >
              <div className="activity-icon-container">
                <div className={`activity-icon ${activity.color}`}>
                  {activity.icon}
                </div>
              </div>
              <div className="activity-content">
                <h3 className="dashboard-activity-title">{activity.title}</h3>
                <p className="dashboard-activity-desc">{activity.description}</p>
              </div>
              <span className="dashboard-activity-time">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`dashboard-quick-actions ${isVisible ? 'slide-in-up' : ''}`} style={{ animationDelay: '1200ms' }}>
        <h3 className="quick-actions-title">Quick Actions</h3>
        <div className="quick-actions-grid">
          <button className="quick-action-btn">
            <FaBook className="quick-action-icon" />
            <span>Browse Courses</span>
          </button>
          <button className="quick-action-btn">
            <FaProjectDiagram className="quick-action-icon" />
            <span>My Projects</span>
          </button>
          <button className="quick-action-btn">
            <FaAward className="quick-action-icon" />
            <span>Certificates</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
