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

function App() {
  const [clothes, setClothes] = useState(data);

  const chosenClothes = (searchTerm) => {
    let newClothes = data.filter((element => element.searchTerm === searchTerm));
    setClothes(newClothes);
  }

  return (<Router>

<nav>
    <Link to='/' className='link'>First page</Link>
    <Link to='/about'className='link'>About</Link>
    <Link to='/team' className='link'>Team</Link>
    <Link to='/contact-us' className='link'>Contact us</Link>
  </nav>

  <Routes>
    <Route path='/about' element={<About />} />
    <Route path='/team' element={<Tea}/>
    <Route path='/contact-us' element={<ContactUs />} />
  </Routes>
    


    <div>
      <div className='cont'>
        <h2 className='back'>Free Standart Shipping</h2>
      </div>
      <Buttons filteredClothes={chosenClothes} />
      <Clothes clothesList= {clothes} />
    </div>
    </Router>
  );
}

export default App;
