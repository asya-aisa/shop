import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons'; 
function First() {
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