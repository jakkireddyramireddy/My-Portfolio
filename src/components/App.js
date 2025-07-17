import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaCode, FaProjectDiagram } from 'react-icons/fa';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
        }

        .header {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 400px;
          height: 70px;
          background-color: rgba(0, 0, 0, 0.85);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          animation: slideDown 1s ease-in-out;
        }

        @keyframes slideDown {
          from {
            top: -100px;
            opacity: 0;
          }
          to {
            top: 0;
            opacity: 1;
          }
        }

        .nav-links {
          display: flex;
          gap: 50px;
        }

        .nav-icon {
          font-size: 1.8rem;
          color: white;
          transition: transform 0.3s, color 0.3s;
        }

        .nav-icon:hover {
          transform: scale(1.3);
          color: cyan;
        }

        .page-content {
          padding-top: 100px;
        }

        @media (max-width: 768px) {
          .header {
            width: 95%;
            height: 60px;
          }

          .nav-links {
            gap: 30px;
          }

          .nav-icon {
            font-size: 1.5rem;
          }

          .page-content {
            padding-top: 80px;
          }
        }
      `}</style>

      <BrowserRouter>
        <div className="header">
          <div className="nav-links">
            <Link to="/"><FaHome className="nav-icon" title="Home" /></Link>
            <Link to="/Skills"><FaCode className="nav-icon" title="Skills & Certifications" /></Link>
            <Link to="/Projects"><FaProjectDiagram className="nav-icon" title="Projects" /></Link>
          </div>
        </div>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
