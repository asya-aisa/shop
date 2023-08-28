import { useState } from 'react';
import './App.css';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';

function App() {
  const [clothes, setClothes] = useState(data);

  return (
    <div>
      <div className='cont'>
        
      </div>
      <Buttons />
      <Clothes clothesList= {clothes} />
    </div>
  );
}

export default App;
