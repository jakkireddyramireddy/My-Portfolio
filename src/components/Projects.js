import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import e1 from '../asserts/e1.png';
import e2 from '../asserts/e2.png';
import e3 from '../asserts/e3.png';
import e4 from '../asserts/e4.png';
import e5 from '../asserts/e5.png';
import e6 from '../asserts/e6.png';
import emp1 from '../asserts/emp1.png';
import emp2 from '../asserts/emp2.png';
import c1 from '../asserts/c1.jpg';
import c2 from '../asserts/c2.jpg';
import c3 from '../asserts/c3.jpg';
import c4 from '../asserts/c4.jpg';
import c5 from '../asserts/c5.jpg';

function Projects() {
  return (
    <>
      <style>{`
        .projects-page {
          background-color: #e3f2fd;
          padding: 10px 20px 60px;
          min-height: 100vh;
        }

        .projects-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #004d40;
          font-weight: bold;
        }

        .projects-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
        }

        .project-card {
          width: 45%;
          background: linear-gradient(135deg, #ffffff, #d2f3ff);
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          position: relative;
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-title {
          font-size: 1.6rem;
          color: #006064;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .project-description {
          font-size: 1rem;
          color: #333;
          margin-top: 15px;
          line-height: 1.6;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 12px;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: absolute;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .image-container img.active {
          opacity: 1;
          position: relative;
        }

        .tech-buttons {
          margin: 15px 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-buttons span {
          padding: 6px 12px;
          font-size: 0.85rem;
          font-weight: bold;
          border-radius: 50px;
          color: white;
          background-color: #0288d1;
          transition: background-color 0.3s;
        }

        .tech-buttons span:hover {
          background-color: #0277bd;
        }

        .github-link {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          color: #01579b;
          text-decoration: none;
          font-size: 1.05rem;
        }

        .github-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .project-card {
            width: 90%;
          }
        }
      `}</style>

      <div className="projects-page">
        <div className="projects-title">Java Projects</div>
        <div className="projects-grid">
          <ProjectCard
            title="Ecommerce - Customized Store"
            images={[e1, e2, e3, e4, e5, e6]}
            github="https://github.com/jakkireddyramireddy/ecommerce"
            description="A personalized shopping website for custom frames, T-shirts, and clay pots. 
            Customers can upload images and get them printed on selected products. 
            Features include secure login, image upload, dynamic cart, order tracking, 
            location-based contact, and a user-friendly UI tailored for mobile and web platforms."
            tech={['Java', 'Spring Boot', 'MySQL', 'JPA', 'React']}
          />

          <ProjectCard
            title="Employee Contact Logs"
            images={[emp1, emp2]}
            github="https://github.com/jakkireddyramireddy/contact-logs"
            description="A contact management system to handle employee records. 
            Users can add, update, and delete contact information with image upload and storage. 
            Developed using Java, Spring Boot, MySQL, and Thymeleaf for rendering dynamic content."
            tech={['Java', 'Spring Boot', 'MySQL', 'React']}
          />
        </div>

        <div className="projects-title" style={{ marginTop: '80px' }}>MERN Stack Projects</div>
        <div className="projects-grid">
          <ProjectCard
            title="Convo - Real-Time Chat App"
            images={[c1, c2, c3, c4, c5]}
            github="https://github.com/jakkireddyramireddy/convo-chatapp"
            description="A real-time Android chat application developed using React Native, 
            Socket.io, MySQL, and Express. Enables seamless messaging between users 
            with secure login using hashed passwords, chat history retrieval, 
            and a WhatsApp-like interface with recent conversations and live updates."
            tech={['React Native', 'Node.js', 'Express', 'MySQL', 'Socket.io']}
          />

          {/* <ProjectCard
            title="MERN App Placeholder"
            images={[c2, c3, c4]}
            github="#"
            description="This is a placeholder for an upcoming MERN Stack application. 
            You can replace it with any of your other MERN projects in the future. 
            The layout supports MongoDB, Express, React, and Node.js-based apps."
            tech={['MongoDB', 'Express', 'React', 'Node.js']}
          /> */}
        </div>
      </div>
    </>
  );
}

function ProjectCard({ title, images, github, description, tech }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="project-card">
      <div className="project-title">{title}</div>
      <div className="image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title}-img-${index}`}
            className={index === currentImg ? 'active' : ''}
          />
        ))}
      </div>
      <div className="project-description">{description}</div>
      <div className="tech-buttons">
        {tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      <a className="github-link" href={github} target="_blank" rel="noreferrer">
        <FaGithub /> GitHub Repository
      </a>
    </div>
  );
}

export default Projects;
