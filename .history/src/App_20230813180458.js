import { useState } from 'react';
import './App.css';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';

function App() {
  const [clothes, setClothes] = useState(data);

  const chosenClothes

  return (
    <div>
      <div className='cont'>
        <h2 className='back'>Free Standart Shipping</h2>
      </div>
      <Buttons />
      <Clothes clothesList= {clothes} />
    </div>
  );
}

export default App;
