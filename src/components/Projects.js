import React, { useState } from 'react';
import './Projects.css';
import emp1 from '../asserts/emp1.png';
import emp2 from '../asserts/emp2.png';
import e1 from '../asserts/e1.png';
import e2 from '../asserts/e2.png';
import e3 from '../asserts/e3.png';
import e4 from '../asserts/e4.png';
import e5 from '../asserts/e5.png';
import e6 from '../asserts/e6.png';
import c1 from '../asserts/c1.jpg';
import c2 from '../asserts/c2.jpg';
import c3 from '../asserts/c3.jpg';
import c4 from '../asserts/c4.jpg';
import c5 from '../asserts/c5.jpg';

function Projects() {
  const [selectedProject, setSelectedProject] = useState('java');

  return (
    <div>
      <div className='but'>
        <button onClick={() => setSelectedProject('java')}>Full Stack Java Projects</button>
        <button onClick={() => setSelectedProject('mern')}>MERN Stack Projects</button>
       
      </div>

      {selectedProject === 'java' && <Java />}
      {selectedProject === 'mern' && <Mern />}
     
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
        <img src={e1} width="100%" height="auto" alt="homeimg" />
        <img src={e2} width="100%" height="auto" alt="frames" /></div><div>
        <img src={e3} width="100%" height="auto" alt="products" />
        <img src={e4} width="100%" height="auto" alt="details" /></div><div>
        <img src={e5} width="100%" height="auto" alt="sucess" />
        <img src={e6} width="100%" height="auto" alt="console" /></div>
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
          <div className='c'> <div >
          <img src={emp1} width="100%" height="auto" alt="homeimg" /></div><div>
          <img src={emp2} width="100%" height="auto" alt="homeimg" /></div>
          </div>
        </div>}
      </div>
    </div>
  );
};

const Mern = () => {
   const [expanded, setExpanded] = useState(null);

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  }; 
  return (
     <div className='ecommerce ' onClick={() => toggleExpand('chatapp')}>
        <h1>CONVO</h1>
        <b>Description:</b>
        <p>
          Convo is a real-time Android chat application designed for seamless and secure communication. Users can register and log in to connect with others through instant messaging. The app ensures secure user authentication with hashed passwords, enhancing data protection. Messages exchanged between users are permanently stored, allowing access to full conversation history. Similar to WhatsApp, Convo also displays recent chats for each logged-in user, providing a familiar and user-friendly interface. Built with a focus on real-time performance and privacy, Convo offers a robust platform for reliable mobile communication.
        </p>
        {expanded === 'chatapp' && <div>
          <div className='chatapp'> <div >
          <img src={c1} width="50%" height="auto" alt="homeimg" /></div>
          <div >
          <img src={c2} width="50%" height="auto" alt="homeimg" /></div>
           <div >
          <img src={c3} width="50%" height="auto" alt="homeimg" /></div>
           <div >
          <img src={c4} width="50%" height="auto" alt="homeimg" /></div>
           <div >
          <img src={c5} width="50%" height="auto" alt="homeimg" /></div>
          </div>          
        </div>}
      </div>
  );
};