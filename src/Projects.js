import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState('java');

  return (
    <div>
      <div className='but'>
        <button onClick={() => setSelectedProject('java')}>Full Stack Java Projects</button>
        <button onClick={() => setSelectedProject('mern')}>MERN Stack Projects</button>
        <button onClick={() => setSelectedProject('apps')}>Apps on Java</button>
        <button onClick={() => setSelectedProject('ml')}>Machine Learning Projects</button>
      </div>

      {selectedProject === 'java' && <Java />}
      {selectedProject === 'mern' && <Mern />}
      {selectedProject === 'apps' && <Apps />}
      {selectedProject === 'ml' && <ML />}
    </div>
  );
}

export default Projects;

const Java = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <div>
      <div className='ecommerce ' onClick={() => toggleExpand('ecommerce1')}>
        <h1>Ecommerce-customer side</h1>
        <b>Description:</b>
        <p>
          This is a product-based self-business Ecommerce website, which is all about customized products.
          Here we can purchase three items:
        </p>
        <ol>
          <li>Customized frames</li>
          <li>Customized printing T-shirts</li>
          <li>Printed clay pots</li>
        </ol>
        <p>
          You can get customized products with your images. This website allows you to upload your image and
          address, which prints the image on your desired components. It maintains user login to keep your products
          visible and secure. We have a contact page that displays the location of our store and a cart that displays
          all your orders.
        </p>
        {expanded === 'ecommerce1' && <div>
        <h3>lets see in detail</h3>
        <div className='sce'> <div >
        <img src="/home.png" width="50%" height="auto" alt="homeimg" /><p style={{float:"right"}}>this is main page</p></div><div>
        <img src="/viewprodusts.png" width="50%" height="auto" alt="frames" /><p style={{float:"right"}}>this is main page</p></div><div>
        <img src="/frameselection.png" width="50%" height="auto" alt="products" /><p style={{float:"right"}}>this is main page</p></div><div>
        <img src="/details.png" width="50%" height="auto" alt="details" /><p style={{float:"right"}}>this is main page</p></div><div>
        <img src="/sucess.png" width="50%" height="auto" alt="sucess" /><p style={{float:"right"}}>this is main page</p></div><div>
        <img src="/consoledetails.png" width="50%" height="auto" alt="console" /><p style={{float:"right"}}>this is main page</p></div>
        </div>
        </div>}
      </div>

      <div className='ecommerce ' onClick={() => toggleExpand('ecommerce2')}>
        <h1>Contact Logs</h1>
        <b>Description:</b>
        <p>
          This is just a practice project to access images and data from the database and perform CRUD operations.
          We can add employee contact details along with images and addresses and view them via a button.
          We can also modify the stored content as well.
        </p>
        {expanded === 'ecommerce2' && <div>
          <div className='sce'> <div >
          <img src="/emp1.png" width="50%" height="auto" alt="homeimg" /><p style={{float:"right"}}>this is main page</p></div>
          <div >
          <img src="/emp2.png" width="50%" height="auto" alt="homeimg" /><p style={{float:"right"}}>this is main page</p></div>
          </div>
        </div>}
      </div>
    </div>
  );
};

const Mern = () => {
  return (
    <div>
      <h2>MERN Stack Projects</h2>
      <p>List of MERN Stack Projects...</p>
    </div>
  );
};

const Apps = () => {
  return (
    <div>
      <h2>Java Apps</h2>
      <p>List of Java Applications...</p>
    </div>
  );
};

const ML = () => {
  return (
    <div>
      <h2>Machine Learning Projects</h2>
      <p>List of ML Projects...</p>
    </div>
  );
};
