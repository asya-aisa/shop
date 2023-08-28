import { useState } from "react";

function Buttons({filteredClothes, allClothes, data, setClothes}) {
    const [check, setCheck] = useState(false);

    const arrayChecked = []

    const addItem = (e) => {
    setCheck(check => !check);

    const value = e.target.value;
    arrayChecked.push(value);

    console.log(check)


        if(check) {
            arrayChecked.push(value);
        }
        else{arrayChecked.pop()}
        console.log(arrayChecked)
        
    }

    const filterClothes = () => {
        // e.preventDefault();
        const filterResult = [];

        console.log(arrayChecked)
        // console.log(check)

        data.forEach(item => {
            let searchTerm = item.searchTerm;
                if(arrayChecked.includes(searchTerm)) {
                    filterResult.push(item);
                    setClothes(filterResult);

                    console.log(arrayChecked)
                }
        })
    }

    return(<div>
    <div className="cont">
        <button onClick={() => allClothes()} className="change">All</button>
        <button onClick={() => filteredClothes('dress')} className="change">Dresses</button>
        <button onClick={() => filteredClothes('skirt')} className="change">Skirts</button>
        <button onClick={() => filteredClothes('pants')} className="change">Pants</button>
        <button onClick={() => filteredClothes('shoes')} className="change">Shoes</button>
        <button onClick={() => filteredClothes('shirt')} className="change">Shirts</button>
        </div>

        <div className="cont">
            <form>
            <label>DRESS
            <input onClick={addItem} type="checkbox" name="dress" value='dress'/>
            </label>

            <label>SHOES
            <input onClick={addItem} type="checkbox" name="shoes" value='shoes' />
            </label>

            
            </form>
            <button onClick={filterClothes}>Show results</button>
        </div>
    
    </div>)
}
export default Buttons;