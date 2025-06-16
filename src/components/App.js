import './App.css';
import Projects  from './Projects';
import Home from './Home';
import Skills from './Skills';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <Link to={'/'} className='navbu'>Home</Link>
        <Link to={'/Skills'} className='navbu'>Skills & Certifications</Link>
        <Link to={'/Projects'} className='navbu'>Projects</Link>
      </div>
      <div>
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
      </BrowserRouter>
   
  );
}

export default App;
