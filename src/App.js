import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import About from './components/About';
import Workshops from './components/Workshops';
import ReadingRoom from './components/ReadingRoom';
import Dashboard from './components/Dashboard';
import Certificates from './components/Certificates';
import LiveProjects from './components/LiveProjects';
import Support from './components/Support';
import Login from './components/Login';
import Register from './components/Register';
import CourseContact from './components/CourseContact';
import AccountSettings from './components/AccountSettings';
import Learning from './components/Learning';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/reading-room" element={<ReadingRoom />} />
              <Route path="/course-contact" element={<CourseContact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/projects" element={<LiveProjects />} />
              <Route path="/support" element={<Support />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/account-settings" element={<AccountSettings />} />
            </Routes>
          </main>
          <Footer />
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