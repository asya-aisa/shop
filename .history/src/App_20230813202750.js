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

function App() {
  const [clothes, setClothes] = useState(data);

  const chosenClothes = (searchTerm) => {
    let newClothes = data.filter((element => element.searchTerm === searchTerm));
    setClothes(newClothes);
  }

  return (

    


    <div>
      <div className='cont'>
        <h2 className='back'>Free Standart Shipping</h2>
      </div>
      <Buttons filteredClothes={chosenClothes} />
      <Clothes clothesList= {clothes} />
    </div>
  );
}

export default App;
