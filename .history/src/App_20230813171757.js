import { useState } from 'react';
import './App.css';
import { data } from './data';
import Clothes from './Clothes';

function App() {
  const [clothes, setClothes] = useState(data);

  return (
    <div>
      <Clothes clothesList =  />
    </div>
  );
}

export default App;
