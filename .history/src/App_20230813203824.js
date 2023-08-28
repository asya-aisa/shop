import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import './App.css';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';
import About from './About';
import Team from './Team';
import ContactUs from './ContactUs';

function App() {
  const [clothes, setClothes] = useState(data);

  const chosenClothes = (searchTerm) => {
    let newClothes = data.filter((element => element.searchTerm === searchTerm));
    setClothes(newClothes);
  }

  return <Router>

<nav>
    <Link to='/first' className='link'>First page</Link>
    <Link to='/about'className='link'>About</Link>
    <Link to='/team' className='link'>Team</Link>
    <Link to='/contact-us' className='link'>Contact us</Link>
  </nav>

  <Routes>
    <Route path='/first' element={</>}/>
    <Route path='/about' element={<About />} />
    <Route path='/team' element={<Team />}/>
    <Route path='/contact-us' element={<ContactUs />} />
  </Routes>
  
  </Router>
}

export default App;
