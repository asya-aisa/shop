import { useState } from "react";

function Buttons({filteredClothes, allClothes, data, setClothes}) {
    const [check, setCheck] = useState(false);
    const arrayChecked = []


    const addItem = (e) => {
        const value = e.target.value;
        arrayChecked.push(value);
        console.log(arrayChecked)
    }

    const filterClothes = (e) => {
        e.preventDefault();
        const filterResult = [];

        data.forEach(item => {
            let searchTerm = item.searchTerm;
                if(arrayChecked.includes(searchTerm)) {
                    filterResult.push(item);
                    setClothes(filterResult);
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
            <input onClick={() => addItem} type="radio" name="dress" value='dress' defaultChecked={check} onChange={} />
            </label>

            <label>SHOES
            <input onClick={addItem} type="radio" name="shoes" value='shoes' />
            </label>

            <input onClick={addItem} type="checkbox" name="shoes" value='shoes' />

            <button onClick={filterClothes}>Show results</button>
            </form>
        </div>
    
    </div>)
}
export default Buttons;