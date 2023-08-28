import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import About from './About';
import Team from './Team';
import ContactUs from './ContactUs';
import First from './First';

function App() {

  return <Router>

  <nav>
    <Link to='/first' className='link'>First page</Link>
    <Link to='/about'className='link'>About</Link>
    <Link to='/team' className='link'>Team</Link>
    <Link to='/contact-us' className='link'>Contact us</Link>
  </nav>

  <Routes>
    <Route path='/first' element={<First />}/>
    <Route path='/about' element={<About />} />
    <Route path='/team' element={<Team />}/>
    <Route path='/contact-us' element={<ContactUs />} />
  </Routes>
  
  </Router>
}

export default App;
