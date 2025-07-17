import React from 'react';
import cer1 from '../asserts/cer1.png';
import cer2 from '../asserts/cer2.png';
function TechnicalSkills() {
  const styles = {
    container: {
      padding: '30px',
      fontFamily: 'Segoe UI, sans-serif',
      maxWidth: '1000px',
      margin: '50px auto',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      color: '#333',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#222',
      borderBottom: '2px solid #ccc',
      paddingBottom: '10px',
      marginBottom: '30px',
    },
    grid: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '40px',
    },
    column: {
      flex: 1,
      minWidth: '280px',
    },
    subheading: {
      fontSize: '20px',
      marginBottom: '10px',
      color: '#444',
      borderBottom: '1px solid #aaa',
      paddingBottom: '5px',
    },
    list: {
      marginLeft: '20px',
    },
    listItem: {
      marginBottom: '6px',
      fontSize: '16px',
    },
    softSkillsBox: {
      backgroundColor: '#e0f7ff',
      borderLeft: '6px solid skyblue',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '40px',
    },
    softSkillsHeading: {
      fontSize: '22px',
      color: '#007acc',
      marginBottom: '10px',
    },
    softSkill: {
      fontSize: '16px',
      fontWeight: '500',
      marginBottom: '6px',
      color: '#005577',
    },
    highlightsSection: {
      marginTop: '40px',
    },
    highlightItem: {
      fontSize: '20px',
      marginBottom: '8px',
    },
    certificationsSection: {
      marginTop: '40px',
    },
    certCard: {
      marginBottom: '40px',
      borderRadius: '12px',
      backgroundColor: '#fefefe',
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      padding: '20px',
    },
    certTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
    },
    certDate: {
      fontSize: '14px',
      color: '#777',
      marginBottom: '10px',
    },
    certDesc: {
      fontSize: '15px',
      color: '#444',
      marginBottom: '15px',
    },
    certImageLarge: {
      width: '100%',
      height: 'auto',
      maxHeight: '500px',
      objectFit: 'contain',
      borderRadius: '10px',
      border: '1px solid #ccc',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Technical Skills</h2>

      <div style={styles.grid}>
        <div style={styles.column}>
          <h3 style={styles.subheading}>Languages</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Java (DSA, Competitive Programming)</li>
            <li style={styles.listItem}>Python</li>
            <li style={styles.listItem}>C++</li>
            <li style={styles.listItem}>JavaScript</li>
          </ul>

          <h3 style={styles.subheading}>Backend</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Node.js</li>
            <li style={styles.listItem}>Express.js</li>
            <li style={styles.listItem}>Spring Boot</li>
          </ul>

          <h3 style={styles.subheading}>Database</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>MySQL</li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.subheading}>Frontend</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>HTML</li>
            <li style={styles.listItem}>CSS</li>
            <li style={styles.listItem}>React</li>
            <li style={styles.listItem}>React Native</li>
          </ul>

          <h3 style={styles.subheading}>Other Tools</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Git</li>
            <li style={styles.listItem}>GitHub</li>
            <li style={styles.listItem}>VS Code</li>
            <li style={styles.listItem}>Postman</li>
          </ul>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div style={styles.softSkillsBox}>
        <h3 style={styles.softSkillsHeading}>Soft Skills</h3>
        <div style={styles.softSkill}>✔ Problem Solving</div>
        <div style={styles.softSkill}>✔ Team Collaboration</div>
        <div style={styles.softSkill}>✔ Communication Skills</div>
        <div style={styles.softSkill}>✔ Adaptability</div>
        <div style={styles.softSkill}>✔ Time Management</div>
      </div>

      {/* Additional Highlights Section */}
      <div style={styles.highlightsSection}>
        <h3 style={styles.subheading}>Additional Highlights</h3>
        <ul style={styles.list}>
          <li style={styles.highlightItem}>
             Solved 200+ problems on LeetCode, continuously enhancing problem-solving and competitive programming abilities.
          </li>
          <li style={styles.highlightItem}>
             You can verify my leetcode at:<a href='https://leetcode.com/u/jakkireddyramireddy9959/' target='blank'>LEETCODE</a>
          </li>
          <li style={styles.highlightItem}>
             Strong problem solving ,Competitive codeing and Data Structures and algotrithms using java.
          </li>
           <li style={styles.highlightItem}>
             Learning system design and security much more deeper for building efficient and scalable applications.
          </li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div style={styles.certificationsSection}>
        <h3 style={styles.heading}>Certifications</h3>

        <div style={styles.certCard}>
          <div style={styles.certTitle}>Full Stack Java - Udemy</div>
          <div style={styles.certDate}>Completed: April 2025</div>
          <div style={styles.certDesc}>
            Covered Java, Spring Boot, REST APIs, and full-stack integration with hands-on projects.
          </div>
          <img
            src={cer2}
            alt="Full Stack Java Certificate"
            style={styles.certImageLarge}
          />
        </div>

        <div style={styles.certCard}>
          <div style={styles.certTitle}>MERN Stack - Udemy</div>
          <div style={styles.certDate}>Completed: March 2025 – May 2025</div>
          <div style={styles.certDesc}>
            Built complete full-stack applications using MongoDB, Express, React, and Node.js with real-world use cases.
          </div>
          <img
            src={cer1}
            alt="MERN Stack Certificate"
            style={styles.certImageLarge}
          />
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
