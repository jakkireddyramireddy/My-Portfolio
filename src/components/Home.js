import React from 'react';
import back from '../asserts/back.jpg';
import profile from '../asserts/profile.png';
import { FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import resume from '../asserts/jrr1.pdf';

export default function Home() {
  const styles = {
    container: {
      backgroundImage: `url(${back})`,
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: 'cover-content',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      padding: '30px',
      boxSizing: 'border-box',
      fontSize: '1.1rem', 
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      gap: '90px',
      width: '100%',
      maxWidth: '1200px',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    profileImage: {
      width: '320px',
      height: '320px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '5px solid black',
    },
    textSection: {
      flex: 1,
      minWidth: '280px',
    },
    heading: {
      fontSize: '2.8rem',
      margin: '0',
      fontWeight: 'bold',
    },
    subHeading: {
      fontSize: '1.4rem',
      marginTop: '10px',
      color: '#1c1a1aff',
    },
    location: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      fontSize: '1.1rem',
      color: 'black',
    },
    educationWrapper: {
      marginTop: '25px',
    },
    eduTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      textDecoration: 'underline',
    },
    timelineWrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
    timelinePath: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '20px',
    },
    circle: {
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      backgroundColor: 'black',
    },
    line: {
      width: '2px',
      height: '70px',
      backgroundColor: 'black',
    },
    eduDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
    },
    eduItem: {
      lineHeight: '1.5',
    },
    footerIcons: {
      marginTop: '30px',
      display: 'flex',
      gap: '30px',
    },
    icon: {
      fontSize: '1.9rem',
      color: 'black',
      transition: 'transform 0.3s',
      cursor: 'pointer',
    },
    resumeButton: {
      marginTop: '25px',
      padding: '10px 20px',
      backgroundColor: '#c3deeacc',
      color: '#000',
      border: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    resumeHover: {
      backgroundColor: '#ddd',
    },
    // Responsive
    '@media only screen and (maxWidth: 768px)': {
      contentWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      },
      profileImage: {
        width: '200px',
        height: '200px',
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <img src={profile} alt="Profile" style={styles.profileImage} />
        <div style={styles.textSection}>
          <h1 style={styles.heading}>Hai... I am Ramireddy</h1>
          <div style={styles.subHeading}>A passionate Full Stack Developer</div>
          <div style={styles.location}>
            <FaMapMarkerAlt style={{ marginRight: '8px' }} />
            Palnadu, India
          </div>

          <div style={styles.educationWrapper}>
            <div style={styles.eduTitle}>Education</div>
            <div style={styles.timelineWrapper}>
              <div style={styles.timelinePath}>
                <div style={styles.circle}></div>
                <div style={styles.line}></div>
                <div style={styles.circle}></div>
                <div style={styles.line}></div>
                <div style={styles.circle}></div>
              </div>
              <div style={styles.eduDetails}>
                <div style={styles.eduItem}>
                  <strong>Undergraduate:</strong> Vignan's Lara Institute of Technology & Science  
                  <br />
                  <small>Percentage: 75%</small>
                </div>
                <div style={styles.eduItem}>
                  <strong>Diploma:</strong> Andhra Polytechnic, Kakinada  
                  <br />
                  <small>Percentage: 70%</small>
                </div>
                <div style={styles.eduItem}>
                  <strong>SSC:</strong> Rainbow E.M. School  
                  <br />
                  <small>Percentage: 92%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Icons */}
      <div style={styles.footerIcons}>
        <a href="https://github.com/jakkireddyramireddy" target="_blank" rel="noreferrer">
          <FaGithub style={styles.icon} />
        </a>
        <a href="mailto:jakkireddyramireddy9959@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope style={styles.icon} />
        </a>
        <a href="https://leetcode.com/u/jakkireddyramireddy9959/" target="_blank" rel="noreferrer">
          <SiLeetcode style={styles.icon} />
        </a>
      </div>

      {/* Resume Button */}
      <a href={resume} download>
        <button style={styles.resumeButton}>Download Resume</button>
      </a>
    </div>
  );
}
