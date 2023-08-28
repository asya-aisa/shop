import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons'; 
import { useState } from 'react';
function First() {

    const [clothes, setClothes] = useState(data);

    const chosenClothes = (searchTerm) => {
      let newClothes = data.filter((element => element.searchTerm === searchTerm));
      setClothes(newClothes);
    }

    const
    return(
        <div>
                <div>
      <div className='cont'>
        <h2 className='back'>Free Standart Shipping</h2>
      </div>
      <Buttons filteredClothes={chosenClothes} />
      <Clothes clothesList= {clothes} />
    </div>
        </div>
    )
}
export default First;