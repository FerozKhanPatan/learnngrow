import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Certificates from './components/Certificates';
import LiveProjects from './components/LiveProjects';
import Support from './components/Support';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<LiveProjects />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <ToastContainer 
            position="bottom-right" 
            theme="colored"
            toastClassName="!rounded-lg !font-medium"
          />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;